---
title: Instalowanie zależności w projekcie poprzez npm install
description: NPM (*Node Package Manager*) to domyślny menedżer pakietów używany w środowisku uruchomieniowym Javascript w NodeJS. Dzięki NPM możemy instalować różne paczki/z
pubDate: 2021-07-30
tags: []
---


NPM (*Node Package Manager*) to domyślny menedżer pakietów używany w środowisku uruchomieniowym Javascript w NodeJS.
Dzięki NPM możemy instalować różne paczki/zależności do swojego projektu. 

## Domyślne zachowanie npm install
 
Instalacja paczki jest bardzo prosta, wystarczy uruchomić komendę `npm install [nazwa_paczki]` i zacznie się ona instalować w naszym projekcie.
Możemy tą komendę wywołać w wersji skróconej, tj. `npm i [nazwa_paczki]` i efekt jest taki sam. 
Od wersji NPM 5.0.0 komenda ta zapisze zależność do sekcji `dependencies` w pliku `package.json` oraz pobierze całą paczkę wraz z zależnościami pobieranej paczki do folderu `node_modules`.
Przed wersją NPM 5.0.0 trzeba było dodać dodatkową flagę `--save` ale teraz nie jest to konieczne. 

## Dodatkowe flagi 

Do komendy `npm install` możemy przekazać odpowiednie flagi, dzięki którym możemy kontrolować gdzie i jak zostanie zapisana zależność:

- `--save-prod` lub `-P`: Paczka zostanie zapisana do sekcji `dependencies` w pliku `package.json`. Jest to domyślne zachowanie, chyba że zostanie wywołana inna komenda, np. `-D` lub `-O`.

```shell
npm install --save-prod # === npm i -P
```

- `–-save-dev` lub `-D`: Paczka zostanie zapisana do sekcji `devDependencies`. 
*Development dependencies* to paczki wykorzystywane tylko podczas pracy nad aplikacją jak np. linter, test runner itp. 
Te zależności nie wpływają na wynik, czy wygląd aplikacji.

```shell
npm install --save-dev # === npm i -D
```

- `–-save-optional` lub `-O`: Paczka zostanie zapisana do sekcji `optionalDependencies`.
*Optional dependencies* to takie paczki, które zostaną wykorzystane dopiero wtedy, gdy konkretna funkcjonalność będzie użyta.
Paczka ta nie będzie wymagana, gdy dana funkcjonalność jej nie użyje.

```shell
npm install -save-optional # === npm i -O
```

- `–-no-save`: Paczka nie zostanie zapisana w pliku `package.json` ale nadal zostanie pobrana do folderu `node_modules`.

```shell
npm install --no-save
```

Gdy użyjemy którejkolwiek komendy, która zapisze paczkę do pliku `package.json` to mamy możliwość użycia dwóch dodatkowych flag:

- `–-save-exact` lub `-E`: Paczka zostanie zapisana z dokładnie określoną wersją zamiast z domyślnie używanym operatorem semver.

```shell
npm install --save-exact # lub npm i -E
```

- `--save-bundle` lub `-B`: Paczka zostanie zapisana do sekcji `bundledDependencies`.

```shell
npm install --save-bundle
```

### Źródła

- [https://www.geeksforgeeks.org/what-is-the-meaning-of-save-for-npm-install/](https://www.geeksforgeeks.org/what-is-the-meaning-of-save-for-npm-install/)
- [https://docs.npmjs.com/cli/v7/commands/npm-install](https://docs.npmjs.com/cli/v7/commands/npm-install)