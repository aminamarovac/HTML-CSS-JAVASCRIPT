//Napisati program koji,ako je uneti broj veci od 0 stampa poruku broj je pozitivan,
//u suprutnom broj je negativan

//1.zadatak-if naredba
const broja=Number(prompt("unesite neki broj:"));
if(broja>0){
    console.log("broj je pozitivan");
}else if(broja===0){
    console.log("broj je nula");
}else if(broja<0){
    console.log("broj je negativan");
}else{
    console.log("uneto nije broj");
}

//Korisnik unosi broj koji mora biti izmedju 14 i 18(ukljucuju se oba)koristeci switch naredbu
//izvrsiti ispis u konzoli broj koji je korisnik uneo pod zadovoljenim uslovom

//2.zadatak-switch naredba
const brojb=Number(prompt("unesite neki broj"));
switch(brojb){
case 14:
    console.log(brojb);
    break
case 15:
    console.log(brojb);
    break
case 16:
    console.log(brojb);
    break
case 17:
    console.log(brojb);
    break
case 18:
    console.log(brojb);
    break
    default:
    console.log("niste uneli broj iz opsega")
}

// 3.zadatak
//Napisati broj koji na osnovu dva uneta broja od strane korisnika ispisuje:
//Povrsinu kvadrata ako su uneti brojevi jednaki
//Povrsinu pravougaonika ako su uneti brojevi razliciti.

const brojc=Number(prompt("unesite prvi broj:"));
const brojd=Number(prompt("unesite drugi broj:"));
if(isNaN(brojc) || isNaN(brojd)){
    console.log("niste uneli konkretne vrednosti za brojeve");
}else if(brojc===brojd){
    console.log("Povrsina kvadrata na osnovu unetih brojeva je:" + brojc * brojc );
}else{
    console.log("Povrsina pravougaonika na osnovu unetih brojeva je:" + brojc * brojd );
}

//4.zadatak
//Korisnik unosi dva realna broja x i y.Napisati program koji izracunava i stampa
//kolicnik x/y,ako je broj y razlicit od nule,
//a inace ispisuje poruku:Deljenje je nemoguce.

const broj1=Number(prompt("prvi broj"));
const broj2=Number(prompt("drugi broj"));
if(isNaN(broj1) || isNaN(broj2)){
    console.log("niste uneli konkretne vrednosti");
}else if(broj2===0){
    console.log("deljenje nulom je nemoguce");
}else{
    console.log( " kolicnik brojeva je : " + broj1 / broj2 )
}

//forpetlja
//5.zadatak
//ispisati sve brojeve od 1 do 9 jedan ispod drugog
//for(let i=1;i<=9;i++){
   // console.log(i);
//}

//6.zadatak
//napisi sve parne brojeve od 5 do 12
//for(let y=5;y<=12;y++){
   // if(y%2===0){
       // console.log(y);
    //}
//}
//for(let z=5;z<=12;z++){
    //if(z%2===0){
     //   continue
   // }else{
     //   console.log(z);
    //}
//}

// Ispisati brojeve od 1 do 10, osim broja 2 i broja 5.
//for(var u=1;u<=10;u++){
//if(u!==2 && u!==5){
  //  console.log(u);
//}
//}

//for(var p=1;p<=10;p++){
   // if(p!==2 ||p!==5){
    //    continue
   // }else{
      //  console.log(p);
    //}
    //}


// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.

for(var i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}

for(var y=1;y<=20;y++){
    if(y%2===0){
        continue
    }else{
        console.log(y);
    }
}

for (var w=1;w<=20;w+=2){
    console.log(w);
}
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5

for(var t=50;t<=100;t++){
    if(t%5===0 || t%5===5){
        console.log(t);
    }
}


// 3.
// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.

for(var n=6;n<=14;n++){
    console.log(n**2);
}


// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.
for(var suma=10;suma<=20;suma++){
    if(suma%2!==0){
    console.log(suma);
}
}

//while petlja
//1.ispisati sve brojeve od 2 do 6
let brojj=2;
while(brojj<=6){
    console.log(brojj);
    brojj++;
}

//2.sve parne brojeve od 1 do 10
let brojx=1;
while(brojx<=10){
    if(brojx%2===0){
        console.log(brojx);
    }
    brojx++;
}

// 3.Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
let broj5=Number(prompt("unesite broj"));
let broj6=Number(prompt("unesite broj"));
if(isNaN(broj5) || isNaN(broj6)){
    console.log("nema konkretne vrednosti");
}else if(broj5===broj6){
    console.log("brojevi moraju biti razliciti");
}else if(broj5<broj6){
    while(broj5<=broj6){
        console.log(broj5);
        broj5++;
    }
}else if(broj5>broj6) {
    while(broj6<=broj5){
        console.log(broj6);
        broj6++;
    }
}

//od veceg ka manjem
let broj55=Number(prompt("unesite broj"));
let broj66=Number(prompt("unesite broj"));
if(isNaN(broj55) || isNaN(broj66)){
    console.log("nema konkretne vrednosti");
}else if(broj55===broj66){
    console.log("brojevi moraju biti razliciti");
}else if(broj55>broj66){
    while(broj55>=broj66){
        console.log(broj55);
        broj55--;
    }
}else if(broj55<broj66) {
    while(broj66>=broj55){
        console.log(broj66);
        broj66--;
    }
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:
let broj11=1;
let broj111=Number(prompt(" broj"));
if(isNaN(broj11) || isNaN(broj111)){
    console.log("vrednosti bez");
}else{
    while(broj11<=broj111){
        console.log(broj11 ** 2);
        broj11++
    }
}

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.
for(let h=99;h>=-99;h--){
    if(h%4===0){
        console.log(h+14);
    }
}
// Neka se izvrsi iteracija od broja -14 do 44.
// Ispisati razliku broja deljivog sa 6 i broja 14.

for(let g=-14;g<=44;g++){
    if(g%6===0){
        console.log(g);
    }
}

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
let broj=0;
let zbir=0;
for(let d=3;d<=17;d++){
    if(d%3===0){
        broj+=1;
        zbir+=d;
    }
}
aritmeticka=zbir/broj;
console.log( " aritmeticka sredina je : "  +  zbir / broj );

// Izracunati aritmeticku sredinu brojeva koji su parni
// Iteracija se vrsi od 30 do 40.

let broj0=0;
let broj00=0;
for(let r=30;r<=40;r++){
    if(r%2===0){
        broj0+=1;
        broj00+=r;
    }
}
arit=broj00/broj0;
console.log( "aritmeticka sredina je : " + broj00 / broj0 );

//aritmeticka sredina broj zbira kroz broj clanova

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

let nm = Number(prompt("Unesite neki prirodan broj: "));
let suma9 = 0;
let brojDeljivih9 = 0;

if (isNaN(nm) || nm < 1) {
  console.log("Niste uneli prirodan broj.");
} else {
  for (let pp = 1; pp <= nm; pp++) {
    if (pp % 5 === 0) {
      suma9 += pp;
      brojDeljivih9 += 1;
    }
  }

  console.log(
    "Broj deljivih brojeva od 1 do " +
      nm +
      " sa 5 je: " +
      brojDeljivih9 +
      ". " +
      "Suma deljivih brojeva sa 5 je: " +
      suma9
  );
}


// Domaci zadataci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.


//ispisati sve parne brojeve od 1 do 12
let brojj7=1;
while(brojj7=12){
    if(brojj7%2===0){
    console.log(brojj7)
}
}