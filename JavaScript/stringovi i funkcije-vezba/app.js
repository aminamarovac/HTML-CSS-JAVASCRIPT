function zadatak () {
    let nekaRecenica=prompt("Unesite neku recenicu:");
    let duzina=nekaRecenica.length;
    let polaDuzine=nekaRecenica/2;
    let prviDeo=nekaRecenica.substr(0,polaDuzine).toUpperCase();
    let drugiDeo=nekaRecenica.substr(polaDuzine,duzina).toLowerCase();
    let prva=nekaRecenica.toUpperCase();
    let druga=nekaRecenica.toLowerCase();
    let treca=prviDeo.concat(drugiDeo);
    let cetvrta=nekaRecenica.replace(/skola/gi,"fakultet");
    let peta=nekaRecenica.substring(0,10);
    let sesta=nekaRecenica.slice(-10,duzina);
    return prva.concat("\n",druga,"\n",treca,"\n",cetvrta,"\n",peta,"\n",sesta);
}
console.log(zadatak());
function prvaFunkcija(){
    return 9;
}
    console.log(prvaFunkcija());

function razlikaDesetIPet(){
    return 10-5;
}
console.log(razlikaDesetIPet());

function zbirDvaBroja(prvaVrednost,drugaVrednost){
    return prvaVrednost+drugaVrednost;
}
console.log(zbirDvaBroja(15,5));

function razlikaDvaBrojaa(prvi,drugi){
    return prvi-drugi;
}
console.log(razlikaDvaBrojaa(15,5));

function povrsina (prvaVrednost,drugaVrednost){
    if(prvaVrednost===drugaVrednost){
        return "Povrsina kvadrata iznosi : " + prvaVrednost*prvaVrednost;
    }else {
        return "Povrsina pravougaonika iznosi: " + prvaVrednost*drugaVrednost;
    }
}
console.log(povrsina(5,6));

//Napraviti funkciju koja vraca zbir kvadrata dva broja.
//Druga vrednost je po defaultu 1.

const mySecondFunction= function(prviBroj,drugiBroj) {
    if(drugiBroj===undefined){
        return prviBroj**2 + 1;
    }else{
        return prviBroj**2 + drugiBroj**2;
    }
}

console.log(mySecondFunction(5));
console.log(mySecondFunction(5,5));


const mySecondFunction2 = function(prvaa,drugaa=1){
    return prvaa**2 + drugaa**2;
}
console.log(mySecondFunction2(5,5))
console.log(mySecondFunction2(6,8));

//Napraviti funkciju koja na osnovu unetog argumenta vraca jedno od 4 stanja:
//Ako je unet pozitivan broj ispisuje poruku:"ARGUMENT JE POZITIVAN BROJ".
//Ako je unet negativan broj ispisuje poruku:"ARGUMENT JE NEGATIVAN BROJ".
//Ako nije unet broj,ispisuje poruku:"ARGUMENT NIJE BROJ".

const arrowFunc1= (brojj) => {
    if(typeof brojj!=="number"){
        return "ARGUMENT NIJE BROJ."
    }  else if(brojj>0){
        return "ARGUMENT JE POZITIVAN BROJ."
    }else if(brojj<0){
        return "ARGUMENT JE NEGATIVAN BROJ."
    }else if(brojj===0){
        return "ARGUMENT JE NULA."
    }

}
console.log(arrowFunc1(5))
console.log(arrowFunc1(-2))
console.log(arrowFunc1(0));
console.log(arrowFunc1("2"));

let isSunny=true;
if(isSunny===true){
    console.log("Danas je lep dan");
}

//Stringovi
let recenica7="Danas je prelep dan."
const duzina=recenica7.length
console.log(duzina);

let recenica22="Jedan od najlepsih romana Sebahatin Alija jeste : 'Madona u krznenom kaputu'."
console.log(recenica22);

let recenica23='Jedan od najlepsih romana Sebahatin Alija jeste " Madona u krznenom kaputu".'
console.log(recenica23);
let novaRecenica300 =
"Uređuju se: vrste i klasifikacija otpada; planiranje upravljanja otpadom; \
subjekti upravljanja otpadom; odgovornosti i obaveze u upravljanju otpadom; \
organizovanje upravljanja otpadom; uslovi i postupak izdavanja dozvola; \
prekogranično kretanje otpada; izveštavanje o otpadu i baza podataka; \
finansiranje upravljanja otpadom; nadzor, kao druga pitanja od značaja za upravljanje otpadom.";
console.log(novaRecenica300);
let novaRecenica3 =
"Ovo je jedna duza recenica koju treba skratiti. Mozemo primeniti sve tri navedene metode.";
let duzina2 = novaRecenica3.length;
console.log(duzina2);
console.log(novaRecenica3.slice(7, 26));
console.log(novaRecenica3.slice(-7, -1));
console.log(novaRecenica3.substring(7, 12));
console.log(novaRecenica3.substr(1,8));

let recenica9="Nekada zelimo izmeniti neki sadrzaj."
let novaRecenica9=recenica9.replace("sadrzaj","tekst")
console.log(novaRecenica9);

let recenica10="Nekada zelimo zameniti neki sadrzaj tako sto cemo staviti neki drugi sadrzaj."
let novaRecenica10=recenica10.replace("sadrzaj","tekst");
console.log(novaRecenica10);

let novaRecenica11=recenica10.replace(/sadrzaj/g,"tekst");
console.log(novaRecenica11);

let recenica11="NEKADA zelimo zameniti NEKI SADRZAJ tako sto cemo STAVITI neki drugi sadrzaj."
let novaRecenica12=recenica11.replace(/sadrzaj/i,"tekst");
console.log(novaRecenica12);


let recenica12="NEKADA zelimo zameniti NEKI SADRZAJ tako sto cemo STAVITI neki drugi Sadrzaj."
let novaRecenica13=recenica12.replace(/sadrzaj/gi,"tekst");
console.log(novaRecenica13);

let recenica00="Danas je bilo lepo vreme."
console.log(recenica00.toUpperCase());
console.log(recenica00.toLowerCase());

var sentence1="Danas je ";
var sentence2="bilo lepo vreme";
var sentence1And2 = sentence1 . concat (sentence2) ;
console.log(sentence1And2);

let sentence11="Sutra ce ";
let sentence22="biti kisovito.";
let sentence11And22=sentence11.concat(sentence22);
console.log(sentence11And22)


//Napraviti funkciju koja trazi od korisnika da unese neku recenicu,zatim funkcija vraca
//datu recenicu u vise oblika(spojenu u jedan string).
// 1.recenicu ispisanu velikim slovima
// 2.recenicu ispisanu malim slovima
// 3.pola recenice ispisano velikim slovima,pola malim slovima (length se primenjuje)
// 4.Ako se u recenici nadje rec 'skola'(bilo gde),neka bude zamenjena recju 'fakultet' .
// 5.neka bude ispisano prvih 10 karaktera unete recenice.
// 6.neka bude ispisano poslednjih 10 karaktera unete recenicee.





