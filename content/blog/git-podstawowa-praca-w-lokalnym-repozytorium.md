---
title: 'Git - podstawowa praca w lokalnym repozytorium'
slug: git-podstawowa-praca-w-lokalnym-repozytorium
description: 'Cześć, witam Cię w kolejnym wpisie 🤚. W tym artykule przeprowadzę Cię przez początki pracy z Git''em.'
date: 2020-08-13
lastUpdated: 2020-08-13
tags:
  - Git
---


Cześć, witam Cię w kolejnym wpisie 🤚. W tym artykule przeprowadzę Cię przez początki pracy z Git'em.  

Na koniec tego artykułu:
- będziesz miał zainstalowany i skonfigurowany Git na swoim komputerze,
- założysz lokalne repozytorium, 
- poznasz podstawowy workflow, który będzie składał się z komend `git status`, `git log`, `git add` i `git commit`.

> **Uwaga dla doświadczonych użytkowników** 💡
>
>Jeśli używasz Git'a na codzień i wiesz o co chodzi z commitami, to prawdopodobnie ten wpis nie jest dla Ciebie, ale zapraszam Cię do przeczytania tego artykułu i podzielenia się swoimi przemyśleniami/uwagami w komentarzach. Twoja opinia jest dla mnie ważna. Podzielenie się swoimi uwagami może pozytywnie wpłynąć na kształt następnych artykułów 🤝

## Czemu Git?

Jak wspomniałem w moim poprzednim wpisie, Git to obowiązkowe narzędzie każdego programisty. Git pozwala na tworzenie historii twojego kodu, który masz w swoim wybranym folderze, z możliwością przywrócenia stanu twojego projektu z wybranego momentu w czasie. Zapisywanie stanu projektu, przeglądanie jego historii i przywracanie zmian odbywa się lokalnie, więc nie trzeba mieć dostępu do internetu. 

Myślę, że nie trudno jest wyobrazić sobie sytuację, gdy piszesz stronę internetową, masz już wszystko gotowe i wystarczy kliknąć "save", a tu nagle jakieś zrządzenie losu i przypadkiem usuwasz cały plik, lub chociaż większość kodu z pliku. Czasami nie ma możliwości powrotu do usuniętych treści. Albo masz gotową stronę i zaczynasz wprowadzać poprawki do kodu, ale niechcący psujesz masę rzeczy i już nie wiadomo, gdzie szukać źródła problemu.

Mając Gita i tworząc historię kodu, gdzie każdą zmianę commitujesz (od komendy git commit), nie będziesz miał takiego problemu, bo w każdym momencie możesz przywrócić ostatnią działającą wersję swojego kodu (lub innych plików). 

Załóżmy, że piszesz stronę internetową i postanowiłeś dodać menu na górze strony. Typowy workflow w Git'cie wygląda mniej więcej tak: piszesz kod (czyli dodajesz menu na stronie), następne wybierasz pliki lub konkretne linie kodu, które będą miały być zapisane (*staged area*), nadajesz opis tym zmianom i zapisujesz je (*commit*) w historii (czyli w naszej lokalnej bazie danych Gita). I ten proces powtarza się za każdym razem jak wprowadzisz kolejną zmianę w kodzie, lub w dowolnym pliku w całym repozytorium. W Git'cie zapisywana jest cała historia zmian w repozytorium i tym samym wszystkie pliki w takim stanie w jakim znajdowały się w danym momencie. Czyli Git nie tylko zapisuje historię zmian, z informacją, co się zmieniło i kto to zrobił, ale też zachowuje wszystkie pliki w takim stanie w jakim były podczas zapisywania zmian. Możesz więc wrócić do poprzedniego commita i odtworzyć zawartość plików w konkretnym momencie w czasie.

Ale zacznijmy od początku...

## Instalacja Git

Żeby zacząć używać Gita, musisz mieć go zainstalowanego na swoim komputerze. Aby upewnić się, czy Git jest dostępny na twoim komputerze, otwórz terminal i wpisz komendę:

```shell
git --version
```

Jeżeli nie zobaczysz konkretnej wersji programu to możesz przejść do instalacji Gita:
- instalacja na systemie Windows - 
- instalacja na Linuxie - 
- instalacja na macOS - 

Po zakończonej instalacji, aby upewnić się, że wszystko zakończyło się pomyślnie jeszcze raz sprawdź wersję gita, za pomocą komendy, która jest powyżej.

## Konfiguracja Git'a

Super, masz zainstalowanego Git'a! Teraz go skonfigurujesz i zaczniesz z niego korzystać.

Żeby móc używać Git'a, trzeba skonfigurować jego środowisko. Robi się to raz, dla każdego komputera. Git potrzebuje twojego maila i nazwy użytkownika. Git używa tych informacji dla każdego commita, którego stworzysz.

```shell
git config --global user.name "Jan Kowalski"
git config --global user.email jankowalski@przyklad.pl
```

To jest jedyna rzecz, którą trzeba zrobić, aby Git zaczął używać tych informacji dla dowolnego repozytorium, które stworzysz na swoim komputerze (dzięki fladze --global). Jeżeli we wszystkich repozytoriach nie chcesz używać tych samych danych, to możesz skonfigurować osobno każde repozytorium, używając powyższych komend bez flagi --global.

Możesz sprawdzić, czy Git dobrze zapisał twoje dane za pomocą komend:

```shell
git config user.name
git config user.email
```

## Zakładanie nowego repozytorium

Kilka razy wspomniałem słowo "repozytorium". Co to właściwie jest? Repozytorium to jest konkretny folder na twoim komputerze, którego Git jest świadom. To znaczy, że Git będzie śledził wszystkie zmiany w danym folderze, po to, aby umożliwić Ci ich zapisanie w swojej bazie danych. Każde repozytorium musi mieć swój osobny folder. 

> Będziemy korzystać z terminala do podstawowych operacji, takich jak: przemieszczanie się między folderami (`cd`), tworzenie folderów (`mkdir`), tworzenie plików (`touch`), dodawanie tekstu do plików (`echo`) i podglądanie zawartości pliku (`vim`). Operacje związane z tworzeniem pliku i modyfikowaniem go, możesz wykonać ręcznie za pomocą GUI, a nie za pomocą terminala. Inaczej mówiąc, możesz modyfikować pliki za pomocą edytora tekstowego, nie musisz korzystać z terminala.

Stwórz nowy folder, przejdź do niego i stwórz repozytorium:

```shell
mkdir nauka-gita
cd nauka-gita
git init
```

Ku twojej uciesze powinieneś zobaczyć podobny komunikat (oczywiście z inną ścieżką do twojego folderu):

```shell
Initialized empty Git repository in /Users/oskarkowalow/Projects/git-test/.git/
```

Brawo, stworzyłeś nowe repozytorium 🎉. Teraz jest ono puste, ale za chwilę zaczniemy dodawać do niego jakąś zawartość. 

## Rejestrowanie zmian w repozytorium

Właśnie przechodzimy do najciekawszej sekcji 🔥. 

Jak wspomniałem, aktualnie twoje repozytorium jest puste. Aby się o tym przekonać wpisz komendę `git status`:

```shell
git status

On branch master
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

To komenda pokazuje nam informacje o aktualnym stanie plików w naszym repozytorium. Jak widać mamy tu kilka informacji. Aktualnie jesteśmy na domyślnym branchu *master*, nie mamy żadnych commitów i nie mamy nic do zacommitowania. To prawda. Git nie śledzi żadnych plików, bo w tym folderze nie ma żadnych plików ani folderów. Git podpowiada nam co możemy teraz zrobić:

```shell
create/copy files and use "git add" to track
```

No dobrze, zatem stwórzmy sobie pusty plik README.txt:

```shell
touch README.txt
```

Ta komenda stworzyła pusty plik README.txt w aktualnym folderze. Sprawdźmy, czy teraz Git coś zauważy:

```shell
git status

On branch master
No commits yet
Untracked files:
    (use "git add <file>..." to include in what will be committed)
        README.txt
        
nothing added to commit but untracked files present (use "git add" to track)
```

Teraz Git mówi nam coś więcej. Widzimy, że nasz plik README.txt jest jako "Untracked file". W ostatniej linijce dostajemy informację, że nic nie zostało dodane do commita, ale Git widzi nieśledzone pliki i podpowiada, że może chcemy zacząć je śledzić. 

Tutaj dochodzimy do istotnej informacji. Każdy plik może być w jednym z dwóch stanów: **tracked** albo **untracked**. Pliki, które są śledzone (*tracked*) to pliki, które były w ostatnim commicie, czyli już zostały zapisane w historii. Natomiast pliki nieśledzone przez Git'a to wszystko pozostałe, czyli pliki, które ani nie były w poprzednim commitcie, ani nie są w obszarze *staged*, o czym za chwilę opowiem. Póki co widzimy, że nasz nowy plik jest jako *untracked*, więc jedynie co możemy z nim zrobić to dodać go do obszaru *staged*. Zobaczmy jak to wygląda.

### Śledzenie nowych plików

Git doradził nam, że możemy zacząć śledzić nasz nowy plik - zróbmy to.

```shell
git add README.txt
```

Ciekawe co powie nam Git, jak odpalimy komendę git status:

```shell
git status

On branch master
No commits yet

Changes to be commited:
    (use "git rm --cached <file>..." to unstage)
        new file:   README.txt
```

Teraz plik README.txt jest śledzony oraz jest fazie staged. Staged area oznacza, że plik może być zacommitowany, czyli zachowany w historii Git'a. Skąd wiemy, że plik jest oznaczony jako *staged*? Po tym, że widzimy komunikat "Changes to be commited".

A więc zapiszmy nasz nowy plik i zróbmy naszego pierwszego commita 🤩.

### Zatwierdzanie zmian

Mamy wybrany plik README.txt, który chcemy zapisać i znajduje się on w fazie *staged*. Każdy plik, który ma być zapisany musi się znaleźć w tym obszarze, bo inaczej Git go nie zapisze. Wpisujemy:

```shell
git commit
```

Teraz powinieneś zobaczyć w terminalu czarny ekran z kilkoma linijkami tekstu, który na pierwszy rzut oka wygląda dość strasznie. 

```shell
[tutaj jest nasz kursor]
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
#
# Initial commit
#
# Changes to be committed:
#       new file:   README.txt
#
~
~
~
```

To co się nam pokazało to edytor tekstu Vim. Na samej górze miga nasz kursor. Poniżej dowiemy się, że mamy podać opis commita dla naszych zmian. Dalej widzimy, że cały tekst, który jest poprzedzany znakiem `#` to komentarz, i nie znajdzie się on w historii naszych zmian. Dalej widzimy znajome Ci informacje o branchu master i o zmianach, które zostaną zatwierdzone, czyli plik README.txt. Jednak pomiędzy tymi linijkami pojawiła się informacja, której wcześniej nie było - "initial commit". To jest pierwszy commit w tym repozotorium. I ten pierwszy commit musi zawierać jakieś pliki, bo inaczej nie moglibyśmy go stworzyć. 

Teraz trzeba podać wiadomość do naszego commita. Wiadomość commita to musi być coś, co charakteryzuje aktualnie dodaną zmianę. Wiadomość ta składa się z tytułu i opisu, przy czym między tytułem a opisem musi być jedna pusta linia przerwy.

Czemu by nie nazwać tego commita "Initial commit", tak jak podpowiada nam Git? Podaj też opis commita. W tym przypadku nie jest on konieczny, bo wiadomo, że jest to pierwszy commit i niewiele w nim dodajemy, to jednak warto dodać dodatkowe parę zdań, które wyjaśni co i dlaczego dodaliśmy z naszych zmianach.

```shell
Initial commit

This is my first commit in this repo. I only added an empty README.txt file.
```

I teraz trzeba zapisać wiadomość tego commita i wyjść z edytoru Vim. Posłuży nam sekwencja klawiszy `ESC`, a następnie wpisanie `:wq` (te trzy znaki pojawią się na samym dole w otwartym edytorze) i kliknięcie `enter`.

Nie zawsze trzeba pisać opis do commita ale warto o tym pamiętać. Jeśli chcesz dodać tylko tytuł commita, bez opisu, możesz użyć innej komendy:

```shell
git commit -m "Initial commit"
[master (root-commit) 5c0c99d] Initial commit
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 README.txt
```

Stworzyłeś swojego pierwszego commita 🥳. 

Zobacz, że dostaliśmy kilka informacji o stworzonym commicie: nazwę brancha na którym jesteśmy (master), SHA-1 (czyli hash SHA-1, informacja, za pomocą której Git zapisuje commita w bazie danych), ile plików się zmieniło oraz ile linii dodaliśmy i ile usunęliśmy.

### Wyświetlanie historii commitów

Teraz mając już pierwszego commita za nami możemy wyświetlić historię commitów jakie znajdują się w repozytorium w którym przebywamy. Do tego użyjemy komendy git log, która otworzy nam poglądowe okienko w terminalu i informacją o ostatnich commitach. U mnie wygląda to następująco:

```shell
commit 5c0c99dca76dd91eb72af9cb3b2aa8920a203a7d (HEAD -> master)
Author: Oskar Kowalów <kowalow.oskar@gmail.com>
Date:   Sat Aug 8 13:14:49 2020 +0200

    Initial commit
    
    This is my first commit in this repo. I only added an empty README.txt file.
```

Mamy informację o SHA-1 commita, dane autora, datę oraz wiadomość commita. 

### Zapisywanie modyfikowanych plików

Dodajmy jakiś tekst do naszego nowo stworzonego pliku README.txt. Możesz wpisać poniższą komendę lub edytować plik swoim ulubionym edytorem tekstu:

```shell
echo 'To jest nowe README, czytaj uwaznie' >> README.txt
```

Teraz sprawdźmy co widzi Git:

```shell
git status
On branch master
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    
        modified:   README.txt
        
no changes added to commit (use "git add" and/or "git commit -a")
```

Widzimy, że plik README.txt jest oznaczony jako **modified**. Pliki już aktualnie śledzone przez Git'a, czyli takie, które już znalazły się w poprzednim commicie, mogą być w trzech stanach: *unmodified, modified* albo *staged*. Póki co spotkaliśmy *modified* oraz *staged*. *Modified* oznacza plik, który został zmienił się od czasu ostatniego commita. To by się zgadzało, bo wcześniej plik README.txt był pusty, a teraz zawiera nowy tekst. 

Stwórzmy sobie jeszcze jeden plik w naszym repozytorium:

```shell
touch CONTRIBUTING.txt
git status
On branch master
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    
        modified:   README.txt
        
Untracked files:
    (use "git add <file>..." to include in what will be committed)
    
        CONTRIBUTING.txt
        
no changes added to commit (use "git add" and/or "git commit -a")
```

Dodajmy te pliki i zacommitujmy je. Najbezpieczniej jest dodawać pliki do fazy *staged* wymieniając je po kolei, czyli:

```shell
git add README.txt CONTRIBUTING.txt
```

Chyba, że wiemy co robimy, to możemy użyć skrótu i dodać **wszystkie** pliki, które się zmieniły do fazy *staged*:

```shell
git add -A
```

Załóżmy, że zanim zrobimy commita, chcemy jeszcze dodać więcej tekstu do pliku README.txt. Zmodyfikujmy go sobie:

```shell
echo 'Dopisuje kolejna wazna informacje' >> README.txt
```

Co teraz widzi Git?

```shell
git status
On branch master
Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)
    
    new file:   CONTRIBUTING.txt
    modified:   README.txt
    
Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)
    
    modified:   README.txt
```

Hmm, mamy podwójnie zmodyfikowany plik README.txt? Coo 🤯? Musisz wiedzieć, że Git zapisał do fazy *staged* plik w takiej formie w jakiej był w momencie wywołania komendy `git add`. Jeżeli dodany plik zostanie zmodyfikowany, nowe zmiany nie są zapisane w fazie *staged* i nie wejdą one do następnego commita, jeśli ponownie ich nie dodamy.

Dodajmy zatem nowe zmiany, które pojawiły się w pliku README.txt:

```shell
git add README.txt
git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   CONTRIBUTING.txt
    modified:   README.txt
```

Teraz wszystko się zgadza. Robimy commita i nadamy mu tylko tytuł:

```shell
git commit -m "Add new file and modify README"
```

## Podsumowanie

Mam nadzieję, że w tym artykule przybliżyłem Ci obsługę Git'a. Jeśli jeszcze nie zacząłeś go używać to warto to robić dla każdego swojego projektu, po to, aby śledzić proces swojej nauki. Jeśli coś było dla Ciebie niejasne, lub po prostu chcesz się podzielić swoimi przemyśleniami to serdecznie zapraszam Cię do sekcji komentarzy. Widzimy się w następnych 🤚