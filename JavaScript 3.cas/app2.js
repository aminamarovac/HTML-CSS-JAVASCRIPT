//    Operatori u JavaScriptu
// Operatori u JavaScriptu se dele na sledece:
// 1.Aritmeticki operatori;
// 2.Operatori doodele vrednosti;
// 3.JavaScript string operatore;
// 4.Operatori poredjenja;
// 5.Logicki operatori;
// 6.Tipovni operatori;

// 1.Aritmeticki operatori;
// + Sabiranje;
console.log(5+2);
//-Oduzimanje
console.log(5-2);
//*mnozenje
console.log(5*2);
//**stepenovanje
console.log(5 ** 2);
console.log (2 ** 3);
// /deljenje
console.log (10/2);
//%moduo:
console.log (5%2);
console.log(12%2);
console.log(13%5);
// ++ Povecanje za 1:
let x=5;
x++;
console.log(x);
// --Smanjenje za 1
let y=5;
y--;
console.log(y);
//2.Operatori dodele vrednosti:
//=Jednakost
let a,b;
a=10;
b=a;
console.log(a);
console.log(b);
// +=
let c=15;
c+=5;//c=c+5
console.log(c);
// -=
var d=15;
d-=5;
console.log(d);
//%=
var d=15;
d%=5;
console.log(d);
// **=
var d=15;
d**=5; //d=15**5
console.log(d);

//3.JavaaScript string operatori;
//za spajanje stringova mozemo koristiti +operator
//ako izvrsimo dodavanje stringa nekom broju(broja nekom stringu) preko + operatora dobicemo string.
let m,n;
m="Danas je bilo";
n="lepo vreme.";
console.log(m + " " +n);
console.log(55+m);
//Neke karakteristike vezane za +,-,/;
console.log(5 + "5");
console.log(5 - "4");
console.log(5-"4asd4");//uvek u slucaju nemogucnosti konvertovanja nekog stringa u broj,Javascript nam vraca not a number
console.log(5 * "4");
console.log(5 / "4");
console.log(5 / "danas");


