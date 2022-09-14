const domaci = function() {
    let nekaRecenica=prompt("Unesite neku recenicu:");
    let duzina=nekaRecenica.length;
    let polaDuzine=duzina/2;
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
console.log(domaci());

let recenica="Recenica koju treba iseci."
let prva=recenica.slice(0,8);
let druga=recenica.substring(4,8);
let treca=recenica.substr(4,10);

