//FUNKCIJE

//DRY(Don't repeat yourself)

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


function povrsina(prvaVrednost,drugaVrednost){
    if(prvaVrednost===drugaVrednost){
    return "Povrsina kvadrata iznosi:" + prvaVrednost*drugaVrednost;
    }else{
        return "Povrsina pravougaonika iznosi:" + prvaVrednost*drugaVrednost;
    }
}
console.log(povrsina(15,2));
console.log(povrsina(4,4));


//2.nacin
const myfunction = function() {
    //radnja koja se obavlja
}

//Napraviti funkciju koja vraca zbir kvadrata dva broja.
//Druga vrednost je po defaultu 1.

//Prvi nacin:

const mySecondFunction = function (prva,druga) {
    if (druga===undefined){
        return prva**2 + 1
    }else{
        return prva**2 + druga**2;
    }
}
console.log(mySecondFunction(5));
console.log(mySecondFunction(5,4));

//Drugi nacin:

const mySecondFunction2 = function(prva,druga=1){
    return prva**2+druga**2;
}
console.log(mySecondFunction2(3));
console.log(mySecondFunction2(3,3));

//Ako neka funkcija ima defaultnu vrednost,ta vrednost se staVLJA NA POSLEDNJEM MESTU.
//Ako ih je vise,na poslednjim pozicijama.
//Ne sme se desiti slucaj da prva vrednost bude defaultna,a nakon nje ona koja nema defaultnu vrednost.


//arrow function:

const arrowFunc= () => {
    //kod za izvrsavanje
};


//Napraviti funkciju koja na osnovu unetog argumenta vraca jedno od 4 stanja:
//Ako je unet pozitivan broj ispisuje poruku:"ARGUMENT JE POZITIVAN BROJ".
//Ako je unet negativan broj ispisuje poruku:"ARGUMENT JE NEGATIVAN BROJ".
//Ako nije unet broj,ispisuje poruku:"ARGUMENT NIJE BROJ".


const arrowFunc1= (brojj) => {
    if(typeof brojj!=="number"){
        return "ARGUMENT NIJE BROJ."
    }  else if(brojj>0){
        return "ARGUMENT JE POZITIVAN BROJ."
    }else if(brojj<0){
        return "ARGUMENT JE NEGATIVAN BROJ."
    }else if(brojj===0){
        return "ARGUMENT JE NULA."
    }

}
console.log(arrowFunc1(5))
console.log(arrowFunc1(-2))
console.log(arrowFunc1(0));
console.log(arrowFunc1("2"));




