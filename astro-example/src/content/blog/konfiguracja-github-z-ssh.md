---
title: Łatwa i szybka konfiguracja z Github poprzez SSH
description: "W tym wpisie opiszę jak w łatwy sposób połączyć się z Github-em za pomocą SSH. Dzięki takiemu połączeniu możemy rozpocząć pracę ze zdalnym repozytorium, czyli z"
pubDate: 2021-07-28
tags: ["Git"]
---


W tym wpisie opiszę jak w łatwy sposób połączyć się z Github-em za pomocą SSH.
Dzięki takiemu połączeniu możemy rozpocząć pracę ze zdalnym repozytorium, czyli zrobić `git clone` poprzez SSH zamiast HTTPS i dalej pracować z repo nie podając loginu i hasła podczas każdego push-a.

## Warunki wstępne

- musisz mieć konto na 
 [Github](https://github.com)

## Po co SSH?

Próbując sklonować jakieś repozytorium z Github-a, np. [https://github.com/Osky772/www.oskarkowalow.pl](https://github.com/Osky772/www.oskarkowalow.pl) poprzez SSH dostaniemy podobny error:

```shell
git clone git@github.com:Osky772/www.oskarkowalow.pl.git
...
Initialized empty Git repository in `/Users/username/Documents/www.oskarkowalow.pl/.git/`
Permission denied (publickey).
fatal: The remote end hung up unexpectedly
```

To oznacza, że nie mamy wygenerowanego klucza SSH.

## Konfiguracja

1. W terminalu uruchom: `cd ~/.ssh && ssh-keygen`,
2. Dalej w terminalu uruchom: `ssh-add ~/.ssh/id_rsa`,
3. Teraz kopiujemy klucz do schowka. Komendy różnią się w zależności od systemu operacyjnego:
    - na OS X w terminalu uruchom: `cat id_rsa.pub | pbcopy`,
    - na Windows Powershell w terminalu uruchom: `Get-Content id_rsa.pub | Set-Clipboard`,
    - na Windows (via Cygwin/Git Bash) w terminalu uruchom: `cat id_rsa.pub | clip`,
    - na Linuxie w terminalu uruchom: `cat id_rsa.pub | xclip`,
4. Wejdź na Github-a i dalej w ustawienia swojego konta:
    1. Kliknij ikonkę swojego konta w prawym górnym rogu,
    2. Kliknij **Settings**,
    3. Kliknij **SSH and GPG keys**,
    4. Kliknij **New SSH key**,
    5. W tytule wpisz np. "mój prywatny komputer Dell" lub cokolwiek innego,
    6. W sekcji **Key** wklej skopiowany wcześniej klucz SSH,
    7. Kliknij **Add SSH key**,
5. W końcu możemy skonfigurować plik `.gitconfig`:
    - W terminalu uruchom `git config --global user.name "oskar"`,
    - Oraz `git config --global user.email oskar@...`,
6. Zrestartuj terminal, aby mieć pewność, że config się przeładował.

## Koniec

Brawo 👏, teraz wszystko powinno działać! Możemy klonować i commitować do zdalnego repo.

#### Źródła:
- [https://stackoverflow.com/questions/2643502/how-to-solve-permission-denied-publickey-error-when-using-git](https://stackoverflow.com/questions/2643502/how-to-solve-permission-denied-publickey-error-when-using-git) 
- [https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)