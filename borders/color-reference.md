# Journey Map — Color Reference (general)

Country-agnostic palette. "Main country" = the country the journey is in
(Germany in the first map). "Neighbors" = every other country; they all share
one fill so the main country stands out. Swap nothing per-country — only the
geometry changes, the colors stay fixed.

| #  | Layer                              | Fill                                          | Stroke  | Width         |
|----|------------------------------------|-----------------------------------------------|---------|---------------|
| —  | Card background (CSS .map-container)| `#f5f0e8` + radial gradients `#ede4d0`,`#e0d5be` | —       | —             |
| 1  | SVG background rect (the "paper")  | `#ddd8c8`                                      | —       | —             |
| 2  | Seas                               | `#a8cfe0`                                      | `#5e98b8` | 0.8         |
| 3  | Land islands (over sea)            | `#ddd8c8` (= bg, so they read as land)         | none    | —             |
| 4  | Neighbor name labels               | `#8a7a60` @ opacity 0.6, italic                | —       | —             |
| 5  | Neighbor borders (outer paths)     | —                                             | `#a09070` | 1.2         |
| 6  | Neighbor country fill              | `#ddd8c8` (= bg — neighbors recede)            | none    | —             |
| 7  | **Main country fill**              | `#e8dcc8` (warmer/lighter — main stands out)   | none    | —             |
| 8  | Internal borders (states/regions)  | —                                             | `#a09070` | 1.2         |
| 9  | Lakes                              | `#a8cfe0`                                      | `#5e98b8` | 0.8         |
| 10 | **Main country national outline**  | —                                             | `#8a7a60` | 1.5 (thicker than internal) |
| 11 | Journey path (dashed, links cities)| —                                             | `#8a7a60` | 1.5, dash 6 4 |
| 12 | City markers                       | per-city `accentColor` dot, `#fff` ring        | `#fff`  | 2             |
| —  | Bottom progress bar (HTML)         | gradient `#e9c46a` → `#f4a261`                  | —       | —             |

## Palette tokens

| Token             | Value     | Used by                                   |
|-------------------|-----------|-------------------------------------------|
| `paper`           | `#ddd8c8` | bg rect, land islands, neighbor fill      |
| `main-fill`       | `#e8dcc8` | main country body (the only highlighted land) |
| `sea-fill`        | `#a8cfe0` | seas, lakes                               |
| `sea-stroke`      | `#5e98b8` | sea/lake outline                          |
| `border-soft`     | `#a09070` | neighbor borders + internal region borders|
| `border-main`     | `#8a7a60` | main country outline, journey path, labels|
| `marker-ring`     | `#fff`    | city marker ring                          |
| `progress`        | `#e9c46a`→`#f4a261` | bottom progress bar gradient    |

## Rules that generalize across countries

- **Main vs others:** only the main country gets `main-fill` (`#e8dcc8`).
  All neighbors share `paper` (`#ddd8c8`) so they visually recede — equal
  among themselves, dimmer than the main country.
- **Border hierarchy:** main outline `border-main` `#8a7a60` @ 1.5 is the
  darkest + thickest. Neighbor and internal-region borders share the softer
  `border-soft` `#a09070` @ 1.2.
- **Water is constant:** seas and lakes use the same `sea-fill`/`sea-stroke`
  regardless of country.
- **Only per-city color:** city marker dots use each city's own
  `accentColor`; everything else is country-independent.
