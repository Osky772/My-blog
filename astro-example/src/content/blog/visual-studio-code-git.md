---
title: Git w Visual Studio Code
description: W tym artykule pokażę, jak można ułatwić sobie codzienną pracę z Git'em nie wychodząc z Visual Studio Code.
pubDate: 2020-09-13
tags: ["Git"]
---
W tym artykule pokażę, jak można ułatwić sobie codzienną pracę z Git'em nie wychodząc z Visual Studio Code.

## Czemu Visual Studio Code? 🤔

Visual Studio Code to najpopularnijeszy edytor kodu na świecie. Ta teza pochodzi z ankiety przeprowadzonej na [Stack Overflow](https://insights.stackoverflow.com/survey/2018#technology-_-most-popular-development-environments). VS Code jest darmowy, skonfigurowany z Git'em, łatwo rozszerzalny o dodatkowe wtyczki, utrzymywany przez Microsoft i stale aktualizowany.

## Git wewnątrz VS Code? 🛠

VS Code jest skonfigurowany z Gitem i daje nam możliwości korzystania z Git'a nie opuszczając tego edytora. Jakie możliwości daje nam VS Code?
- stage'owanie wybranego tekstu w pliku lub stage'owanie całych plików,
- tworzenie commitów,
- tworzenie nowych branchy,
- przełączanie się pomiędzy branchami,
- porównywanie plików pomiędzy różnymi commitami,
- rozwiązywanie konfliktów podczas mergowania branchy,
- wiele innych...

## Czy używanie Git'a w edytorze kodu to oszustwo lub pójście na łatwiznę? 🚔

Można się spotkać z takim stwierdzeniem, że używanie zewnętrznych tooli do obsługi Git'a to pójście na łatwiznę, bo jedyne słuszne podejście to używanie terminala. Ja nie zgadzam się z tym stwierdzeniem. Na początku mojej pracy z Gitem korzystałem tylko z terminala, ale przez to moja wydajność była niższa niż teraz. 

VS Code przyspiesza codzinną pracę w Git'cie, ale nie zastąpi całkowicie terminala. Ten edytor kodu daje nam tylko najbardziej przydatne i najczęściej używane funkcjonalności, których możemy bardzo szybko użyć w razie potrzeby. 

To samo tyczy się graficznych programów do Git'a, tzw. Git GUI. O wybranym programie Git GUI napiszę w następnym wpisie.

## Zmiany w plikach 📈

W lewym panelu mamy zakładkę Source Control w której korzystamy z Git'a. Przykładowo, tak może wyglądać stan zmian naszych plików w repozytorium:

![VS Code Source Control](/images/visual-studio-code-git/vscode-soure-control.webp)

Widzimy, że plik `file1.md` jest zmodyfikowany i został dodany do obszaru *staged*, plik `index.js` został usunięty, a plik `main.js` jest nieśledzony (*untracked*). 

Po najechaniu kursorem na któryś z plików zobaczymy trzy ikonki. Od lewej: otwórz plik, usuń wprowadzone zmiany z pliku, dodaj zmiany do obszaru *stage*.

Po dodaniu plików do obszaru staged, możemy w polu z napisem "Message" podać tytuł commita, wcisnąć CTRL + ENTER (lub COMMAND + ENTER) i bang, commit zrobiony 💥! 

## Pomocne wskaźniki i dodawanie części tekstu do obszaru staged 🔆

W pliku możemy modyfikować linie tekstu, usuwać je lub dodawać nowe. VS Code daje nam informacje o wprowadzanych zmianach w pliku na bieżąco za pomocą kolorowych wskaźników:

![VS Code Git changes](/images/visual-studio-code-git/vscode-git-changes.webp)

Czerwony trójkąt wskazuje, gdzie została usunięta linia tekstu. Linia zielona wskazuje nowo dodane linie tekstu, a linia niebieska zmodyfikowane linie tekstu.

Klikając myszką w któryś z tych wskaźników, możemy dodać wybrane linie tekstu do obszaru staged (za pomocą plusika) lub usunąć nowo wprowadzine zmiany. Pozostałych dwóch opcji nie używam.

To jest naprawdę super ułatwienie 🔥 ! Nie musimy zawsze dodawać całego pliku do obszaru staged, jak np.: `git add index.js`. VS Code daje możliwość wybrania tekstu, który nas interesuje, i dodania go do obszaru *staged*.

## Praca z branchami za pomocą palety komend 🎨

Za pomocą palety komend (czyli *Command Palette*), możemy pracować z branchami, czyli tworzyć nowe branche (`git branch`), przałączać się między nimi (`git checkout`) lub je mergować (`git merge`).

> Aby otworzyć *Command Palette* użyj sekwencji klawiszy CTRL + SHIFT + P (Windows) lub COMMAND + SHIFT + P (Mac)

Po otwarciu okienka możemy zacząć wpisywać "git checkout" i już w trakcie pisania VS Code zacznie podpowiadać różne komendy Git'a:

![VS Code command hint](/images/visual-studio-code-git/vscode-cmd-hint.webp)

## VS Code jako domyślny systemowy edytor oraz Git diff tool 💻

Można ustawić VS Code jako domyślny systemowy edytor. Dzięki temu łatwiej jest np. pisać obszerne commity, zawierające tytuł i wiadomość. 

> Jak ustawić VS Code jako edytor oraz diff tool dowiesz się z [tego linku](https://blog.soltysiak.it/pl/2017/01/ustaw-visual-studio-code-jako-domyslny-edytor-oraz-diff-tool/).

### Tworzenie commitów 

Od teraz, gdy VS Code stał się domyślnym edytorem, podczas tworzenia nowego commita, po wpisaniu w terminalu `git commit` otworzy się VS Code. 

Zamiast domyślnego, nieczytelnego edytora:

![Terminal editor](/images/visual-studio-code-git/terminal-editor.webp)

... otworzy się nowa, piękna zakładka w VS Code:

![VS Code editor](/images/visual-studio-code-git/vscode-editor.webp)

Wystarczy dodać opis swojego commita, zachować plik, zamknąć tą zakładkę i voilà - commit stworzony 🎉.

### Szybszy sposób na tworzenie commitów ⚡️

Możemy otworzyć Command Palette i wpisać "git commit" lub po prostu "commit" a pojawi się małe okienko z możliwością wpisania tytułu commita. 

To jest naprawdę szybki sposób na tworzenie prostych commitów.

## Podsumowanie 📝

W tym wpisie pokazałem jak Visual Studio Code umożliwia przyspieszenie codziennej pracy z Git'em. Osobiście korzystam z wyżej wymienionych funkcjonalności na codzień i w moim przypadku fajnie się to sprawdza. 

Przestrzegam osóby początkujące, aby zbyt głęboko nie wchodziły w tajniki VS Code, skrótów klawiszowych i innych różnych fancy opcji. Najważniejsze są solidne podstawy, a takie rozwiązania mają zwyczajnie pomagać w codziennej pracy.

Co myślisz na ten temat 🙂? Korzystasz z VS Code lub innego edytoru kodu z wbudowanym Gitem, czy raczej unikasz takiego trybu pracy? Daj znać w sekcji komentarzy👇
