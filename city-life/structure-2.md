# City Life — Estrutura v2 (mapa + jornadas)

Evolução da [structure-1](./structure-1.md). Hoje a City Life é uma grade plana:
8 locais, cada um com 5 palavras. A v2 vira **experiência de cidade**: um mapa
com os locais como pontos, e cada local vira uma **jornada em etapas** (o que
você realmente faz ali), com frases e exemplos de uso.

## Conceito v2

- **Mapa da cidade** (SVG ilustrado genérico: ruas, quarteirões, um rio, praça
  central) com **8 pins** = os 8 locais. Tocar num pin abre a jornada daquele local.
- Cada local deixa de ser "5 palavras" e vira uma **jornada em etapas** (formato
  `RouteJourney`): timeline no topo, cada etapa com narrativa curta + **frases
  para usar ali** (alemão / português) + **mini-quiz** + barra de progresso.
- Os 8 locais, cores e ícones atuais são mantidos.

## Design do mapa (SVG genérico)

- Cidade fictícia vista de cima: quarteirões, ruas, um rio cruzando, uma praça.
- 8 pins posicionados de forma coerente (aeroporto na borda, estação perto do
  centro, hospital num quarteirão, etc.).
- Pin visitado ganha anel/cor de destaque; pin selecionado destaca. Mesma lógica
  visual do `CityMap.jsx` / `MapScreen.jsx`, só que arte desenhada em vez de mapa real.
- Sem coordenadas reais — posições são `x/y` no viewBox do SVG.

## As 8 jornadas

> Frases em **alemão** (o pacote atual é alemão). Cada tópico em negrito = uma
> etapa ("stop") da jornada.

### 1. ✈️ Aeroporto — *Do check-in ao táxi*
- **Check-in:** "Ich möchte einchecken." · "Hier ist mein Reisepass." ·
  "Einen Fensterplatz / Gangplatz, bitte." (janela / corredor)
- **Segurança:** "Bitte legen Sie Ihre Tasche aufs Band." · "Haben Sie Flüssigkeiten dabei?"
- **Embarque (Gate):** "Wo ist das Gate?" · "Ihre Bordkarte, bitte." · "Boarding um 10 Uhr."
- **Bagagem:** "Wo ist die Gepäckausgabe?" · "Mein Koffer ist nicht angekommen." (mala perdida)
- **Dinheiro:** "Wo ist der Geldautomat?" · "Wo kann ich Geld wechseln/abheben?"
- **Táxi:** "Ich brauche ein Taxi." · "Zum Stadtzentrum, bitte." · "Was kostet die Fahrt?"

### 2. 🚉 Estação de trem — *Achar o caminho e embarcar*
- **Orientar-se:** "Entschuldigung, wie komme ich zu Gleis 7?" · "Wo ist der Fahrkartenautomat?"
- **Comprar tíquete:** "Eine Fahrkarte nach Berlin, bitte." · "Einfach oder hin und zurück?"
  (só ida / ida e volta)
- **Achar a plataforma:** "Von welchem Gleis fährt der Zug?" · "Der Zug fährt auf Gleis 3."
- **Aguardando embarque:** "Der Zug hat 10 Minuten Verspätung." · "Bitte einsteigen." · "Türen schließen."
- **Baldeação (extra):** "Muss ich umsteigen?" · "In Köln umsteigen."

### 3. ☕ Café — *Pedir e pagar*
- **Pedir o menu:** "Die Karte, bitte." · "Was können Sie empfehlen?"
- **Fazer o pedido:** "Ich hätte gern einen Cappuccino." · "Ein Stück Kuchen, bitte."
- **Exemplos de menu:** der Kaffee, der Cappuccino, der Tee, die heiße Schokolade,
  das Croissant, das Brötchen, der Kuchen, das Wasser, der Orangensaft
- **Pagar:** "Zahlen, bitte." · "Zusammen oder getrennt?" (junto / separado) ·
  "Karte oder bar?" · "Stimmt so." (pode ficar com o troco)

### 4. 🏋️ Academia — *Matrícula, treino e máquinas*
- **Inscrever-se:** "Ich möchte mich anmelden." · "Was kostet die Mitgliedschaft?" ·
  "Gibt es einen Probetag?" (dia de teste)
- **Vestiário / locker:** "Wo ist die Umkleide?" · "Wo sind die Schließfächer?" ·
  "Haben Sie ein Schloss?"
- **Pedir um treino:** "Können Sie mir einen Trainingsplan erstellen?" · "Ich bin Anfänger." ·
  "Ich möchte Muskeln aufbauen / abnehmen." (ganhar músculo / emagrecer)
- **Revezar máquina:** "Ist das Gerät frei?" · "Darf ich mich dazwischen einschieben?" ·
  "Wie viele Sätze noch?"
- **Grupos musculares:** Rücken (costas), Brust (peito), Beine (pernas), Schultern (ombros)
- **Exercícios:** Rudern (remada), Latzug (puxada), Bankdrücken (supino),
  Butterfly (crucifixo), Kniebeuge (agachamento), Kreuzheben (levantamento terra),
  Schulterdrücken (desenvolvimento) · "drei Sätze mit zwölf Wiederholungen" (3×12)

### 5. 🍽️ Restaurante — *Pegada do café, mais completa*
- **Reserva / chegar:** "Ich habe einen Tisch reserviert." · "Ein Tisch für zwei, bitte."
- **Menu:** "Die Speisekarte, bitte." · "Die Getränkekarte, bitte." (carta de bebidas)
- **Pedido por prato:** Vorspeise (Suppe, Salat) · Hauptgericht (Schnitzel, Bratwurst, Pasta) ·
  Nachtisch (Eis, Apfelstrudel) · Getränke (Bier, Wein, Wasser, Apfelschorle)
- **Pedidos especiais:** "Ich bin Vegetarier." · "Ich habe eine Allergie." · "Ohne Zwiebeln, bitte."
- **Pagar:** "Die Rechnung, bitte." · "Getrennt, bitte." · "Das Essen war köstlich." (estava delicioso)

### 6. 🏛️ Serviços públicos — *Burocracia de quem chega/mora*
- **Marcar Termin:** "Ich möchte einen Termin vereinbaren." · "Haben Sie einen Termin frei?"
- **Registro na cidade (Anmeldung):** "Ich möchte mich anmelden." · "Hier ist mein Mietvertrag."
  (contrato de aluguel) · "Ich brauche eine Meldebescheinigung." (comprovante de registro)
- **Visto / residência:** "Ich brauche ein Visum / eine Aufenthaltserlaubnis." ·
  "Wo ist die Ausländerbehörde?" (órgão de estrangeiros)
- **Resolver problemas:** "Welche Unterlagen brauche ich?" (documentos) ·
  "Ich habe das falsche Formular." · "Können Sie das erklären? Ich verstehe das nicht."

### 7. 🏥 Hospital — *Fiquei doente*
- **Recepção / check-in:** "Ich habe einen Termin." · "Hier ist meine Versichertenkarte."
  (cartão do plano de saúde)
- **Triagem / sintomas:** "Ich fühle mich nicht gut." · "Ich habe Fieber." (febre) ·
  "Ich habe Kopfschmerzen." (dor de cabeça) · "Ich habe Bauchschmerzen." (dor de barriga) ·
  "Ich habe mir das Bein verletzt." (machuquei a perna) · "Ich hatte einen Unfall." (acidente) ·
  "Mir ist übel." (enjoo)
- **Exame:** "Wo tut es weh?" (onde dói) · "Seit wann haben Sie das?" · "Atmen Sie tief ein."
- **Remédio / receita:** "Ich brauche ein Rezept." · "Nehmen Sie die Tablette dreimal am Tag." ·
  "Wo ist die Apotheke?"
- **Atestado:** "Ich brauche eine Krankschreibung / ein Attest." (atestado médico)

### 8. 🗺️ Guia turístico — *O passeio*
- **Info do passeio:** "Wann beginnt die Führung?" (que horas começa) · "Wohin gehen wir?" (pra onde) ·
  "Wie lange dauert die Tour?"
- **Como chegar:** "Wie komme ich zum Museum?" · "Ist es zu Fuß erreichbar?" (a pé) ·
  "Nehmen Sie die U-Bahn." (metrô)
- **Pontos turísticos (Alemanha):** das Brandenburger Tor, der Kölner Dom,
  Schloss Neuschwanstein, die Berliner Mauer, der Reichstag, das Oktoberfest
- **Ingresso:** "Zwei Tickets für die Führung, bitte." · "Gibt es eine Ermäßigung?" (desconto) ·
  "Der Eintritt ist frei." (entrada grátis)

## Como implementar (guia para o passo de código)

1. **Mover conteúdo inline → pacote de dados.** Tirar `LOCATIONS` de `CityLife.jsx`
   e criar `app/src/journeys/de/citylife.js` (como sugere o comentário em `CityLife.jsx:4-5`,
   seguindo o padrão de `journeys/de/content.js`). Cada local ganha um array `stages`.
2. **Shape de dados por local:**
   ```js
   {
     id, name, icon, accent, tagline,
     stages: [
       { id, name, icon, narrative,
         phrases: [{ de: '…', en: '…' }],
         quiz: { question, options, correct, explanation } }
     ]
   }
   ```
   É o mesmo `places[]` que o `RouteJourney` já consome (ver `RouteJourney.jsx:13-24`).
3. **Tela City Life = mapa SVG.** Trocar a grade (`CityLife.jsx:148-161`) por um
   componente de mapa ilustrado novo (ex. `CityLifeMap.jsx`) com 8 pins. Reusar a
   estética de pin de `CityMap.jsx` / `MapScreen.jsx`.
4. **Abrir local = RouteJourney.** Ao tocar num pin, renderizar `RouteJourney`
   passando os `stages` do local. Ajuste mínimo: o `RouteJourney` hoje sempre
   desenha o `CityMap` (Leaflet) no rodapé (`RouteJourney.jsx:201-209`) — as etapas
   de City Life não têm coordenadas reais, então adicionar uma prop `showMap`
   (default `true`) e passar `showMap={false}` aqui. Menor diff possível; nada de fork.
5. Manter cores/ícones atuais dos locais.

## O que NÃO fazer agora (YAGNI)

- Não criar novo motor de jornada — o `RouteJourney` cobre.
- Não usar Leaflet/coordenadas reais no City Life.
- Não fazer multi-idioma ainda — estruturar o pacote `de/` de forma que dê pra
  duplicar para `fr/`, `cl/`, `jp/` depois.
- Sem áudio/TTS, sem SRS próprio do City Life — o Review tab já existe.
