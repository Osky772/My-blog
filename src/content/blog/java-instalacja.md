---
title: Instalacja Javy na macOS
description: Zainstalujemy Java Development Kit (JDK) na systemie macOS wykorzystując SDKMAN (The Software Development Kit Manager). Jak dla mnie, jest to najprostszy sposób
pubDate: 2021-09-06
---


Zainstalujemy Java Development Kit (JDK) na systemie macOS wykorzystując SDKMAN (The Software Development Kit Manager).
Jak dla mnie, jest to najprostszy sposób na instalację Javy, a właściwie JDK.

Co to jest JDK?
> W skład JDK wchodzi środowisko Java Runtime Environment (JRE), kompilator języka Java i interfejsy API. - [https://www.java.com/pl/download/help/develop.html](https://www.java.com/pl/download/help/develop.html)

## Instalacja JDK

1. Zainstaluj [https://sdkman.io/install](https://sdkman.io/install)
2. W terminalu wpisz `sdk list java`
3. Wybierz wersję JDK, którą chcesz zainstalować z kolumny `Identifier`
4. Zainstaluj JDK komendą `sdk install java `
5. Użyj zainstalowaną wersję JDK `sdk use java `
6. `java -version` - Java powinna być zainstalowa

## Zmiana wersji JDK

SDKMAN pozwala na bardzo łatwe przełączanie między różnymi wersjami Javy.
Aby przełączyć się na inną wersję Javy, wystarczy zainstalować sobie wybraną wersję przy użyciu komendy `sdk install java ` po czym wystarczy wpisać `sdk use java `.

### Źródła
- [https://sdkman.io](https://sdkman.io)
- [https://openjdk.java.net/](https://openjdk.java.net/)