# Requisitos — Seletor de Jornada (Alemão / Francês)

## Objetivo
Permitir trocar entre jornadas (países) pela bandeira no canto superior direito do mapa.
Nesta primeira fase, a jornada do Francês é só um placeholder (a palavra "Francês" no centro).

## Estado atual (referência)
- Bandeira no canto superior direito: `app/src/MapScreen.jsx:430-441` — hoje é a bandeira da Alemanha, **estática e não clicável**.
- País/tela controlados no nível do App: `app/src/App.jsx` (estados `tab`, `screen`).
- Toda a jornada atual (mapa, cidades, lições) = jornada "Alemanha".

## Comportamento desejado

### 1. Bandeira clicável + modal de seleção
- A bandeira no canto superior direito passa a ser **clicável**.
- Ao clicar, abre um **modal** mostrando duas bandeiras: **Alemanha** e **França**.
- A bandeira exibida no canto reflete a jornada ativa (Alemanha → bandeira alemã; França → bandeira francesa).
- Mesma posição/tamanho da bandeira em ambas as jornadas.

### 2. Escolha no modal
- Clicar na **bandeira da Alemanha** → jornada atual (mapa da Alemanha, cidades, lições — funcionamento de hoje, sem alteração).
- Clicar na **bandeira da França** → jornada do Francês (placeholder).
- Fechar o modal sem escolher → mantém a jornada ativa.

### 3. Jornada do Francês (fase 1 — placeholder)
- Em vez do mapa, exibir **apenas a palavra "Francês" centralizada** na tela.
- Manter a **bandeira no canto superior direito, mesma posição** (agora bandeira da França).
- Clicar nessa bandeira → reabre o **mesmo modal** (Alemanha / França).

### 4. Persistência
- Lembrar a jornada ativa entre sessões (localStorage, ex. chave `active-journey` = `de` | `fr`).
- Default na primeira vez: Alemanha (comportamento atual).

## Fora de escopo (fase 1)
- Conteúdo real do Francês (mapa, cidades, lições) — só "Francês" centralizado por enquanto.
- Bottom nav (Map/Daily/Passport/Review) na jornada do Francês: manter como está; não precisa funcionar no placeholder.

## Notas de implementação (lazy)
- Estado `journey` ('de' | 'fr') no `App.jsx`, persistido em localStorage; renderiza `MapScreen` (de) ou placeholder (fr).
- Modal: componente simples só com as duas bandeiras; reutilizar o SVG de bandeira já existente no `MapScreen`.
- Tornar a bandeira do canto um botão que abre o modal — vale para as duas jornadas.
