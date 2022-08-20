//1.Ispisati brojeve od 1 do 10

let broj=1
while(broj<=10){
    console.log(broj);
    broj++
}

//brojeve od 5 do 17

let brojj=5
while(brojj<=17){
    console.log(brojj);
    brojj++
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 4 do tog unetog broja:
let broj5=4
let broj6=Number(prompt("Unesite neki broj"))
if(isNaN(broj5)){
    console.log("Niste uneli konkretnu vrednost");
} else{
        while(broj5<=broj6){
            console.log(2**broj5);
            broj5++;
        }
    }
    

//neparne brojeve od 11 do 20

let brojjj=11
while(brojjj<=20){
if(brojjj%2!==0){
        console.log(brojjj);
    }
    brojjj++
}

//parne brojeve od 6 do 11

let broja=6
while(broja<=11){
if(broja%2!==0){
        console.log(broja);
    }
    broja++
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:
let broj3 = 1;
let broj4 = Number(prompt("Unesite neki broj: "));
if (isNaN(broj4)) {
console.log("Niste uneli korektnu vrednost za broj.");
} else {
while (broj3 <= broj4) {
    console.log(broj3 ** 2);
    broj3++;
}
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
let broj7=Number(prompt("Unesite prvi broj"));
let broj8=Number(prompt("Unesite drugi broj"));
if (isNaN(broj5) || isNaN(broj6)) {
    console.log("Niste uneli korektne vrednosti za brojeve.");
  } else if (broj7 === broj8) {
    console.log("Brojevi moraju biti razliciti.");
  } else if (broj7 < broj8) {
    while (broj7 <= broj8) {
      console.log(broj7);
      broj7++;
    }
  } else if (broj7 > broj8) {
    while (broj7 <= broj8) {
      console.log(broj8);
      broj8++;
    }
  }

