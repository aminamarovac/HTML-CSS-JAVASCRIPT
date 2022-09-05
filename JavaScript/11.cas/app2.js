//FUNKCIJE

//FUNKCIJE predstavljaju blok koda koji se izvrsava samo prilikom pozivanja.

//Nacini zapisivanja funkcije:
//Koriscenjem keyword (rezervisane reci) function.


function nazivFunkcije(){
return 5
}
console.log(nazivFunkcije());

//2.primer
function zbirTriIPet(){
    return 3+5;
}
console.log(zbirTriIPet());

//3.primer
//Prilikom definisanja funkcije u zagradu stavljamo (prema potrebi) parametre,koje funkcija koristi unutar sebe. 
function zbirDvaBroja(prviBroj,drugiBroj){
return prviBroj+drugiBroj;
}
//Prilikom pozivanja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava.
console.log(zbirDvaBroja(5,14));
