---
title: Nadpisanie poprzedniego commita
description: Niejednokrotnie przydaje się nadpisanie poprzedniego commita. Poprzez nadpisanie mam na myśli na przykład zmianę commit message, edycję kodu lub dodanie jakichś
pubDate: 2021-10-04
---


Niejednokrotnie przydaje się nadpisanie poprzedniego commita.
Poprzez nadpisanie mam na myśli na przykład zmianę commit message, edycję kodu lub dodanie jakichś plików do poprzedniego commita.
Dzięki nadpisywaniu commitów zachowujemy czystą historię zmian w projekcie, unikając brzydkich commitów typu: "add forgotten file".

> Należy pamiętać, że nadpisanie commita naprawdę go nadpisuje i nie ma możlwości odzyskania jego stanu sprzed zmiany.
W skrócie, trzeba wiedzieć co się robi.

## git commit --amend

Komenda `git commit --amend` pozwala nam "wejść" w stan poprzedniego commita.
Po wywołaniu tej komendy, możemy zacommitować nowe pliki, które dodaliśmy do obszaru staged.
Przy okazji możemy zmienić też commit message.

Poniższy przykład ilustruje jak możemy nadpisać poprzedni commit:

```bash
git commit -m "create navigation"
git add navigation.css
git commit --amend
```

## git commit --amend --no-edit

Inną wariacją nadpisania commita jest dodanie flagi `--no-edit`, co oznacza po prostu - nie edytuj commit message.
Ta komenda jest najczęściej uzywana, gdy np. zapomnimy dodać jakieś pliki do poprzedniego commita, a powinny się w nim znaleźć.

## Work in progress a.k.a. WIP

Kolejnym przykładem użycia komendy `git commit --amend` będzie tzw. *work in progress* (skrót. WIP).
Kiedy przydaje się commit message "WIP"?
Zdarza się tak, że pracujemy nad jakimś ficzerem i musimy przerwać pracę.
Wychodząc w połowie roboty, nieraz ciężko sensowanie nazwać commita.
W takim przypadku można mu nadać nazwę "WIP".
Albo inny przykład: pracujemy z kolegą z zespołu i chcemy mu udostępnić aktualny stan naszych prac, aby wspólnie nad czymś popracować (przydatne w pracy zdalnej podczas *pair programming*).
Mając tzw. commita WIP, po dokończeniu pracy nad daną funkcjonalnością, możemy zrobić finalnego commita.
Wtedy użyjemy komendy `git commit --amend` i zmienimy nazwę commita z "WIP" na coś bardziej sensownego 😉.

## Nadpisanie commita w zdalnym repozytorium

Chcąc nadpisać commit w zdalnym repozytorium, musimy skorzystać z komendy `git push --force`.
Jednak trzeba być **bardzo ostrożnym**.
Jak nadpiszemy commit np. na Githubie, to nie będziemy mieli dostępu do stanu commita sprzed zmiany.
Jeżeli mamy podpięty CI, to uruchmi się nowy workflow dla tego commita.