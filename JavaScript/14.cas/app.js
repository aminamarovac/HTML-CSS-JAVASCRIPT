//NASTAVAK METODA KOD STRINGOVA(2)

//Menjanje sadrzaja se moze izvrsiti koriscenjem replace () metode.

let recenica="Nekad zelimo izmeniti sadrzaj nekim drugim.";

//Metoda prima 2 argumenta.Prvi predstavlja rec koju zelimo da izmenimo,drugi novu rec
//koja ce se naci umesto stare.
let novaRecenica=recenica.replace("sadrzaj","tekst");

console.log(novaRecenica);

let recenica2="Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji nije isti sadrzaj koji je bio pre.";

//novaRecenica2 ce zameniti samo prvu rec sadrzaj,recju tekst.
let novaRecenica2=recenica2.replace("sadrzaj","tekst");
console.log(novaRecenica2);

//Koriscenjem Regular Exspression mozemo dodatnom definisati sta zelimo.
//novaRecenica2 ce zameniti svaku rec 'sadrzaj',recju 'tekst'.
//Koristi se Regiular Expression(g);

let novaRecenica3=recenica2.replace(/sadrzaj/g ,"tekst");
console.log(novaRecenica3);

let recenica3="Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji nije isti SADRZAJ koji je bio pre.";

//JavaScript je case-sensitive osetljiv na velika i mala slova.

let novaRecenica4=recenica3.replace(/sadrzaj/g ,"tekst");
console.log(novaRecenica4);

//novaRecenica5 ce izmeniti svaku rec 'sadrzaj',(bilo da je napisana malim ili velikim slovima)recju tekst.
//Koristi se Regular Expression(i-insensitive).
//Menja se sasmo prva rec koja se poklapa.
let recenica4="Nekad zelimo da se na odredjenom mestu nadje SadrZaJ koji nije isti SADRZAJ koji je bio pre.";
let novaRecenica5=recenica4.replace(/sadrzaj/i ,"tekst");

console.log(novaRecenica5);
//Ako hocemo u istom monetu da zamenimo sve reci bez obzira na mala i velika slova mozemo iskoristiti vise 
//regular expressions odjednom.

let novaRecenica6=recenica4.replace(/sadrzaj/gi ,"tekst");
console.log(novaRecenica6);

//Konvertovanje stringa u velika slova:
//toUpperCase()
let recenica5 = "Sta ako zelimo da cela recenica bude ispisana velikim slovima"
console.log(recenica5.toUpperCase());


//Konvertovanje stringa u mala slova:
//toLowerCase()
let recenica6 = "Sta ako ZELIMO DA cela rECENICA bude ispisana MALIM SLOVIMA"
console.log(recenica6.toLowerCase());

//Jedasn od nacina da spojimo dva stringa je putem + operatora.Danas radimo drugi nacin:
//koriscenjem metode koja se zove concat()

var sentence1= "Ako predjemo prvi ciklus,"
var sentence2="nastavljamo sa ozbiljnijim bavljenjem JavaScript programskim jezikom"

var sentence1And2 = sentence1.concat(sentence2);
console.log(sentence1And2);
//Putem concat() metode spojiti vise stringova,(ne samo 2)
sentence1And2=sentence1.concat( " " , sentence2);
console.log(sentence1And2);

// Sve metode vezano za stringove nam vracaju novi string.
//One zapravo ne modifikuju postojeci.

//Domaci zadatak:
//Napraviti funkciju koja trazi od korisnika da unese neku recenicu,zatim funkcija vraca
//datu recenicu u vise oblika(spojenu u jedan string).
// 1.recenicu ispisanu velikim slovima
// 2.recenicu ispisanu malim slovima
// 3.pola recenice ispisano velikim slovima,pola malim slovima (length se primenjuje)
// 4.Ako se u recenici nadje rec 'skola'(bilo gde),neka bude zamenjena recju 'fakultet' .
// 5.neka bude ispisano prvih 10 karaktera unete recenice.
// 6.neka bude ispisano poslednjih 10 karaktera unete recenicee.

console.log("Danas\nradimo\nnesto\nnovo");



