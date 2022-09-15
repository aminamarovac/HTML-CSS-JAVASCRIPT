//HOISTING

a=5
console.log(a);

//let a; - Deklerisanje nakon inicijalizacije nije dozvoljeno putem let.
//const a; -nije dozvoljeno ni putem const;
var a; //deklerisanje je dozvoljeno
console.log(myFunc())

//Hoisting se nece izvrsiti
//const myFunc=function(){
   // let a=10;
    //return a;
//}

//Izvrsice se
function myFunc(){
    let a=10;
    return a;
};

//Hoisting se nece izvrsiti kod Arrowfunc.
const myArrow=()=>{
    let a=10;
    return a;
};

//Dobra praksa je uvek prvo deklerisati promenljivu,ili neku funkciju,pa je tek nakon toga koristiti.
//Sve kako bismo izbegli eventualne greske u kodu.
