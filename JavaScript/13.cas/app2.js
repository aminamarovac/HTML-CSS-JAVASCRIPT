//STRINGOVI

//STRINGOVI predstavljaju immutable promenljive (promenljive koje ne mozemo da menjamo)
//Ali obicno pri nekoj potrebi da izmenimo string cemo definisati novu promenljivu 
//i dodeliti joj karakter prema postojecoj(obicno to bude koriscenjem for petlje).

// 1. Za pronalazenje duzine stringa se koristi metoda LENGTH.
let recenica="Danas je promenljivo vreme.";
const duzina=recenica.length;
console.log(duzina);

// Prilikom pisanja stringa mozemo naici na problem ako zelimo da se unutar stringa nadju navodnici.
//1.NACIN:
let recenica2="Medicinska skola u Novom Pazaru se zove 'DVA HEROJA' . Naziv je dobila po herojima koji su izgubili svoje zivote prilikom spasavanja bebe."
console.log(recenica2);

//2.NACIN:
let recenica22='Medicinska skola u Novom Pazaru se zove "DVA HEROJA" . Naziv je dobila po herojima koji su izgubili svoje zivote prilikom spasavanja bebe.'
console.log(recenica22);

//3.NACIN:(koriscenjem \ (backslash) komande.)
let recenica222='Medicinska skola u Novom Pazaru se zove "DVA HEROJA" . Naziv je dobila po herojima koji su izgubili svoje zivote prilikom spasavanja bebe.'
console.log(recenica222);
let novaRecenica="Neka nova recenica koja treba sadrzati \\ backslash kao deo stringa";
console.log(novaRecenica);
// Jos jedna primena \ (backslash) kada zelimo da podelimo string u nekoliko redova.
// Ova metoda ne funkcionise kada se radi o obicnom kodu, vec samo kada su stringovi u pitanju.
let novaRecenica2 =
"Uređuju se: vrste i klasifikacija otpada; planiranje upravljanja otpadom; \
subjekti upravljanja otpadom; odgovornosti i obaveze u upravljanju otpadom; \
organizovanje upravljanja otpadom; uslovi i postupak izdavanja dozvola; \
prekogranično kretanje otpada; izveštavanje o otpadu i baza podataka; \
finansiranje upravljanja otpadom; nadzor, kao druga pitanja od značaja za upravljanje otpadom.";

// 3 metode za uzimanje dela stringa:
//    1. slice(start, end) - end se ne ukljucuje
//    2. substring(start, end) - end se ne ukljucuje (Razlika u odnosu na slice je u tome sto substring metoda ne prima negativne vrednosti)
//    3. substr(start, length)

let novaRecenica3 =
"Ovo je jedna duza recenica koju treba skratiti. Mozemo primeniti sve tri navedene metode.";
let duzina2 = novaRecenica3.length;
console.log(duzina2);
console.log(novaRecenica3.slice(7, 26));
console.log(novaRecenica3.slice(-7, -1));
console.log(novaRecenica3.substring(7, 12));
console.log(novaRecenica3.substr(7, 12));