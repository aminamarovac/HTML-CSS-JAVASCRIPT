document.getElementById("paragraf").innerHTML =
"Ovo je paragraf dodat od strane JavaScripta";

// Ispisati u konzoli recenicu :
console.log ("Danas je bilo pretoplo.Cekamo septembar za nesto svezije vreme");

// Tipovi podataka u JavaSCript-u:
// Za proveru tipa varijable (promenljive) u JavaScriptu se
// typeof operator.

// Postoje:
// 1.Primitivni podataka
// 2.Neprimitivni tipovi podataka

// 1.1 String-niz podataka koji se upisuje unutar navodnika.
//    On moze biti zapisan unutar obicnih ili duplih navodnika  (nije ni bitno);
//    Stringovi moogu biti bilo koji karakteri A-Z, 0-9;
//    Zapisivanje stringa:

"Danas je toplo.";  
"Danas je padala kisa.";
"Danas je padao sneg.";
String("Danas je duvao jak vetar.");

// 1.2 Number  -  predstavlja broj u JavaScriptu.
//            On moze biti zapisan sa decimalom ili bez nje.
//            JavaScript ne razlikuje tipove kod brojeva,vec su svi brojevi Number tipA.
//            Zapisivanje brojeva:

10;
0;
-78;
1.14;
0.999997654345;
Number (45);

//1.3 BigInt  - Ovaj tip podataka nam sluzi za skladistenje brojeva cija vrednost
//              Prelazi granicu Number tipa podatka.
//  Zapisivanje velikih brojeva:

BigInt(875829387587559076578865789);

//  1.4 Boolean - predstavlja entitet i on moze imati dve vrednposti:
//                1.true;
//                2.false.
//                Najveca primena ovog tipa podataka se nalazi u kondicionalima,
//                tjst u slucajevima ispitivanja da li je odredjeni uslov zadovoljen ili ne
//                Zapisivanje Boolean-a:
// Boolean ("odredjeni uslov") => kao izlaz dobijamo true ili false


// 1.5 undefined - Kada odredjenu promenljivu deklerisemo,ali joj ne dodelimo bvrednost
//                 tada undefind i vrednost i tip za tu promenljivu.

// 1.6 null - tip podatka null se javlja za nepostojecu ili promenljivu koja
//              nije validna.

// 1.7 Symbbol-to je novi tip podatka u JavScriptu.
// Koristi se za anonimne i jedinstvene vrednosti.

Symbol ("kako je bilo vreme");
//2. Neprimitivni tipovi podataka (Non-Primitive data types).
//   Primitivni tipovi podataka se koriste za skladistenje promenljivih (varijabli)
//   koje imaju jednu vrednost.
//   Dok za promenljive koje sadrze vise vrednosti (ili kompleksnih vrednosti) 
//   koristimo neprimitivne tipove podataka (Non-Primitive data types.)

//  Primeri ne primitivnih tipova podataka :

//   2.1  Array  (Nizovi)  -Nizovi se koriste za skladistenje vise podataka
//   unutar jedne promenljive.
//   Nizovi u JavaScriptu imaju mogucnost skladistenja elemenata 
//   razlicitih tipova podataka.

//   Zapisivanje nizova :
["Talib","Muhamed","Amina","Ahmed","Mervan"]
//   Niz brojeva
[15,17,18,18,19]
// Niz koji u sebi sadrzi razlicite tipove podataka
["Talib",15, false, "Ahmed",19,true]

//2.nacin zapisivanja nizova (nacin koji nije preporucljiv za koriscenje)
new Array ([false,"Ahmed",19])

//  2.2  Object (objekti)-Objekti su glavna stvar u programskom
//  jeziku JavaScript.
//                        Objekti sluze za skladistenje nekih podataka
//                        i oni se zapisuju po principu (name,value) par.
//                        Objekti takodje mogu sadrzati razlicite tipove podataka.
//       Zapisivanje objekata:

//{
    //marka:"BMW",
//godinaProizvodnje: 2006,
//boja:"crna"
//kubikaza:"2000ks"
//}
//2.nacin zapisivanja nizova (nacin koji nije preporucljiv za koriscenje)
new Object ({punoletnost:false,
            ime:"Ahmed",
            starost:19})

 // 2.3Set (Setovi)  - Setovi su slicni nizovima,sa razlikom kod zapisivanja
 //                    i izmedju ostalih najbitnija karakteristika kod setova je da
 //                    oni ne mogu imati duplikate.
 //          Zapisivanje setova:
new Set (["jabuka","sljiva","kruska",])      

//  2.4 Maps (Mape)- Predstavljaju neprimitivni tip podatka,koji je vrlo 
//                    slican objektu,ali se zapisivanje izvrsava na drugaciji nacin
//   Zapisivanje mape:
new Map ([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
    
]);

//Treba imati na umu da svi tipovi podataka koji nisu primitivni
// tipovi podataka imaju Object tip kad ispitujemo preko funkcije typeof.

