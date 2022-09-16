//Split()metoda ce izvrsiti konverziju stringa u niz(Array).

var recenica="Zelim izvrsiti konverziju ove recenice u niz.";
var recenica2="Ako bi se desilo da na pocetku casa dodju svi na vreme ,\
to bi bilo cudo,koje do tog trenutka nismo videli , \
mada je zadovoljavajuce da svakom casu prisustvuje vecina polaznika kursa.";

//Izostavljajuci argument od metode split ce se izvrsiti konverzija datog stringa u niz koji ima 1 element.
var niz1=recenica.split();
console.log(niz1);

//Ako je argument string onda cemo dati string pretvoriti u niz koji je podeljen na elemente koje razdvajaju zarezi.
var niz2=recenica2.split(",");
console.log(niz2);

//Sledeci primer ce od svakog karaktera stringa praviti 1 element novonastalog niza.
var niz3=recenica.split("");
console.log(niz3);

// JavaScript search metode:
// 1. index Of() 
// indexOf() metoda nam vraca index pocetne reci koju trazimo
var recenica="Turkey may be famous for its kebabs,but the popular dish is just the tip of the iceberg";
let index1=recenica.indexOf("kebabs");
console.log(index1);

//Ako trazimo index nepostojeceg stringa rezultat ce biti -1.
let index2=recenica.indexOf("pizza");
console.log(index2);

// 2. lastIndexOf()
//lastIndexOf() metoda nam vraca index poslednje ponavljajuce reci u stringu.
let index3=recenica.indexOf("the",50);
let index4=recenica.lastIndexOf("the");
console.log(index3 + "\n" + index4);

//Ako trazimo poslednji index nepostojeceg stringa rezultat ce biti -1.
let index5=recenica.lastIndexOf("pizza");
console.log(index5);

// 3. search() metoda nam vraca index trazenog stringa.
var recenica="Turkey may Be famous For its kebabs,but the popular dish is jUst the tip of the iceberg";

var index6=recenica.search("the");
console.log(index6);

// 4. match() metoda nam vraca niz.

var matchingThe=recenica.match("the");
console.log(matchingThe);

var matchingThe2=recenica.match(/the/gi);
console.log(matchingThe2);

// includes() metoda nam vraca boolean

var recenica="Jos najvise jedan cas cemo raditi string metode."
var isPresence=recenica.includes("cas");
console.log(isPresence);

var isPresence2=recenica.includes("skola");
console.log(isPresence2);



















