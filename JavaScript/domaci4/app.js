//1.zadatak
function karakteri(){
let recenica = prompt ("Zameniti karaktere");
let novaRecenica = "";
let duzina=recenica.length;
for (let i = 0; i < duzina; i++) {
if (duzina % 2 === 1 && i === duzina- 1) {
    novaRecenica += recenica[duzina - 1];
} else if (i % 2 === 0) {
    novaRecenica += recenica[i + 1];
} else if (i % 2 === 1) {
    novaRecenica += recenica[i - 1];
}
    }
    return novaRecenica;
}
console.log(karakteri());
