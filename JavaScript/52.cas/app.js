console.log(myFunction(1,3));
function myFunction(a,b){
    return a*b
}
//izvrsice se 


//  var myFuc=function (a,b){
//     return a*b
// }
//ne vazi hoisting za promenljive koje su funkcije.(definisane na bilo koji nacin)

// function myFunc2(){
//     let broj=4;
//     let predmet="stolice";
//     return `U prostoru imamo ${broj} ${predmet}.`
// }
// console.log(myFunc2());


// Poznata je cinjenica da kada se izvrsi funkcija,sve njene
//lokalne promenljive pokupi "garbage" kolektor i one prestanu da 
//postoje u memoriji.
//To nije slucaj ako postoji funkcija koja zahteva
//koriscenje promenljivih iz domena druge funkcije.
// To se najcesce postize ugradjivanjem funkcije unutar neke druge funkcije.

function myFunc2(){
    let broj=4;
    let predmet="stolice";
    function mySecondFunc(arg){
        console.log( arg+broj);
    }
    mySecondFunc(10);
    return `To je bio primer closure u JavaScriptu.`
}
console.log(myFunc2());

// Closure je funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije.

function mojaFunkcija(){
    console.log("Pocetak glavne funkcije.");
    function mojaSporednaFunkcija(){
    console.log("Ovo je radnja sporedne funkcije.")
    return 5;
    }
return mojaSporednaFunkcija;
}
console.log(mojaFunkcija()());
