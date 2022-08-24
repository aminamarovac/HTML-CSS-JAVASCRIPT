//Na osnovu unetih godina ispisati u konzoli sledece:
//ako je broj godina veci od 2:Vi ste decijeg doba.
//ako je broj godina izmedju 14 (ukljucuje se)i 18 (ne ukljucuje)vi ste maloletni
//ako je broj godina izmedju 18(ukljucuje se) i 45(ne ukljucuje)vi ste punoletni.
//ako je broj godina manji ili jednak 50 vi ste zrela osoba.
//ako korisnik nije uneo broj neka mu se ispise poruka niste uneli broj godina.

const broja=Number(prompt("Unesite broj godina:"));
if (broja<10){
    console.log("Vi ste decijeg doba.");
}else if(broja>=14 && broja<18){
    console.log("Vi ste maloletni.");
}else if(broja>=18 && broja<45){
    console.log("Vi ste punoletni.");
}else if(broja<=50){
    console.log("Vi ste zrela osoba.");
}else{
    console.log("Niste uneli broj godina.");
}

//Naapisati program koji,ako je uneti broj veci od 0 stampa poruku broj je pozitivan,
//u suprutnom broj je negativan

const brojb=Number(prompt("Unesite neki broj:"));
if(brojb>0){
    console.log("Broj je pozitivan");
}else if(brojb<0){
    console.log("Broj je negativan");
}else{
    console.log("Uneto nije broj");
}

const brojc=Number(prompt("Unesite neki broj:"));
switch(brojc){
    case brojc>0:
        console.log(brojc);
        break;
    case brojc < 0:
        console.log(brojc);
        break;
}

//Napisaati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku.
const brojd=Number(prompt("Unesite broj:"));
if(brojd%2===0){
    console.log("Broj je paran");
}else if(brojd%2===1){
    console.log("Broj je neparan");
}else{
    console.log("Uneto nije broj");
}
