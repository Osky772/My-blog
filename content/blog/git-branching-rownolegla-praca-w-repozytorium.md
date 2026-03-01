---
title: 'Git branching - równoległa praca w repozytorium'
slug: git-branching-rownolegla-praca-w-repozytorium
description: 'Cześć, witaj w kolejnym artykule poświęconym podstawom Git''a 🤚😀. W tym odcinku przyjrzymy się tematowi branchów. Jeśli chcesz nauczyć się korzystać z narzędzi'
date: 2020-08-27
lastUpdated: 2020-08-27
tags:
  - Git
---


Cześć, witaj w kolejnym artykule poświęconym podstawom Git'a 🤚😀. W tym odcinku przyjrzymy się tematowi branchów. Jeśli chcesz nauczyć się korzystać z narzędzia, które pozwoli Ci na pracę grupową w projekcie, to trafiłeś w dobre miejsce 👏. W tym artykule chcę przedstawić Ci w prosty sposób ideę branchy i odczarować strach przed ich swobodnym wykorzystaniem 🧙‍♂️.

## Dla kogo ten wpis?

Ten wpis przeznaczony jest dla osób początkujących, którzy albo nie spotkali się z branchami w praktyce, albo nie dokońca wiedzą jak się z nimi obchodzić. W tym wpisie, przedstawię Ci w łatwy sposób koncepcję branchy w Git'cie, pokażę jakie problemy rozwiązują oraz przede wszystkim, jakie niosą korzyści. Ten wpis będzie w formie poradnika/tutoriala. Przeprowadzę Cię przez zachowanie branchy w praktyce oraz pokażę przydatne komendy, które są niezbędne do efektywnej pracy. Mimo tego, że w tym wpisie nie dotkniemy mergowania branchy to zrozumiesz jak pracować na osobnych branchach, dzięki czemu łączenie osobnych branchy będzie zrozumiałe.

## Słowem wstępu...

Branche są na początku trudnym orzechem do zgryzienia. Trzeba dobrze zrozumieć koncepcję branchy i ich działanie. Uważam, że jest wiele poradników na temat Git'a, które są bardzo dobre, ale jednocześnie potrafią być bardzo obszerne, przez co trudniej jest załapać sens i faktycznie zacząć korzystać z omawianego narzędzia. Mimo masy poradników na temat Git'a, chcę dołożyć swoją cegiełkę do tej konstrukcji i pomóc osobom początkującym rozpoczęcie efektywnej i pewnej pracy w Git'cie.

> 👉 Zachęcam zaawansowanych użytkowników do przeczytania tego artykułu i podzielenia się swoimi przemyśleniami oraz własnym doświadczeniem w sekcji komentarzy. Podzielenie się swoją wiedzą i przydanymi linkami może pomóc nie tylko mi, ale przede wszystkim osobom, które dopiero zaczynają swoją przygodę z programowaniem💡

## Trochę mojej historii...

Pamiętam, że nauka Git'a nie przychodziła mi łatwo. Wiedziałem po co jest Git i mniej więcej wiedziałem jak go obsługiwać, ale nie miałem pewności w tym co robię. Jedynie z łatwością przychodziło mi commitowanie mojej pracy w projektach, które sam robiłem (stronki internetowej, ćwiczenia z JS'a, aplikacje webowe). O takiej podstawowej pracy w repozytorium pisałem w poprzednim wpisie. Wpis ten miał pokazać podstawową pracę 
w projekcie przy użyciu Git'a i przełamać opory do jego używania. To co tam napisałem, to taki podstawowy workflow podczas samodzielnej pracy nad konkretnym zadaniem. I taki model pracy sprawdza się, ale problem pojawia się w pracy grupowej... a bez branchy nie ma pracy grupowej. 

Największym powodem mojej frustracji były branche w Git'cie. Kiedy byłem na kursie programowania, musieliśmy tworzyć projekty w grupach (strona internetowa, gra w JS'ie i apliakcja webowa). No i tu się zaczynał problem. Mając dosłownie drobne pojęcie o Git'cie, zaczęliśmy pracę w zdalnym repozytorium na Githubie i każdy miał robić swoje konkretne zadanie na osobnych branchach. To była rzeźnia, jedno wielkie spaghetti i całkowita niepewność 🤦‍♂️. Po prostu nie rozumiałem dobrze o co chodzi w branchach i jak to faktycznie powinno wyglądać. Pracowałem po omacku, a i tak kończyło się na tym, że ktoś całkowicie nadpisał pracę kolegi z zespołu, bo połączył osobne branche, usuwając przy okazji czyiś kod.

Także praca w Git'cie to nie jest prosta sprawa, tym bardziej jak pracuje się w grupie i dopiero zaczyna się swoją przygodę z tym narzędziem. Dlatego teraz piszę artykuły o Git'cie, bo chcę Ci tych frustracji oszczędzić. Wierzę, że wystarczy dobrze zrozumieć podstawy i można swobodnie zacząć korzystać z tego narzędzia. Git umożliwia pracę w grupie i generalnie jest prosty w codziennym użytkowaniu. To czym się podzielę w tym wpisie, to wiedza, której używam na codzień i osobiście rzadko robię coś ponad ten workflow.

## Po co te branche?

Branch (ang. *gałąź*) w Git'cie oznacza odgałęzienie od głównej linii developmentu i rozpoczęcie pracy nad częścią aplikacji w separacji. Tworząc repozytorium, do dyspozycji mamy domyślny branch o nazwie *master*. Z poprzedniego wpisu wiemy jak commitować swoją pracę na tym branchu (nieświadomie rozpoczeliśmy pracę z branchami 😄). Na domyślnym branchu *master* trzymamy **pewny, działający** kod. Pewny i działający kod to taki, co do którego mamy pewność, że w tym momencie w czasie, nasza strona lub aplikacja spełnia nasze oczekiwania co do funkcjonalności i niezawodności. Hmm... Z tą niezawodnością bywa różnie, ale o tym za chwilę 😅. 

Dodając nową funkcjonalność do naszej aplikacji, tworzymy osobną gałąź o nazwie, która w telegraficznym skrócie opisuje naszą intencję. Jeśli chcemy dodać footer na stronie, to przykładowa nazwa brancha może mieć nazwę *add-footer*. Z tego miejsca (na nowej gałęzi) rozpoczynamy swoją pracę nad dodaniem footera. Cały kod, który znajdował się na głównym branchu *master*, jest również dostępny na nowo stworzonym branchu. Po napisaniu nowej funkcjnolaności, czyli w naszym przypadku dodanie footera na stronie, mamy gotowy kod, który działa i z którego jestesmy zadowoleni. Ale nasz główny branch *master* nie zawiera footera. Footer znajduje się na osobnej gałęzi *add-footer*. Więc *master* przypomina pień drzewa (pewny, stabilny kod) a *add-footer* jest gałęzią (nowy kod). Takich gałęzi możemy mieć nieskończoną ilość, np. *add-header*, *file-list-on-sidebar* etc. Aby branch *master* zawierał nowy kod, który jest na inym branchu to musimy scalić oba te branche (tzw. merging). Po mergu, branch *master* zawiera kod, który miał poprzednio oraz nowo dodany kod, który znajduje się na branchu *add-footer*. Tym oto sposobem każdy z deweloperów może rozwijać nową część aplikacji na osobnej gałęzi nie wchodząć w konflikt z główną gałęzią. 

Ale po co osobne branche? Co by było, jeśli każdy z deweloperów tworzyłby nowy kod na tym samym i jednym branchu? Po chwili byłoby tak, że kolega z zespołu nadpisywałby równolegle kod, który ktoś dodał w międzyczasie (wystąpiłby tzw. konflikt). A praca na osobnej gałęzi nie spowoduje konfliktów, dopóki nie będziemy chcieli scalić obu branchy, które zawierają zmiany w tych samych plikach i w tych samych miejscach w kodzie (o konfliktach może napiszę w następnych wpisach, daj znać co myślisz w komentarzach 🙂).

Konkluzja jest taka, że branche pozwalają na równoległą pracę w projekcie przez deweloperów. Nawet dla jednego dewelopera dobrze jest tworzyć branche w projekcie, bo historia projektu jest bardziej przejrzysta. Zamiast wykonywać całą pracę na jednym branchu, łatwiej jest śledzić historię zmian w projekcie, bo zobaczymy, że część pracy została wykonana na branchu, który ma deskryptywną nazwę.

Ogólnie wiemy o co chodzi w branchach i po co się je używa. Przejdźmy zatem do praktyki 👨‍💻👩‍💻.

## Branche w pigułce

W moim poprzednim wpisie, wyjaśniłem jak stworzyć lokalne repozytorium i jak zapisywać pliki w historii swojego projektu. Tworząc lokalne repozytorium mamy do dyspozycji branch *master*. Można to sprawdzić komendą `git status`:

```shell
git status
On branch master
```

Pod komendą `git status` znajdziemy informacje na jakim branchu się znajdujemy. Jeżeli mamy już jakąś historię commitów w repozytorium, to dzięki komendzie git log, zobaczysz, że commity tworzone były na branchu *master*:

```shell
git log
commit d884b50b0c9f42677594cd6fb92475d31da78108 (HEAD -> master)
```

Obok SHA commita zobaczysz `(HEAD -> master)`, co oznacza, że aktualnie jesteśmy na branchu *master*.

W gruncie rzeczy branch *master*, jak również każdy inny branch, wskazuje na ostatni wykonany commit w danym branchu. Branch to taki odnośnik do ostatniego wykonanego commita i serii commitów wykonanej w przeszłości. Aktualnie będąc na branchu *master*, jesteś jednocześnie na ostatnim wykonanym commicie w tym branchu. W tym miejscu pliki mają swoją określoną zawartość, która zapisana jest w pod postacią commita. 

## Tworzenie branchy

Stwórzmy nowego brancha:

```shell
git branch text-in-readme
```

Teraz uruchamiając komendę `git log` zobaczysz inną informację:

```shell
git log
commit d884b50b0c9f42677594cd6fb92475d31da78108 (HEAD -> master, text-in-readme)
```

Widzisz teraz obok znanej informacji `(HEAD -> master)` twoją nowo stworzoną nazwę brancha (*text-in-readme*). Stworzyliśmy brancha ale oprócz samego stworzenia, nic nie zrobiliśmy. Dalej jesteśmy na branchu master. Skąd wiemy, że jesteśmy na branchu master, a nie na branchu *text-in-readme*? Tą informację daje nam wskaźnik HEAD. To HEAD mówi nam w jakim momencie historii projektu się znajdujemy (bo możemy nie tylko przełączać się między branchami ale również między commitami, aby cofnąć się do konkretnej zmiany i zobaczyć jak wyglądała i działała aplikacja w przeszłości). 

Na razie tylko stworzyliśmy brancha. Dokładnie to robi komenda:

```shell
git branch *nazwa-brancha*
```

Powyższa komenda tworzy nowy branch.

## Przechodzenie między branchami

Przejdźmy sobie na nowego brancha i zróbmy na nim konkretną pracę. Tą pracą niech będzie modyfikacja zawartości pliku README.txt (w swoim folderze mam tylko ten plik).

Pierwszym krokiem jest przejście na nowo stworzonego brancha. Posłuży nam do tego komenda `git checkout`:

```shell
git checkout text-in-readme
```

Jak widzisz, komenda `git checkout` przyjmuje jako argument nazwę brancha na którego chcesz przejść. Teraz sprawdźmy za pomocą komendy `git status` co nam powie Git:

```shell
git status
On branch text-in-readme
nothing to commit, working tree clean
```

Widzmy, że udało nam się przejść na branch *text-in-readme*. Edytujmy plik i zróbmy commit:

```shell
echo 'Pierwsze zdanie w pliku' >> README.txt
git add README.txt
git commit -m "add example text to README"
```

Teraz już pierwsze praktyczne zastosowanie branchy. Porównajmy sobie historię brancha *master* z branchem *text-in-readme*. Wpiszmy komendę `git log` na branchu *text-in-readme*:

```shell
commit 539b86338103e23fb68e36f3e5f89f43ef91e488 (HEAD -> text-in-readme)
Author: Oskar Kowalów <kowalow.oskar@gmail.com>
Date:  Sun Aug 23 12:42:14 2020 +0200

    add example text to README
    
commit c43a625742f940ab7077acfe0ad36ab8eb6a3ea9 (master)
Author: Oskar Kowalów <kowalow.oskar@gmail.com>
Date:  Sat Aug 15 12:15:48 2020 +0200

    initial commit
```

Pierwszy commit od góry to nasz najnowszy commit i widzimy, że jest wykonany na branchu *text-in-readme* (HEAD wskazuje nam gdzie jesteśmy). Commit poniżej został wykonany na branchu *master* (i HEAD na niego nie wskazuje, bo nie jesteśmy na branchu *master*). Użyjmy sobie zmodyfikowanej komendy `git log` aby wyraźniej zobaczyć tę różnicę:

```shell
git log --oneline --decorate --graph --all
```

Ta komenda pokaże nam historię zmian na wszystkich branchach:

```shell
git log --oneline --decorate --graph --all
* fbea1b2 (HEAD -> text-in-readme) add second sentence to README file
* 2e0e649 add example text to README
* c43a625 (master) initial commit
```

Widzimy, że jedynie na branchu *text-in-readme* mamy nowe commity, podczas gdy branch *master* ma tylko jeden commit o tytule "initial commit".

Przełączmy się na branch master i sprawdźmy historię commitów:

```shell
commit c43a625742f940ab7077acfe0ad36ab8eb6a3ea9 (master)
Author: Oskar Kowalów <kowalow.oskar@gmail.com>
Date:  Sat Aug 15 12:15:48 2020 +0200

    initial commit
```

Faktycznie, na branchu master mamy tylko jeden commit i nie ma w nim commitów z brancha *text-in-readme*! To jest najważniejsza informacja. Na osobnym branchu mamy pliki, które są w takim stanie, w jakim były podczas tworzenia ostatniego commita. Przełączanie się między branchami sprawia, że pliki zmieniają swoją zawartość w danym repozytorium. 

## Cofanie się w przeszłość

Stwórzmy sobie jeszcze jednego commita na branchu *text-in-readme* aby nasza historia była trochę większa:

```shell
echo 'Drugie zdanie w pliku. Zatem kolejna zmiana' >> README.txt
git add README.txt
git commit -m "add second sentence to README file"
```

Teraz w naszej historii, na branchu *text-in-readme* mamy w sumie 3 commity. Możemy cofnąć się do poprzednich commitów i odtworzyć zawartość plików, która znajdowała się w momencie stowrzenia danego commita. Na ten moment mamy w pliku README.txt następującą zawartość:

```
Pierwsze zdanie w pliku
Drugie zdanie w pliku. Zatem kolejna zmiana
```

Chcąc przenieść się konkretnych commitów, musimy podać SHA danego commita. Tą informację znajdziemy używając znanej nam komendy `git log`. Użyjmy sobie zmodyfikowanej komendy `git log --oneline` dzięki, której zobaczymy wybrane informacje o commicie w jednej linii (skrócone SHA commita, nazwa brancha i tytuł commita):

```shell
git log --oneline
41e9935 (HEAD -> text-in-readme) add second sentence to README file
2e0e649 add example text to README
c43a625 (master) initial commit
```

Cofnijmy się do poprzedniego commita używając jego SHA:

```shell
git checkout 2e0e649
```

Zobaczymy długi komentarz od Git'a o tym, że HEAD jest odczepiony od brancha i teraz wskazuje na konkretny commit (więc HEAD nie wskazuje ani na branch *master* ani na branch *text-in-readme* tylko na commit na który się przenieśliśmy) oraz, że możemy sobie eksperymentować z plikami z tym commicie, tworząc nowe commity lub możemy stworzyć nowego brancha z tego commita, co da nam możliwość pracy na nowym branchu bazując na zawartości plików z tego commita. 

Teraz nasza historia wygląda tak jak w poprzednim commicie:

```shell
$ git log --oneline
2e0e649 add example text to README
c43a625 (master) initial commit
```

I zawartość pliku README.txt też jest taka, jaka była w tym commicie:

```
Pierwsze zdanie w pliku
```

## Rozbieżna historia

A co z naszym branchem *master*? Przełączmy się na mastera i zobaczmy, co tam mamy:

```shell
git checkout master
git log --oneline
c43a625 (HEAD -> master) initial commit
```

Nasz branch *master* ma tylko jeden commit i zawartość pliku README.txt jest pusta. 

Często w projekcie jest tak, że pracując sobie na osobnym branchu, okazuje się, że na branchu *master*, ktoś już dążył wykonać jakaś pracę. Zróbmy sobie taką symulację i dodajmy commita w branchu *master* tworząc nowy plik:

```shell
touch nowy-plik.txt
git add nowy-plik.txt
git commit -m "add new file as an example"
```

Teraz mamy rozbieżną historię w obu branchach. Na branchu *text-in-readme* mamy inne commity i zrobiliśmy inną pracę, i na branchu *master* też mamy inne commity oraz zrobiliśmy inną pracę. Możemy zobaczyć tę rozbieżność używając ponownie zmodyfikowanej komendy `git log` z dodatkowymi argumentami, aby zobaczyć historię commitów dla wszystkich branchy:

```shell
git log --oneline --decorate --graph --all
* 1d0fec0 (HEAD -> master) add new file as an example
| * fbea1b2 (text-in-readme) add second sentence to README file
| * 2e0e649 add example text to README
|/
* c43a625 initial commit
```

Generalnie ten graf pokazuje nam efekt wykonanej pracy na naszych obu branchach wraz z historią commitów na tych branchach. Widać, że branch *master* ma inną historię od brancha *text-in-readme* i te zmiany są zróżnicowane, na co wskazuje graficzne rozgałęzienie. Branch *text-in-readme* stał się dosłownie osobną gałęzią wraz z swoją historię zmian i swoją zawartością plików, podczas gdy branch *master* też ma swoją, osobną historię zmian i zawartość plików. 

## Co można zrobić z branchami?

W tym momencie możemy zdecydować, że chcemy mieć połączone oba branche i do naszego głównego brancha *master* chcemy dorzucić pliki znajdujące się na branchu *text-in-readme*. Takie scalenie branchy nazywa się merging. Takiego scalenia dokonuje się w momencie, kiedy na danym branchu skończyliśmy tworzyć jakąś pracę i jesteśmy gotowi dołączyć nasze zmiany do głównej linii dewelopmentu, do głównego brancha, czyli do naszego pnia, brancha *master*, tam gdzie jesteśmy pewni, że nasza aplikacja lub strona wygląda i działa tak jak powinna.

## Podsumowanie

Przeszliśmy przez tworzenie branchy i na każdym branchu zrobiliśmy inną pracę co spowodowało, że na obu branchach mamy osobną historię zmian 🎉. Jest to główna cecha branchy i to co jest najważniejsze podczas pracy z branchami. Zrozumienie, że każdy branch zawiera inne pliki i inną historię commitów to clue tego wpisu. W następnym artykule opowiem więcej, jak połączyć te branche ze sobą i na jakie problemy można się natknąć podczas scalania branchy. 

W programowaniu ważne jest, aby wiedzę dawkować porcjami i nie ogarniać wszystko na raz. Lepiej jest skupić się na danym zagadniemu trochę dłużej, aby potem móc łatwiej wejść na wyższy poziom abstrakcji, czyli na bardziej zaawansowane zagadnienia, które wciąż bazują na podstawach. 

Mam nadzieję, że skutecznie przybliżyłem Wam pracę na branchach. Jeżeli jest coś niejasne, niezrozumiałe, trudne do przyjęcia lub pogmatwane to piszcie w komentarzach, a chętnie się odniosę do wszelkich wątpliwości. Możecie też napisać, jeżeli ten wpis zwyczajnie Wam się podobał, to również jest dla mnie bardzo ważne 🤚.