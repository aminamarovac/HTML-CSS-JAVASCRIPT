//JavaScript Array delete
//Preko delete keyword(rezervisane reci) mozemo izbrisati neki element niza.

let voce=["jagoda","banana","mandarina","ananas"];
//Ovaj nacin brisanja elementa u nizu nam ostavlja prazna mesta.
delete voce[2];
console.log(voce);
//Preporucuje se koriscenjenje pop ili push metode.

//Spajanje nizova
// Za spajanje nizova se koristi concat() metoda.
// Concat metodas pravi novi niz  koji je sadrzan od elemenata onih nizova koji se spajaju.

voce=["jagoda","banana","mandarina","ananas"];
let povrce=["krastavica","krompir","luk"];

let voceIPovrce=voce.concat(povrce);
console.log(voceIPovrce);

//concat metoda moze sadrzati vise elemenata...
let salate=["cezar","ruska","pileca"];

let triNiza=salate.concat(voce,povrce);
console.log(triNiza);

//Ako se kao argument concat metode nadje neki string,
//taj string zapravo predstavlja novi element koji ce biti dodat nasem postojecem nizu.
let pojacanoVoce=voce.concat("tresnje","visnje");
console.log(pojacanoVoce);

//splice metoda-izmedju ostalog ova metoda se koristi za dodavanje novih elemenata u nizu.
voce=["jagoda","banana","mandarina","ananas"];

//Splice metoda uzima najmanje dva argumenta,gde :
// 1. argument predstavlja index na kojem ce da se vrse neke promene.
// (index elementa od kog ce biti izbrisano nekoliko elemenata,to znamo na osnovu drugog
//argumenta i pod kog ce se eventualno dodati nekoliko novih elemenata.) 
// 2.argument predstavlja broj koliko se zapravo brise elemenata na poziciji definisanoj 
//na prvom argumentu.
// 3.,4., ... argumenti predstavljaju elemente koji ce se dodati na poziciji koju smo definisali
//na prvom argumentu.
voce.splice(2,1,"kivi","bostan");

console.log(voce);

niz=["Imran","Muhamed","Abdurahman","Amina","Amina","Mejra","Talib"];

//1.zadatak
//Primenom splice metode izbrisati iz niza sve devojke.
//niz.splice(3,3)
//console.log(niz)


//2.zadatak
//Izbrisati iz niza sve muskarce
//niz.splice(0,3)
//console.log(niz)
//niz.splice(3,1)
//console.log(niz)


//3.zadatak
//Izbrisati iz niza sve Amine i na mestu prve Amine dodati Harun i Muusa.
//niz.splice(3,2,"Harun","Muusa");
//console.log(niz);

//Splice metoda vraca niz sa izbrisanim elementima
//let novi=niz.splice(3,3);
//console.log(niz);

//slice metoda nam daje deo niza kao novi niz.
//Pravimo novi niz primenjivanjom slice metode na nas niz.
let skraceni=niz.slice(2,6)
console.log(skraceni);
// U slucaju da drugi argument bude izostavljen daje se ostatak niza.
let skraceni2=niz.slice(2);
console.log(skraceni2);

