// startsWith()metoda nam vraca boolean u zavisnosti od toga da li dati string pocinje recju koja je smestena kao argument metode.

let recenica="Provera stringova.";
console.log(recenica.startsWith("provera"));

// endWith()metoda nam vraca boolean u zavisnosti od toga da li dati string zavrsava recju koja je smestena kao argument metode.

console.log(recenica.endsWith("ingova."));

// JavaScript TEMPLATE LITERALS.
// Back-Ticks ``
// Prva prednost u odnosu na navodnike je sto pisanje navodnika unutar stringa nam nece vratirti gresku.

let recenica2=`Danas je bilo pravo "jesenje" vreme.`;

// Omoguceno je pisanje stringa u vise redova.
let recenica3=`Ako bi se desilo da na pocetku casa dodju svi na vreme,
to bi bilo cudo,koje do tog trenutka nismo videli,
mada je zadovoljavajuce da svakom casu prisustvuje vecina polaznika kursa.`;

//Interpolacija,odnosno mozemo zapisivati string u kombinaciji sa promenljivima:
let a=10;
let b=14;
let c=`Prva vrednost je ${a},druga vrednost je ${b}.`;
console.log(c);

//F-ja koja pretvara ince u centimetre 1i-2.54cm
//2. km u m

//1.zadatak
function inchToCm(inch) {
    return `Broj centimatara za unete inche iznosi ${inch * 2.54}`;
  }
  
  console.log(inchToCm(40));
  
  const kmToM = function (km) {
    return `Broj metara koji odgovara unetim kilometrima je ${km * 1000}`;
  };
  
  console.log(kmToM(3));



  function teren() {
    let sirina = +prompt("Unesite sirinu terena: ");
    let duzina = +prompt("Unesite duzinu terena: ");
  
    if (isNaN(sirina) || isNaN(duzina)) {
      return `Sirina i Duzina moraju biti brojevi.`;
    } else if (sirina < 1 || sirina > 100) {
      return `Sirina mora biti izmedju 1-100`;
    } else if (duzina < 1 || duzina > 100) {
      return `Duzina mora biti izmedju 1-100`;
    } else {
      let ukupno = 2 * sirina + 2 * duzina;
      return `Ukupno metara koje sportista predje: ${ukupno}`;
    }
  }
  
  console.log(teren());