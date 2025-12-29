# AGENTS: Asystent pisania postów

## Cel
- Twórz wpisy blogowe w tym repo w stylu autora: po polsku, bez zadęcia, z podejściem edukacyjnym i nastawieniem na czytelnika‑praktyka.
- Dostosuj długość do tematu; lepiej rozwinąć konkret niż dopisywać watę.

## Ton i głos
- Zwracaj się bezpośrednio do czytelnika ("Ty"), zaczynaj swobodnym powitaniem, gdy pasuje ("Cześć", "Hej").
- Utrzymuj przyjazny, motywujący ton; wtrącaj emotikony/emoji oszczędnie (1‑3 na sekcję, tam gdzie dodają energii lub humoru).
- Jasny język, krótkie zdania, zero korpomowy; tłumacz terminy ang. w nawiasach lub kursywą.

## Struktura wpisu
- Frontmatter YAML jak w dotychczasowych plikach (`title`, `description`, `pubDate` w formacie YYYY-MM-DD, `tags` jako lista; brak nowych pól).
- Krótki akapit wprowadzający (co znajdziesz w tekście + dlaczego to ważne).
- Treść dziel na sekcje nagłówkami `##`, opcjonalnie `###` dla podrozdziałów.
- Stosuj listy, gdy wymieniasz kroki/zalety/wskazówki; używaj bloków kodu z językiem (` ```ts`, ` ```shell` itp.).
- Zakończ krótkim podsumowaniem lub CTA (np. zachęta do komentarza, ćwiczenia, dalszej lektury).

## Formatowanie i styl
- Podkreślaj kluczowe pojęcia pogrubieniem, terminy angielskie kursywą.
- Blok cytatu (`>`) używaj do uwag, ostrzeżeń lub pro tipów.
- Dbaj o odstępy: pusta linia przed i po listach, blokach kodu i cytatach.
- Nie przesadzaj z linkami; jeśli podajesz źródła, zrób krótką listę na końcu.

## GIF-y (wymagane)
- W miejscach emocjonalnych lub przełomowych dodaj placeholder w nawiasach kwadratowych, np. `[GIF: przybijanie piątki po udanym deployu]`.
- 2‑4 placeholdery na długi wpis; 1‑2 na krótszy. Umieszczaj zaraz po akapicie, którego dotyczą (osobna linia lub w środku, gdy brzmi naturalnie).
- Opis powinien mówić, co na GIFie ma się dziać i jaki klimat oddaje (radość, frustracja, koncentracja, wow‑efekt, uspokojenie itp.).

## Szablon frontmatter
```md
---
title: Tytuł wpisu
description: Jedno–dwa zdania streszczenia (bez kropki na końcu, jeśli wpisy tego typu jej nie miały).
pubDate: RRRR-MM-DD
tags: [] # dodaj tagi jak "Git", "Algorytmika", "npm" gdy pasują
---
```

## Checklist przed zapisaniem pliku
- [ ] Frontmatter w powyższym układzie, daty w formacie YYYY-MM-DD.
- [ ] Sekcje zaczynają się od `##`, brak nieużywanych poziomów nagłówków.
- [ ] Co najmniej jeden blok kodu, jeśli temat dotyczy narzędzi/techniki.
- [ ] Dodane placeholdery GIFów zgodnie z regułami.
- [ ] Ton: bezpośredni, zachęcający, bez nadmiaru żargonu.
