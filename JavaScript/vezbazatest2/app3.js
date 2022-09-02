//ispisi sve brojeve od 1 do 10
let brojj1=1;
while(brojj1<=10){
    console.log(brojj1);
    brojj1++;
}

//sve parnee od 25 do 32
let brojj11=25;
while(brojj11<33){
    if(brojj11%2===0){
        console.log(brojj11);
    }
    brojj11++;
}

//sve neparne od 1 do 10
let broj2=1;
while(broj2<=10){
    if(broj2%2!==0){
        console.log(broj2);
    }
    broj2++;
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:

let broj3=1;
let broj4=Number(prompt("unesite broj"));
if(isNaN(broj4)){
    console.log("Niste uneli konkretnu vrednost za broj.")
}else{
    while(broj3<=broj4){
        console.log(broj3**2);
        broj3++;
    }
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
let broj33=Number(prompt("unesite prvi broj"));
let broj44=Number(prompt("unesite drugi broj"));
if(isNaN(broj33) || isNaN(broj44)){
    console.log("niste uneli konkretne vrednosti za brojeve")
}else if(broj33===broj44){
    console.log("brojevi moraju biti razliciti")
}else if(broj33<broj44){
    while(broj33<=broj44){
        console.log(broj33);
        broj33++;
    }
}else if(broj33>broj44){
    while(broj44<=broj33){
        console.log(broj44);
        broj44++;
    }
}
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.
for(let i=99;i<=-99;i--){
    if(i%4===0){
        console.log(i+14);
    }
}




// Domaci zadataci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.


let broj0=1;
while(broj0<=10){
    if(broj0%2===0){
        console.log(broj0);
    }
    broj0++;
}

let broj00=5;
while(broj00<=15){
    console.log(broj00)
    broj00++;
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:
let broj113=1;
let broj112=Number(prompt("unesite broj x"));
if(isNaN(broj112)){
    console.log("niste uneli konkretnu vrednost za broj");
}else if(broj113===broj112){
    console.log("brojevi moraju biti razliciti");
}else{
    while(broj113<=broj112){
    console.log(broj113**2);
    broj113++;
}
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

let broj99=Number(prompt("unesite broj 1:"));
let broj999=Number(prompt("unesite broj 2"));
if(isNaN(broj99) || isNaN(broj999)){
    console.log("niste uneli konkretne vrednosti za brojeve")
}else if(broj99<broj999){
    while(broj99<=broj999){
        console.log(broj99);
        broj99++;
    }
}else if(broj99>broj999){
    while(broj999<=broj99){
        console.log(broj999);
        broj999++;
    }
}

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

for( let k=99;k>=-99;k--){
    if(k%4===0){
        console.log(k + 14);
    }
}
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

let brojj8=0;
let zbirr9=0;

for(let ll=3; ll<18; ll++){
    if( ll%3 === 0){
    brojj8+=1;
    zbirr9+=ll;
    }
}
aritmeticka4=  zbirr9 / brojj8;
console.log("aritmeticka sredina je : " + aritmeticka4 );


let brojBrojeva = 0;
let zbirBrojeva = 0;

for (let i = 3; i < 18; i++) {
    if (i % 3 === 0) {
    brojBrojeva += 1;
    zbirBrojeva += i;
}
}
aritSredina = zbirBrojeva / brojBrojeva;

console.log("Aritmeticka sredina brojeva je: " + aritSredina);

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.
let n1=Number(prompt("unesi broj"));
let sumao= 0;
let brojo=0;
if(isNaN(n1) || n1<1){
    console.log("niste uneli konkretne vrednosti");
}else{
for(let e=1;e<=n1;e++){
    if(e%5===0){
    sumao+=1;
    brojo+=e;
    }
}
}console.log( "broj deljivih brojeva sa 5 od 1 do  "  +  n1  +  " je  " +  brojo  + "  , a suma je   "  +  sumao )
// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, ljegov kvadrat i vrednost broja umanjenu za 25.

let n15=Number(prompt("unesite neki broj od 12 do 16:"));
if(isNaN(n15) || n15<12 || n15>16){
    console.log("niste uneli  konkretnu vrednost");
}else{
    for(o=n15;o>=1;o--){
        console.log(o,o*o,o-25);
    }
}


//Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

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

// 1.
// Korisnik unosi 2 broja:
// Naa osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

broj3=0;
zbir3=0;
let n3=Number(prompt("unesite broj a"));
let n4=Number(prompt("unesite broj b"));

for(let w=n3;w<=n4;w++){
    if(w%5===0){
        broj3+=1;
        zbir3+=w;
arit3=zbir3/broj3
console.log("aritmeticka sredina je:" + arit3);
}
}
if(isNaN(n3) || isNaN(n4)){
    console.log("niste uneli konkretne vrednosti");
}else if(n3===n4){
    console.log("brojevi moraju biti razliciti");
}else if(n3<n4){
    while(n3<=n4){
        n3++;
        console.log(n3);
    }
}else if(n3>n4){
    while(n4<=n3){
            n4++;
            console.log(n4);
        }
    }  