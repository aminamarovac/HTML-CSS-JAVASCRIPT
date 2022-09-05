let prom=5;
let prom2="5";
console.log(prom);
console.log(prom2);

//1.
 //let recenica;
 //recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
  //Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
 //(i)	se svi samoglasnici pretvore u velika slova;
 //(ii)	na kraju se doda ‘.’
 //(iii)	ostali karakteri se ne menjaju.
 //Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”


let recenica =
"Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica2 = "";

for (i = 0; i <= recenica.length; i++) {
if (
    recenica[i] === "a" ||
    recenica[i] === "e" ||
    recenica[i] === "i" ||
    recenica[i] === "o" ||
    recenica[i] === "u"
) {
    recenica2 += recenica[i].toUpperCase();
} else if (i === recenica.length) {
    recenica2 += ".";
} else {
    recenica2 += recenica[i];
}
}

console.log(recenica2);