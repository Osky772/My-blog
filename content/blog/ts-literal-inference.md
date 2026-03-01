---
title: 'Typescript - literal inference'
slug: ts-literal-inference
description: 'W Typescript możemy trafić na błąd typu "Argument of type X is not assignable to parameter of type Y". Co to oznacza i jak to naprawić?'
date: 2021-10-07
lastUpdated: 2021-10-07
tags:
  - TypeScript
---


W Typescript możemy trafić na błąd typu "Argument of type X is not assignable to parameter of type Y".
Co to oznacza i jak to naprawić?

## Typy ogólne i typy dosłowne

W Typescript mamy typy ogólne, takie jak `string`, `number`, `boolean` i typy dosłowne, np. `"Oskar"` lub `123`.
Naprawdę, zmienna może mieć taki dosłowny typ.

Deklarując zmienną i przypisując do niej wartość prymitywną, możemy użyć słowa kluczowego `let` lub `const`.
W zależności od tego jak zadeklarujemy zmienną, będzie miała ona inny typ.

```ts
let myName = "Oskar"; // zmienna ma typ "string"
const myRealName = "Oskar"; // zminna ma typ "Oskar"
```

Dzieje się tak dlatego, że deklarując zmienną słowem kluczowym `let`, możemy tą zmienną nadpisać i przypisać do niej inną wartość typu string.
W przypadku stałej `const`, nasza zmienna jest read-only i nie mamy możliwości jej nadpisania.
Stałą `const`, z przypisaną wartością prymitywną, Typescript oznaczy typem dosłownym.

## Obiekty jako const

Z obiektami jest trochę inaczej.
Tworząc obiekt i przypisując go do zmiennej, przypisujemy de facto referencję do tego obiektu, a nie dokładną jego zawartość.
Stąd nie ma znaczenia, czy obiekt zadeklarujemy jako `let` czy `const`, zawsze dostaniemy ogólny typ.

```ts
declare function possibleButtonProps (color: "white" | "black", size: "big" | "small"): void;

const buttonProps = {
    color: "white", // color jest typu string
    size: "big" // size jest typu string
};

// 💥 BOOM. Argument of type 'string' is not assignable to parameter of type '"white" | "black"'
possibleButtonProps(buttonProps.color, buttonProps.size);
```

Jak to naprawić?

Zakładając, że w przyszłości nie chcemy zmieniać tego obiektu, moim zdaniem, najlepszym sposobem na to będzie oznaczenie obiektu jako `as const`.

```ts
const buttonProps = {
    color: "white",
    size: "big"
} as const;

// ✅ OK
possibleButtonProps(buttonProps.color, buttonProps.size);
```

`as const` działa jak `const` ale dla typów.
Oznacza to, że właściwości tego obiektu, są oznaczone jako `readonly`.
Podczas próby nadpisania właściwości obiektu, Typescript wyrzuci nam błąd i nie pozwoli nadpisać tej właściwości.