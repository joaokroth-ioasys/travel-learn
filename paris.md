# Paris — Experiência imersiva (estado implementado)

> Este doc descreve o que **já foi construído** na página de Paris. Substitui o
> brainstorm original. A estratégia continua: fechar Paris como exemplo → depois
> extrair o padrão genérico e replicar nas outras cidades.

---

## Visão geral

Ao clicar em **Paris** (jornada 🇫🇷), o usuário entra numa **rota de 10 etapas**
percorrida como uma história — não uma lista. Cada etapa tem narrativa, foto,
frases úteis (FR + EN), um mini-quiz cultural e, em algumas, uma lição de francês.
O aprendizado de francês foi mantido.

Cidades **sem** o campo `places` (Strasbourg, alemãs) continuam no formato clássico
(galeria de fotos + lista de lições). Toda a camada imersiva é condicional a `places`.

---

## A rota (10 etapas, nesta ordem)

1. ✈️ **Aéroport Charles de Gaulle** — chegada · lição `paris-1`
2. 🎭 **Palais Garnier** — saudações/ingressos · lição `paris-2`
3. 🖼️ **Musée du Louvre** — quiz
4. ⛪ **Cathédrale Notre-Dame** — quiz
5. 🏘️ **Le Marais** — café · lição `paris-4`
6. 🌳 **Jardin du Luxembourg** — quiz
7. 🎨 **Basilique du Sacré-Cœur** — quiz
8. 🛍️ **Champs-Élysées** — quiz
9. 🏛️ **Arc de Triomphe** — quiz
10. 🗼 **Tour Eiffel** — finale · lição `paris-3`

Etapas 1, 2, 5 e 10 têm lição completa; as outras 6 têm só quiz.

---

## Funcionalidades implementadas

- **Linha do tempo** no topo: faixa horizontal de nós minimalistas (emoji em círculo)
  ligados por uma linha que se preenche conforme o progresso. Clicável.
- **Indicador de progresso**: "Stop X of 10" + barra animada + "N/10 explored".
- **Etapa atual** (card): número, nome, **narrativa** (história em 1ª/2ª pessoa),
  foto, frases, quiz e CTA da lição quando existe.
- **Navegação** ◀ Previous / Next stop ▶, além de clicar na timeline ou no mapa.
- **Animações leves**: card faz fade/slide-in a cada troca (remonta via `key`),
  nó concluído dá "pop", barra transiciona. Respeita `prefers-reduced-motion`.
- **Favoritos**: coração na foto de cada etapa; coraçãozinho aparece no nó da timeline.
- **Quizzes**: 1 pergunta cultural por etapa, com feedback certo/errado + explicação.
  Acertar marca a etapa como explorada e dá **+10 XP** (uma vez).
- **Feedback de conclusão**: nó fica com a cor de destaque; ao fechar as 10, banner
  "🎉 Paris complete!". (Obs.: o nó **mantém o emoji** após o quiz — não vira ✓.)
- **Mapa** (Leaflet + OpenStreetMap, sem chave): visão secundária "See it on the map",
  destaca a etapa atual e colore as já exploradas. Pins de emoji via `divIcon`.
- **Frases FR + EN**: francês em itálico à esquerda, significado em inglês à direita.
  Todas únicas dentro da cidade (sem repetição entre etapas).
- **Quote (descrição) FR↔EN**: a descrição fica em francês com botão
  "🇬🇧 Translate to English" / "🇫🇷 Voir en français" (campo `descriptionEn`).
- **Header (hero)** reduzido a 130px, em layout horizontal (emoji à esquerda,
  título + tagline empilhados à direita).
- **Foto da etapa** com 420px de altura, largura total do card.

---

## Modelo de dados (em `app/src/journeys/fr/content.js`)

A cidade de Paris ganhou `descriptionEn` e um array ordenado `places` (a rota).
A ordem do array **é** a ordem da rota. Shape de cada etapa:

```js
{
  id: 'tour-eiffel',
  name: 'Tour Eiffel',
  icon: '🗼',                         // emoji do nó da timeline / pin do mapa
  coords: [48.8584, 2.2945],          // [lat, lng] para o Leaflet
  wikiTitle: 'Eiffel Tower',          // fallback de imagem (lead image da Wikipedia)
  image: 'https://upload.wikimedia.org/.../MG-Paris-Champ_de_Mars.jpg', // URL fixa (opcional)
  narrative: 'As night falls you arrive at the Tour Eiffel...',
  phrases: [                          // { fr, en } — únicas na cidade
    { fr: 'On monte au sommet ?', en: 'Shall we go up to the top?' },
    // ...
  ],
  lessonId: 'paris-3',                // opcional — liga em LessonView
  quiz: {                             // mini-quiz cultural obrigatório
    question: 'The Eiffel Tower was built for the 1889…?',
    options: ["World's Fair", 'Olympics', 'Coronation'],
    correct: "World's Fair",
    explanation: 'Built for the 1889 Exposition Universelle...',
  },
}
```

### Imagens das etapas
Quando `image` (URL direta) está presente, ela é usada e a chamada à API da Wikipedia
é pulada (controle exato, sem drift). Sem `image`, resolve a lead image via `wikiTitle`.
URLs fixas atuais: CDG (trem RER B), Le Marais (Place des Vosges), Sacré-Cœur (fachada),
Arc de Triomphe (foto 2012), Tour Eiffel (vista do Champ de Mars).

### Lições novas adicionadas
Além de `paris-1`/`paris-2`, foram criadas `paris-3` (Tour Eiffel: nombres/billets) e
`paris-4` (café: commander, l'addition).

---

## Arquivos

| Arquivo | Papel |
|---------|-------|
| `app/src/journeys/fr/content.js` | dados de Paris: `descriptionEn`, `places[]` (10 etapas) |
| `app/src/RouteJourney.jsx` / `.css` | timeline + etapa atual + quiz + favoritos + nav + mapa |
| `app/src/CityMap.jsx` / `.css` | mapa Leaflet/OSM, pins emoji (`doneIds` colore explorados) |
| `app/src/WikiPhoto.jsx` | foto via `image` (URL direta) ou `wikiTitle` (API Wikipedia) |
| `app/src/colors.js` | helpers `darkenHex` / `hexToRgba` (compartilhados) |
| `app/src/CityPage.jsx` / `.css` | renderiza `<RouteJourney>` quando há `places`; toggle FR↔EN da descrição |
| `app/src/App.jsx` | estado `routeDone` (etapas) e `favorites`, persistidos por jornada |

**Dependência adicionada:** `leaflet`.

---

## Persistência (em `app/src/progress.js`, namespaced por jornada)

- `journey:fr:route` — array de ids de etapas exploradas (quiz resolvido)
- `journey:fr:favorites` — array de ids favoritados
- XP (+10 por etapa) entra no `journey:fr:xp` existente

Resetam ao trocar de idioma.

---

## Replicado para todas as cidades francesas (junho/2026)

A camada imersiva agora cobre **as 10 cidades da jornada FR**, não só Paris.
Cada cidade ganhou `descriptionEn` + um `places[]` ordenado (rota):

| Cidade | Etapas | Lições mapeadas |
|--------|--------|-----------------|
| Paris | 10 | paris-1..4 |
| Strasbourg, Nice, Marseille, Toulouse, Bordeaux, Nantes, Bruxelles | 5 cada | as 2 lições da cidade |
| Lyon, Lille | 6 cada | as 2 lições da cidade |

Total: **57 etapas**. As 2 lições existentes de cada cidade viram 2 etapas
(`lessonId`); o resto são paradas turísticas só com quiz cultural. Ids de etapa
são prefixados por cidade (`str-`, `lyon-`, `mrs-`, `tls-`, `bdx-`, `nte-`,
`lil-`, `bru-`) porque `routeDone` é um único Set por jornada — ids precisam ser
globais. Frases `{fr,en}` são únicas dentro de cada cidade.

**Imagens:** modo automático via `wikiTitle` (lead image da Wikipedia). Onde o
automático retornava lixo/nada, usei `image` fixo verificado: Cours Saleya,
Vieux Nice, Colline du Château (Nice), Marché de Noailles/Canebière, Le Panier
(Marseille), Rue Sainte-Catherine (Bordeaux), Machines de l'île (Nantes),
Grand-Place (Lille).

**Correção de código (1 linha):** `RouteJourney.jsx` — `doneCount` passou a contar
só as etapas da cidade atual (`places.filter(p => routeDone.has(p.id)).length`),
senão o progresso/barra/banner somariam etapas de todas as cidades.

## O que NÃO foi feito (próximos passos)

- Generalizar `places[]`/quiz para a jornada alemã (de).
- Lista dedicada de favoritos (hoje só o coração por etapa).
- Som / confete na conclusão.
- Textos (narrativa/quiz) estão em inglês p/ casar com a UI; a `description` segue
  em francês com toggle. Traduzir para PT se desejado.
- Ícones SVG realmente minimalistas (hoje usa emoji nos nós).
