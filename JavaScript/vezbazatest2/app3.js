//ispisi sve brojeve od 1 do 10
let brojj1=1;
while(brojj1<=10){
    console.log(brojj1);
    brojj1++;
}

//sve parne od 25 do 32
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

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
broj=0;
zbir=0;
for(let a=3;a<=17;a++){
    if(a%3===0){
        broj+=1;
        zbir+=a;
    }
}
aritmeticka=broj/zbir;
console.log( "arimeticka sredina je : " +  aritmeticka);


// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.
let num=Number(prompt("unesite broj"));
let suma=0;
let broj=0;
for(ii=1;ii<=n;ii++){
    if(ii%5===0){
        
    }
}
