//NUMBER PROPERTIES//

// Number properties ne mogu biti primenjene na promenljive
// vec samo pristupanjem preko Number.(PROPERTY)

//1.MAX_VALUE nam vraca najveci moguci broj u JavaScriptu
console.log(Number.MAX_VALUE);

//2.MIN_VALUE vraca najmanji moguci broj u JavaScriptu.
console.log(Number.MIN_VALUE);

//3.POSITIVE_INFINITY vraca infinity(beskonacnost)
console.log(Number.POSITIVE_INFINITY);

//NEGATIVE_VALUE vraca -Infinity(beskonacnost)
console.log(Number.NEGATIVE_INFINITY);

//5.NaN-vraca not a number vrednost.
console.log(Number.NaN);

//Zadatak
//Napraviti funkciju koju prima jedan argument(broj) i vraca poruku
//da li je dati element palindrom

const isPalindrom = function(broj){
    let stringBroj=broj.toString();
    let obrnutiBroj=" ";
    let  duzina=stringBroj.length;
    for(let i=duzina-1;i>=0;i--){
        obrnutiBroj+=stringBroj[i];
    }if(stringBroj===obrnutiBroj){
        return `Dati broj je palindrom.`
    }else{
        return `Dati broj nije palindrom.`
    }

};
console.log(isPalindrom(456));




