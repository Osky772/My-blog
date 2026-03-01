---
title: 'Sublime Merge - łatwiejsza praca z Git'
slug: sublime-merge-latwiejsza-praca-z-git
description: 'W tym wpisie opowiem czym jest Git GUI, jakie zalety są korzystania z programu Sublime Merge i o funkcjonalnościach z których korzystam.'
date: 2020-10-08
lastUpdated: 2020-10-08
tags:
  - Git
  - Narzędzia
---


W tym wpisie opowiem:
- czym jest Git GUI,
- jakie zalety są korzystania z programu Sublime Merge,
- o funkcjonalnościach, z których korzystam w Sublime Merge.

Zaczynamy 👇

## Po co Git GUI? 🤔

Może zastanawiasz się co to jest Git GUI i jakie problemy rozwiązuje? 

Otóż Git GUI to graficzny interfejs do Git'a 🤷🏻‍♂️. Zamiast używać wiersza poleceń, możemy używać programu w trybie graficznym.

> Nie wiesz co to jest GUI?. [Link do Wikipedii](https://pl.wikipedia.org/wiki/Graficzny_interfejs_u%C5%BCytkownika)

Komendy Git'a nie są łatwe. Git oferuje bardzo dużo różnych komend w połączeniu z jeszcze różniejszymi dodatkowymi opcjami. Ilość funkcji, które daje nam do dyspozycji Git może przysporzyć zawrotu głowy. Na szczęście w codziennej pracy, zazwyczaj używa się tylko części tych komend (co nie oznacza, że nie trzeba się uczyć pozostałych) i nawet nie trzeba ich dokładnie pamiętać.

## Jakie są zalety używania Sublime Merge? 💡

Program graficzny do Git'a nie zastępuje całkowicie wiersza poleceń Git'a. Programy graficzne mają ułatwić i dodatkowo uprzyjemnić codzienną pracę. Wierz poleceń Git'a jest bardzo rozbudowany, z kolei programy graficzne celowo oferują raczej mniejszą funkcjonalność po to, aby móc skupić się na najbardziej przydatnych rzeczach.

Progam graficzny do Git'a, w tym przypadku Sublime Merge (**darmowy**), od razu daje szerokie spojrzenie na repozytorium. W tym programie na pierwszy rzut oka zobaczymy:
- lokalne i zdalne branche, wraz z ich graficznym przedstawieniem,
- tagi,
- stashes (czyli git stash list),
- wszystkie commity ułożone według chronologicznej listy,
- zmiany wprowadzone przez wybrany commit (usunięte i dodane linie, nazwy plików itp.),
- submudules (więcej info o submodułach tutaj).

W panelu po lewej widzimy branche, na środku commity a po prawej zmiany wprowadzone w wybranym commicie, wraz z nazwami plików - super przydatne 👍.

![Sublime Merge overview](/images/sublime-merge-latwiejsza-praca-z-git/sublime-merge-overview.png)

## Proste używanie komend ⚡️

Sublime Merge daje nam prosty i intuicyjny sposób na korzystanie z komend Git'a. Oferuje nam swój "wierz poleceń", który otworzymy za pomocą sekwencji klawiszy `CTRL + P` (`CMD + P`) Przykładowo, jeśli chcemy stworzyć nowy branch, to zamiast wpisywać `git checkout -b` wpisujemy sobie "Create branch" i program już podczas wpisywania daje nam podpowiedź, że prawdopodobnie chcemy utworzyć brancha i wybiera nam komendę, której szukamy.

![Sublime Merge branch hint](/images/sublime-merge-latwiejsza-praca-z-git/sublime-merge-branch-hint.png)

Podobnie to wygląda, jeśli chcemy wywołać jakakolwiek inną komendę - nie wpisujemy prawdziwej komendy, tylko funkcjonalność, z jakiej chcemy skorzystać. 

## Zaznaczanie linii kodu do następnego commita 

Jak dla mnie najlepszym ficzerem jest dodawanie linii do obszaru staged i tworzenie commitów. Jest to dziecinnie proste. Możemy zaznaczyć tylko te wybrane linie, które chcemy dodać za fazy staged (komenda `git add`) i potem stworzyć z nich commita.

![Sublime Merge commits](/images/sublime-merge-latwiejsza-praca-z-git/sublime-merge-commits.png)

Czemu jest to takie dobre? Dzięki temu możemy tworzyć czyste i sensowne commity, a to jest bardzo dobre, jeśli chcemy ułatwić prace sobie ale szczególnie kolegom z zespołu, którzy będą robić nam code review ❤️.

## Porównywanie zdjęć 📷

Kolejną zaletą jest możliwość podglądania zmian w zdjęciach. Przydaje się to, gdy mamy w projekcie testy E2E i robimy tzw. "snapshots testing" co jest popularne w Cypressie (więcej o E2E snapshot testing [tutaj](https://www.cypress.io/blog/2018/01/16/end-to-end-snapshot-testing/)). Działa to praktycznie tak samo jak porównywanie zdjęć w GitHub'ie (więcej [tutaj](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/rendering-and-diffing-images)).

## Więcej opcji na wybranym commicie

Sublime Merge daje sporo opcji, które możemy wywołać na podstawie wybranego commita z listy. Możemy stworzyć brancha z wybranego commita, edytować commit message, zrobić revert, rebase i inne. Wystarczy, że klikniemy prawym przyciskiem myszy na wybrany commit i zobaczymy możliwości:

![Sublime Merge commit details](/images/sublime-merge-latwiejsza-praca-z-git/sublime-merge-commit-details.png)

## Praca na branchach

Łatwo możemy przełączać się między brachami ale również je mergować lub tworzyć lokalne branche z zdalnych branchy (przy pracy na zdalnych branchach trzeba pamiętać o aktualizowaniu repozytorium za pomocą komendy `git pull`).

Klikając prawym przyciskiem myszy na wybranym branchu zobaczymy jakie opcje daje nam Sublime Merge:

![Sublime Merge branching](/images/sublime-merge-latwiejsza-praca-z-git/sublime-merge-branching.png)

## Podsumowanie 📝

Osobiście używam programu Sublime Merge i wierza poleceń Git'a równolegle. Wielu zaawansowanych rzeczy nie zrobimy w Sublime Merge, więc do bardziej złożonych lub wyszukanych funkcjonalności i tak musimy użyć wiersza poleceń Git'a. Mimo wszystko w większości przypadków w zupełności wystarcza mi to co oferuje Sublime Merge i dzięki temu mogę pracować wydajniej. Zachęcam Cię do spróbowania Sublime Merge lub innego Git GUI. Jeśli jeszcze tego nie próbowałeś to jest spora szansa, że ułatwisz sobie pracę z Gitem.

Znasz Sublime Merge lub korzystasz z innych programów? Daj znać w komentarzach 🙂
