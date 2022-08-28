// Stringovi

let recenica = "Za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa."
let rec = "Danas"

// Pristupanje karaktera ide preko indeksa.
// INDEKSIRANJE KRECE OD 0 (NULE)
// Kad se radi o stringovima krecemo od nula pa sve do (ukupna duzina - 1)

// Pristupanje trecem slovu nase reci:

let treciKarakter = rec[2];
console.log(treciKarakter);


// Prevesti rec u sva velika slova
// Za ovaj zadatak se koristi metoda toUpperCase()

let novaRec = rec.toUpperCase();
console.log(novaRec);

// Za izracunavanje duzine stringa se koristi metoda length
let DuzinaRecenice = recenica.length;
console.log(DuzinaRecenice);
// Ispisati duzinu reci
console.log(rec.length);


// Ispisati recenicu tako da svaki karakter ide jedan ispod drugog
let recenica2 = "Danas je bilo promenjljivo vreme"

for (let i = 0; i<recenica2.length; i++) {
    console.log(recenica2[i]);
}


// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
recenica = "Za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa.";

let recenica3 = "";

for (let i = 0; i<recenica.length; i++) {
    if (i === 0) {
        recenica3 += recenica[i].toUpperCase()
    } else if (recenica[i-1] === " ") {
        recenica3 += recenica[i].toUpperCase()
    } else {
        recenica3 += recenica[i]
    } 
}

console.log(recenica3);

// Za Domaci :
// Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
recenica = "Za nedelju dana je test , gde zavrsavamo prvi ciklus od 3 ovog kursa ";
let recenica55=" ";
for(let i=0;i<recenica.length;i++){
    if(i===0){
        recenica55 += recenica[i].toUpperCase();
    }else if(recenica[i+1] === " "){
        recenica55 += recenica[i].toUpperCase();
    }else{
        recenica55+=recenica[i]
    }
}
console.log(recenica55);
//

// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka. 
let recenica99="";
for(let i=0;i<recenica.length;i++){
    if(recenica[i]===" "){
        continue
    }else{
        recenica99 += recenica[i]
    }
}
console.log(recenica99);


// Napravi novu recenicu gde ce umesto slova a pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
recenicaa111 = "banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
let recenica5=" ";
for(let i=0;i<=recenicaa111.length -1 ; i++){
    if(recenicaa111[i]==="a" && recenicaa111[i+1]==="n"){
        recenica5+="d"
    }else if(recenicaa111[i]==="a"){
        recenica5+="t";
    }else{
        recenica5+=recenicaa111[i];
    }
}
console.log(recenica5);