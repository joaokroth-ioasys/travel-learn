# World map — detecção de terra (notas de trabalho)

Documento de apoio para o trabalho na jornada `wo` ("Monde"), que renderiza o
`borders/world-map.md` no app. Gerado por `borders/build-world.py`.

---

## Como a detecção de terra funciona

`world-map.md` é um SVG (`viewBox 0 0 6642 2846`) com **470 `<path>`**, um por país
(comandos só `M/L/H/V/Z`). A maioria é loop fechado; **França (`#FF2D55`) e Alemanha
(`#E6D70E`) são redes de bordas de région ABERTAS** — não dá pra preencher direto.

Modelo (igual `build-japan-sea.py`): **água = complemento da terra**. Pipeline:

1. **Rasteriza** todas as bordas como linhas (largura 2) numa imagem 6642×2846.
2. **Fecha as paredes** (dilata a máscara de borda ~2px) — sela vazamentos.
3. **Flood-fill do mar** a partir de pontos-semente em água aberta.
4. **Terra = complemento** do mar; encolhe de volta os ~2px da dilatação.
5. **Traça** a máscara de terra em vetor (`mask_to_loops` + RDP) → `landIslands`.
6. Renderiza: retângulo de mar azul de fundo, terra (papel) por cima, contornos
   dos países por cima. O que não é terra fica azul (mar).

Dois modos no script:
- `python3 build-world.py` → visão **França** (enquadrada, França destacada).
- `python3 build-world.py world` → visão **mundo inteiro** (uniforme,
  terra=papel `#ddd8c8` / mar=azul `#a8cfe0`, sem destaque). É a visão de inspeção.

---

## Por que uma região que era terra não é detectada / colorida

Causas ranqueadas (com evidência):

1. **Vazamento por parede fina/diagonal (dominante).** O `floodfill` do PIL é
   4-conectado; costa de 1–2px em diagonal se toca só pela quina → o mar passa e
   "come" a costa. Mitigado pelo *close* (dilatação) antes do flood.
2. **Gap na costa → o mar inunda o interior inteiro.** Pontas de sub-paths que não
   se encontram / redes de région abertas / gap sub-pixel. Um furo de 1px afunda o
   país todo (foi o caso da Grã-Bretanha antes do fix).
3. **`erode()` raspa terra fina** (istmos/ilhotas de 1–2px).
4. **`minlen`/RDP descartam loops pequenos** → ilhas somem.
5. **Regra de preenchimento** (evenodd/nonzero) pode virar anel/ilha-em-lago em buraco.

Descartadas: parsing (só há M/L/H/V/Z, todos tratados).

---

## Sintoma → correção (edita só `build-world.py`)

Quase tudo é ajuste da lista `sea_seeds` (bloco `if MODE == 'world'`) ou do `CLOSE`:

| O que se vê | Causa | Correção | Dificuldade |
|---|---|---|---|
| Mar/lago pintado como terra (papel no oceano) | Mar fechado sem semente | **Adicionar semente** na coordenada | Trivial |
| Cunha/mancha azul dentro de continente | Semente vazou por gap fino, ou semente em terra | **Mover/remover** a semente culpada, ou **subir `CLOSE`** | Fácil–média |
| País/ilha some (virou mar) | Semente em cima dele, ou gap grande | **Mover a semente**; se gap, subir `CLOSE` | Média |
| Costa serrilhada/"comida" | Parede fina diagonal | Subir `CLOSE` | Fácil |
| Gap grande e real na fonte | Furo de verdade no `world-map.md` | "Ponte" no raster ou emendar o `d` do path | Mais trabalhosa |

**A grande maioria é semente (adicionar/mover) — barato e sem risco.**

---

## Gotchas confirmados (não reintroduzir)

- **Semente tem que cair em ÁGUA ABERTA.** Semente em terra inunda o interior do país
  como "mar" e ele some. (Ex.: `(3235,520)` rotulada "Canal da Mancha" estava sobre a
  Inglaterra e afundava a Grã-Bretanha.) Semente também não pode cair em terra que
  toca a borda da imagem → afunda o continente. Validar a vizinhança de cada semente.
- **Em escala, esse é o bug dominante.** Vários países (províncias do Canadá, países
  que compartilham fronteira sem loop próprio) são redes de borda ABERTAS, então uma
  semente em terra não afoga só um país — o flood atravessa as junções e **afoga
  continentes inteiros** (foi o caso de África/Ásia/Canadá; `CLOSE=3/4` NÃO resolvia).
  Sempre **plotar cada semente sobre o render só-de-contornos** e conferir que cai na
  água ANTES de rodar. Verificação barata que evita horas de caça a "gap".
- **Mar Vermelho é um canal fino e traiçoeiro** de seedar: `(3990,1130)` cai na Arábia,
  `(3800,1300)` cai no Sudão. Achar o canal por varredura de frestas (flood ~13k px, bem
  menor que os ~60k dos países vizinhos). Semente boa: `(3945,1150)`.
- **PNG de inspeção precisa de fill EVEN-ODD.** Os mares são *buracos* (holes) no
  polígono de terra; um rasterizador que pinta cada subpath como sólido tapa os buracos
  e mostra mar como bege (falso positivo). O SVG do app usa fill-rule correto; qualquer
  render de conferência tem que fazer even-odd (ex.: acumular subpaths por XOR).
- **Mares fechados precisam de semente própria** quando o estreito está fechado no
  raster (ex.: Mediterrâneo além de Gibraltar fechado).
- **`Image.fromarray(...)` é somente-leitura** → `floodfill` vira no-op. Usar `.copy()`.

---

## Estado atual (resolvido)

A visão mundo está limpa: oceanos e mares fechados azuis, continentes bege, zero
vazamento. A `sea_seeds` do bloco `world` foi reescrita:

- **Mantidas** as 8 sementes de oceano aberto (Pacífico, N/S Atlântico, Índico, Ártico,
  Oceano Sul).
- **Removidas** as sementes de mar fechado que estavam EM TERRA e afogavam continentes
  (Hudson `(1650,560)` no centro do Canadá, Persian `(4180,900)` no Irã, Red `(3880,980)`
  na Síria, Baltic `(3560,470)` na Polônia, 2× Med na Argélia). Golfo Pérsico, Baía de
  Hudson e Grandes Lagos ficam azuis **de graça** (conectam ao oceano no raster).
- **Adicionadas** em água verificada: Mediterrâneo O `(3360,770)` / L `(3720,830)`,
  Mar Negro `(3800,700)`, Cáspio `(4110,720)`, Mar Vermelho `(3945,1150)`.

Detalhe cosmético em aberto: laguinhos internos minúsculos (Aral, Vitória) ficam bege.
Semeáveis se alguém apontar; irrelevante para a leitura do mapa.

---

## Loop de trabalho (apontar → corrigir)

1. Apontar os locais: **coordenada da grade vermelha** do PNG (ex.: "azul ~ (1500,300)")
   ou **nome** ("Cáspio cheio", "sumiu a Islândia"). Ambos são localizáveis.
2. Classifico pela tabela acima → ajusto `sea_seeds` (semente nova: **plotar sobre o
   render só-de-contornos e conferir que caiu na água** antes de rodar).
3. `python3 build-world.py world` (~14s) regenera `app/src/journeys/wo/map.js`.
4. Rasterizo o PNG com grade vermelha **direto do `map.js` com fill even-odd** (PIL: mar
   azul de fundo, terra bege por cima via XOR dos subpaths, contornos, grade a cada 500px)
   e mostro. NÃO usar `qlmanage` — ele faz thumbnail quadrado e distorce.
5. Repito até oceanos azuis e continentes sólidos, sem vazamento.

Reverter para a visão França a qualquer momento: `python3 build-world.py`
(sem argumento). Ao finalizar: `cd app && npm run build` + `npx oxlint src/journeys/wo`.
