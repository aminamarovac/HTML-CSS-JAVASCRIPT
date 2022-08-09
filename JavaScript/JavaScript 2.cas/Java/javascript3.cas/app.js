//var
//Redeklarisanje (ponovno deklerisanje neke promenljive) je dozvoljeno
//izvrsiti bilo gde u programu

var x=14;
console.log(x);
var x =16;
console.log (x);

//let
//Redekleracija(ponovo deklerisanje neke promenljive nije dozvoljeno za let),ako govorimo
//o istom prostoru na kom je izvrsena prva dekleracija.

let y=10;
console.log(y);
//let y=19 nije dozvoljeno

//Block sope (prostor) nam obezbedjuju let i const keywords:

{    
   // console.log(y); //nece izvrsiti prikazivanje y jer u bloku scope nije poznata prethodna dekleracija promenljive
     let y = 19;
     console.log(y);
}

console.log(y);

//let nam ne dozvoljava redekleraciju (ako smo u istom prostoru),ali je moguce izvrsiti 
//reinicijalizaciju(odnosno dodeljivanje druge vrednosti)

let z=10;
z=12;

//const
//promenljive koje su definisane pomocu const
//NE MOGU BITI NI DEKLERISANE ,NI REDEKLERISANE, NI REINICIJALIZOVANE.

const w=16;
//const w=14-ne moze se redeklerisati
console.log(w);
//w=20;-nije moguce izvrsiti reinicijalizaciju
console.log(w);
//karakteristike koje vaze za let kod block scope-a vaze i za promenljive definisane putem const

//let dozvoljava sledece:
let prom;
prom=40;

//const je striktna i kod nje se mora odjednom izvrsiti dekleracija i inicijaloizacija
const prom2=50;

//const ne dozvoljava reinicijalizaciju(ponovno dodeljivanje vrednosti).
//Medjutim    mozemo izvrsiti neke izmene kada se radi o nizu ili objektu
// (izmene u smislu da se promeni vrednost nekog elementa,da se doda element...).
//

