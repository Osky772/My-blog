---
title: 'Poznaj Chrome DevTools'
slug: poznaj-chrome-devtools
description: 'Cześć! W tym wpisie chcę Ci pokazać narzędzia deweloperskie Chrome Devtools 🛠. Przedstawię najważniejsze cechy tych narzędzi i opiszę wybrane, najczęściej używ'
date: 2020-07-30
lastUpdated: 2020-07-30
tags:
  - Narzędzia
---


Cześć! W tym wpisie chcę Ci pokazać narzędzia deweloperskie Chrome Devtools 🛠. Przedstawię najważniejsze cechy tych narzędzi i opiszę wybrane, najczęściej używane funkcjonalności, które są niezbędne do budowania stron i aplikacji internetowych. Zaczynajmy 💪💪

## Po co DevToolsy?

Jak sama nazwa wskazuje, Chrome DevTools to narzędzia deweloperskie. DevToolsy wspomagają tworzenie stron internetowych, pozwalają edytować kod z natychmiastowym efektem - bez konieczności odświeżania strony, pozwalają debugować skrypty i ułatwiają tworzenie stron na urządzenia mobilne. DevToolsy otworzysz za pomocą skrótu `F12`.

Najważniejsze i najczęściej używane panele to **Elements, Console i Network**. 

## Panel Elements

W tym panelu możesz podglądać elementy na stronie. Wystarczy, że klikniesz prawym przyciskiem myszy na wybranym elemencie i z listy wybierzesz "Zbadaj" (ang. "Inspect"). Jeżeli wejdziesz na stronę główną Wikipedii i "zbadasz" logo widoczne w lewym górnym rogu, to w swoich DevToolsach powinieneś zobaczyć coś podobnego:

![Panel Elements w Chrome DevTools](/images/poznaj-chrome-devtools/devtools-panel-elements.jpg)

A więc w panelu Elements (u mnie DevToolsy są ułożone pionowo, możesz u siebie zmienić układ klikając ikonkę z trzema kropkami, w prawym górnym rogu) widać podświetlony element i w tym przypadku jest to znacznik `<a>`, który ma atrybuty takie jak `title`, `class` i `href` (atrybut `href` to link i tutaj przekierowuje on do strony głównej). 

W tym miejscu możemy robić z elementami dosłownie wszystko, możemy dodawać i usuwać atrybuty, zmieniać stan elementu (`hover`, `focus`), dodawać i zmieniać style, skopiować lub usunąć cały element. Jak dwukrotnie klikniesz na dany element to możesz w nim modyfikować atrybuty oraz tekst między znacznikami. 

Ćwiczenie: wybierz link z bocznego menu, zmień mu atrybut `href`, aby wskazywał na wyszukiwarkę Google (`href="https://google.com"`) oraz zmień tekst z "Strona główna" na "Wejdź na google". Kliknij w link i zobacz, jak odpali się google.com.

Ponadto, klikając ikonkę urządzeń mobilnych, w lewym górnym rogu, masz możliwość obejrzenia symulacji strony na urządzeniach mobilnych, lub dla dowolnego rozmiaru ekranu.

## Panel Console

Panel Console to przeze mnie najcześciej używany obszar DevToolsów. Konsola ma dwa główne cele - podglądanie logów i uruchamianie JS'a. Podglądanie logów to wstawanie wyrażenia `console.log` (lub innej metody na obiekcie `console`, np. `console.table`) w twoim pliku Javascriptowym. Metoda wstawiania logów pozwala na śledzenie wartości zmiennych w kodzie, lub pomaga sprawdzać kolejność odpalanych funkcji. Uruchamianie JS'a oznacza wpisywanie dowolnego kodu JS w konsoli. 

Otwierając konsolę możesz pisać dowolne wyrażenia matematyczne, takie jak:

```js
2+(4/3+(5*5+(17/3-(8*2))))
```

jest to poprawny kod JS.

Możliwe jest modyfikowanie strony za pomocą konsoli, ponieważ posiada ona pełny dostęp do obiektu [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) strony. Dzięki tej właściwości, możesz w bardzo łatwy i szybki sposób edytować stronę internetową. Wejdź na stronę główną Wikipedii, otwórz konsolę i wklej poniższe wyrażenie:

```js
document.querySelector('strong').textContent = "Witaj na moim blogu"
```

Teraz, w tytule strony, powinieneś zobaczyć napis "Witaj na moim blogu". 

Podczas uruchamiania JS'a w konsoli, nie musisz wchodzić w interakcję ze stroną internetową na której jesteś. Tak jak pokazałem wcześniej, w konsoli możesz pisać dowolny kod JS, który nie modyfikuje strony. Dzięki temu, możesz sobie przećwiczyć, jak działa nowa metoda w JS, którą właśnie poznałeś, np. [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). Wystarczy, że odpalisz konsolę i już możesz kodować.

## Panel Network

W panelu Network możesz sprawdzać, czy zasoby są pobierane lub przesyłane, oraz sprawdzać właściwości pojedynczego zasobu, takie jak: nagłówki HTTP, zawartość, rozmiar itd.

Przykładowo, wejdź na Wikipedię i otwórz panel Network (jak wejdziesz w ten panel to przeładuj stronę). Zobaczysz dość długą listę elementów:

![Panel Network w Chrome DevTools](/images/poznaj-chrome-devtools/devtools-panel-network.jpg)

1. Tutaj możesz symulować prędkość internetu, czyli możesz go zwolnić, aby sprawdzić jak strona będzie się ładowała z ograniczonym dostępem do internetu lub na smartfonach,
2. Filtruj po zasobach, czyli będzie wyświetlać pliki JS, CSS, itd.,
3. Zobaczysz w wybranym przedziale czasu, jakie zasoby ładowały się,
4. Kolejno: nazwa zasobu, status odpowiedzi z serwera, typ zasobu, inicjator (co spowodowało przesyłanie zasobu, miejsce w kodzie), czas przesyłania i wodospad (czyli etapy ładowania zasobu).

Domyślnie na liście zasoby posortowane są chronologicznie. Najnowszy przesyłany zasób jest na samym dole, a na górze jest plik główny, czyli dokument HTML.

Będąc dalej na Wikipedii, w panelu Network wybierz, aby filtrował tylko zasoby XHR, a następnie kliknij w pasek wyszukiwania (z napisem "Przeszukaj Wikipedię)  na klawiaturze zacznij wpisywać litery. Zobaczysz jak na liście zaczną pojawiać się nowe zasoby:

![Nagłówki HTTP w DevTools](/images/poznaj-chrome-devtools/devtools-network-headers.jpg)

Jak klikniesz w wybrany zasób, to otworzy się okienko z szczegółami dot. nagłówków HTTP. Tutaj zobaczysz wszystkie nagłówki HTTP, m.in. status zapytania, nazwa metody, itp. W tabie **Preview** zobaczysz podgląd danych danego zasobu, może to być np. JSON lub HTML. W tabie **Response** zobaczysz jakie dane faktycznie są zwracane. Te zakładki są bardzo przydatne, bo pozwalają na sprawdzanie jakie zasoby są wysyłane do serwera i jakie są od niego zwracane. Możesz śledzić komunikację klient-serwer i w razie problemów, wiesz gdzie szukać problemu.

## Podsumowanie

Jak widzisz narzędzia Chrome DevTools to bardzo potężne narzędzie. W tym wpisie omówiłem tylko "najważniejsze" jego funkcje, ale jest dużo więcej. Myślę, że na początek przygody z programowaniem, jest to wystarczająca wiedza, która pozwoli Ci łatwiej pisać strony i aplikacje internetowe. Na temat samych DevToolsów można powiedzieć dużo więcej, dlatego, jeśli Cię to ciekawi, odsyłam do innych źródeł. Do zobaczenia w następnym wpisie 😄✋.

Źródła:
- [Film od HelloRoman o DevTools](https://www.youtube.com/watch?v=fbzbs3hQvFE)
- [Film od samych twórców DevTools](https://www.youtube.com/watch?v=VYyQv0CSZOE)
