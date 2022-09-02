//stringovi

let recenica="sutra imamo test iz prve polovine JS.";
let rec="sutra";
console.log(rec);

// Pristupanje prvom slovu nase reci sutra:
let prviKarakter=rec[0];
console.log(prviKarakter);


// Prevesti rec u sva velika slova
// Za ovaj zadatak se koristi metoda toUpperCase()
let nekarec=rec.toUpperCase();
console.log(nekarec);

//duzina stringa
let duzinaRecenice=recenica.length;
console.log(duzinaRecenice)
console.log(rec.length);

// Ispisati recenicu tako da svaki karakter ide jedan ispod drugog
let recenica11="danas je uzasan dan";
for(i=0;i<recenica11.length;i++){
    console.log(recenica11[i]);
}

let recenica111="sutra je test";
let rec1="test"
for(a=0;a<recenica111.length;a++){
    console.log(recenica111[a]);
}
let zadnjarec=rec1.toUpperCase();
console.log(zadnjarec);

// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
recenica21="sutra imamo test";
let recenica222=" ";
for(let s=0;s<recenica21.length;s++){
    if(s===0){
        recenica222+=recenica21[s].toUpperCase()
    }else if(recenica21[s-1]===" "){
        recenica222+=recenica21[s].toUpperCase()
    }else{
        recenica222+=recenica21[s]
    }
}
console.log(recenica222);



//svaka rec se zavrsava velikim slovom
recenica = "Za nedelju dana je test , gde zavrsavamo prvi ciklus od 3 ovog kursa ";
let recenica55=" ";
let len = recenica.length;
for(let i=0;i<len;i++){
    if(i===len - 1){
        recenica55 += recenica[i].toUpperCase();
    }else if(recenica[i+1] === " "){
        recenica55 += recenica[i].toUpperCase();
    }else{
        recenica55+=recenica[i]
    }
}
console.log(recenica55);


// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

let recenica4 = "";

for (let i = 0; i<recenica.length; i++) {
    if (recenica[i] === " " ) {
        continue
    } else {
        recenica4 += recenica[i]
    }
}

console.log(recenica4);


// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, ljegov kvadrat i vrednost broja umanjenu za 25.

// let n = Number(prompt("Unesite broj izmedju 12 i 16. "));

// if (isNaN(n) || n < 12 || n > 16) {
//     console.log("Niste uneli korektnu vrednost. ");
// } else {
//     for(i = n; i >= 1; i--) {
//         console.log(i, i * i, i - 25);
//         }
// }
