document.getElementById("vezba").innerHTML="Ovo je priprema za test.";
//Primitivni tipovi podataka su:(koriste se za promenljive sa jednom vrednoscu.)
String("Danas je lep dan.");
Number(46);
BigInt(380029888484930303939933938);
Boolean("uslov");
undefined;
null;
Symbol("lepo je");
//neprimitivni tipovi podataka za promenljive sa vise vrednosti.
Array["Amina",18,true];
new Array([true,"Amina",18]);
//Object
//{ime:"amina",
//godine:18
//}
new Object ({ime:"amina"});
new Set(["jabuka","kruska"]);
new Map([
    ["apples"],
    ["bananas"]
]);
//var x;//dekleracija
//x=10;//inicijalizacija
//var x=10;//dekleraqcija i inicijalizacija

//let x;
//x=10;
//let x=10;

//const x=3;//moraju odjednom biti izvrsene obe

var y=15;
console.log(y);
var y=3;
console.log(y);
{
let z=5;
console.log(z);
}

let x=10;
x=5;
console.log(x);

let prom;
prom=9;
console.log(prom);

//Aritmeticki operatori
//1.
console.log(5+1);
//2.
console.log(5-1);
//3.
console.log(5*2);
//4.
console.log(6/2);
//5.
console.log(5**2);
//6.
console.log(8%3);
//7.
a=15;
a++;
console.log(a);
//8.
b=15;
b--;
console.log(b);


//Operatori dodele vrednosti
//jednakost
a=10;
b=a;
console.log(a);
console.log(b);
//+=
var a=10;
a+=5;
console.log(a);
//-=
var c=5;
c-=2;
console.log(c);
//** 
var n=3
n**=2;
console.log(n);
//%
var s=4;
s%=3;
console.log(s);

//String operatori
let v,l;
v="Danas je";
l="lep dan";
console.log(v + " " + l);
console.log(5/"5");

//Operatori poredjenja
//==
let g,o;
g=5;
o=5;
console.log(g==o);

//===
let d,p;
d=5;
p="2";
console.log(d===p);

//!=
let u,i;
u=4;
i="2";
console.log(u!=i);

//!==
let r,w;
r=2;
w="2";
console.log(r!==w);

let q,t;
q=5;
t=2;
console.log(q>=t);


//Logicki operatori

let on,ona;
on=5;
ona=4;
console.log(on>ona && ona<=on);

let il,ili;
il=2;
ili=3;
console.log(il<ili || ili>=il);

let isSunny=false;
console.log(!isSunny);

//typeof operatori

let sum=4;//number
let sum1="2"//string
let isSnny=true;//boolean
console.log(typeof sum);
console.log(typeof sum1);
console.log(typeof isSnny);

let obj={
    ime:"amina",
    prezime:"marovac"
}
console.log(obj instanceof Object);

//const ime=prompt("Unesite vase ime");
//console.log(ime);
//let brojGodina;
//brojGodina=prompt("Unesite vase godine");
//console.log(brojGodina);
//brojGodina=+brojGodina;
//console.log(brojGodina);
//console.log(typeof brojGodina);
//brojGodina=Number(brojGodina);
//console.log(typeof brojGodina);
//brojGodina=Number(prompt("unesite godine"));
//console.log(brojGodina);

//Na osnovu unetih godina ispisati u konzoli sledece:
//ako je broj godina manji od 12:Vi ste decijeg doba.
//ako je broj godina izmedju 12 (ukljucuje se)i 18 (ne ukljucuje)vi ste maloletni
//ako je broj godina izmedju 18(ukljucuje se) i 40(ne ukljucuje)vi ste punoletni.
//ako je broj godina veci ili jednak 40 vi ste zrela osoba.
//ako korisnik nije uneon broj neka mu se ispiser poruka niste uneli broj godina.


//const brojGodinaa=Number(prompt("unesite godine"));
//if(brojGodinaa<12){
//console.log("vi ste decijeg doba");
//}else if(brojGodinaa==12 && brojGodinaa>18 ){
//console.log("maloletni ste");
//}else if(brojGodinaa==18 && brojGodinaa<40){
//console.log("punoletni ste");
//}else if(brojGodinaa>=40){
//console.log("zreli ste");
//}else{
//console.log("niste uneli broj godina");
//}

//Napisati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku

//const brojj=Number(prompt("Unesite neki broj"));
//if(brojj%2===0){
  //  console.log("broj je paran")
//}else if(brojj%2===1){
 //   console.log("broj je neparan")
//}else{
   // console.log("niste uneli broj")
//}

//Napisati program koji,ako je uneti broj veci od 0 stampa poruku broj je pozitivan,
//u suprutnom broj je negativan

//const broj1=Number(prompt("unesi broj"));
//if(broj1>0){
    //console.log("broj je pozitivan");
//}else if(broj1<0){
   // console.log("broj je negativan")
//}else{
 //   console.log("niste uneli");
//}

//const broj2=Number(prompt("unesi broj"))
//switch(broj2){
    //case 12:
    //console.log(broj2);
    //break
    //case 13:
    //console.log(broj2);
    //break
    //case 14:
    //console.log(broj2);
    //break
    //default:
   // console.log("niste uneli broj")
//}

//Napisati broj koji na osnovu dva uneta broja od strane korisnika ispisuje:
//Povrsinu kvadrata ako su uneti brojevi jednaki
//Povrsinu pravougaonika ako su uneti brojevi razliciti.

//const broja=Number(prompt("unesite prvi broj"));
//const brojb=Number(prompt("unesite drugi broj"));
//if( isNaN(broja) || isNaN(brojb)){
  //  console.log("Niste uneli konkretne vrednosti za brojeve");
//}else if(broja===brojb){
  //  console.log("Povrsina kvadrata iznosi:"+broja*broja);
//} else{ (broja!==brojb) 
//    console.log("Povrsina pravougaonika iznosi" + broja*brojb);
//}

//2.zadatak
//Korisnik unosi dva realna broja x i y.Napisati program koji izracunava i stampa
//kolicnik x/y,ako je broj y razlicit od nule,
//a inace ispisuje poruku:Deljenje je nemoguce.
//const brojc=Number(prompt("unesite prvi broj"));
//const brojd=Number(prompt("unesite drugi broj"));
//if(isNaN(brojc) || isNaN(brojd)){
  //  console.log("niste uneli konkretne vrednosti");
//}else if(brojd===0){
    //console.log("deljenje je nemoguce");
//}else{
    //console.log( " Kolicnik brojeva je: " + brojc / brojd );
//}

//napisi sve brojeve od 1 do 9 jedan ispod drugog
for(let l=1; l<=9; l++){
console.log(l)}

//napisi sve parne brojeve od 2 do 9

for (var k=2 ; k<=9; k++){
if (k %2 === 0 ){
console.log(k);
}
}

//neparne od 1 do 14
for(var c=1;c<=14;c++){
    if(c%2!==0){
console.log(c)
    }
}

// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

for(let b=50;b<=100;b++){
    if(b%5===0){
        console.log(b);
    }
}
// 3.
// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
for(let j=6;j<=14;j++){
console.log(j*2)
}
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

//sve parne brojeve od 1 do 6 ispisi
let brojs=1;
while(brojs<=6){
    if(brojs%2==0){
        console.log(brojs);
    }
    brojs++
}

//sve brojeve od 1 do 25
let brojaa=1;
while(brojaa<=25){
    console.log(brojaa);
    brojaa++
}
// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:

let broj11=1;
let broj12=Number(prompt("Unesi neki broj:"));
if(isNaN (broj11)){
    console.log("Niste uneli konkretnu vrednost za broj");
}else{
    while(broj11<=broj12){
    console.log(broj11**2);
    broj11++;
    }
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 5 do tog unetog broja:
let broj9=5;
let broj99=Number(prompt("unesi broj"));
if(isNaN(broj9)){
    console.log("niste uneli vrednost za broj");
}else{
    while(broj9<=broj99){
        console.log(broj9**2);
        broj9++;
    }
}
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
let broj22=Number(prompt("unesite prvi broj"));
let broj23=Number(prompt("unesite drugi broj"));

if(isNaN(broj22) || isNaN(broj23)){
    console.log("Niste uneli konkretne vrednosti za brojeve");
}else if(broj22===broj23){
    console.log("brojevi moraju biti razliciti");
}else if(broj22<broj23){
    while(broj22<=broj23){
    console.log(broj22);
        broj22++
    }
}else if(broj22>broj23){
    while(broj23<=broj22){
        console.log(broj23);
        broj23++
    }
}

let broj5 = Number(prompt("Unesite prvi broj: "));
let broj6 = Number(prompt("Unesite drugi broj: "));

if (isNaN(broj5) || isNaN(broj6)) {
console.log("Niste uneli korektne vrednosti za brojeve.");
} else if (broj5 === broj6) {
console.log("Brojevi moraju biti razliciti.");
} else if (broj5 < broj6) {
while (broj5 <= broj6) {
console.log(broj5);
    broj5++;
}
} else if (broj5 > broj6) {
while (broj6 <= broj5) {
console.log(broj6);
    broj6++;
}
}



