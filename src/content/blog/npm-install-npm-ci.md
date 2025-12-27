---
title: Różnice pomiędzy npm install a npm ci
description: W poprzednim wpisie opisałem komendę `npm install`. Teraz opiszę co robi komenda `npm ci` oraz jakie są różnice między nimi.
pubDate: 2021-07-31
tags: []
---


W poprzednim wpisie opisałem komendę `npm install`.
Teraz opiszę co robi komenda `npm ci` oraz jakie są różnice między nimi.

Skrót CI oznacza *Continues Integration* i stąd `npm ci` służy do instalacji zależności w środowiskach testowych, continues integration i deploymentu lub w każdej sytuacji gdzie potrzebujemy czystej, nowej instalacji wszystkich paczek.

Komenda `npm ci` jest podobna do `npm install` bo ma za zadanie instalować wszystkie zależności w naszym projekcie.
Jednak zasadniczą różnicą `npm ci` jest to, że zainstaluje zależności z pliku `package-lock.json` a nie `package.json` tak jak robi to `npm install`.
Dzięki temu mamy pewność, że zainstalowane zależności na innych środowiskach będą miały dokładnie taką samą wersję.

Krótko mówiąc, różnice między `npm ci` a `npm install`:
- w projekcie **musi** istnieć plik `package-lock.json`,
- jeżeli zależności w pliku `package.json` różnią się od tych w `package-lock.json`, `npm ci` zakończy proces z błędem i nie zaktualizuje pliku `package-lock.json`,
- nie można instalować nowych zależności za pomocą `npm ci`,
- jeżeli folder `node_modules` istnieje, zostanie on **usunięty** przed rozpoczęciem instalacji zależności,
- plik `package-lock.json` lub `package.json` nigdy nie zostanie zaktualizowany,
- `npm ci` jest **szybszy** od `npm install` gdy istnieje w projekcie plik `package-lock.json` i brakuje folderu `node_modules`.

### Źródła
- [https://www.geeksforgeeks.org/difference-between-npm-i-and-npm-ci-in-node-js/?ref=rp](https://www.geeksforgeeks.org/difference-between-npm-i-and-npm-ci-in-node-js/?ref=rp)
- [https://docs.npmjs.com/cli/v7/commands/npm-ci](https://docs.npmjs.com/cli/v7/commands/npm-ci)