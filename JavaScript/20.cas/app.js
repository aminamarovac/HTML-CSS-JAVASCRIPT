//Number tip podatka


//JavaScript poznaje samo number tip podatka.
//I brojevi mogu biti zapisani sa ili bez decimalnog zapisa.

//U JavaScriptu aritmeticke operacije nisu uvek 100% tacne.IMATI NA UMU!!!
let a=0.2;
let b=0.1;
let c=a+b;
console.log(c);

//Sto se tice extra velikih ili malih slova oni mogu biti zapisani koriscenjem (exponent) oznake.

let x=123000000;
console.log(x);
let x2=123e6;//-123*1000000
console.log(x2);

let y=123e-6 //-123/1000000
console.log(y);

//Dodavanje brojeva stringovima i obratno
console.log(18+"45");//string
console.log("63"+ 44);//string
console.log("sd"+32);//string
console.log("401s"-46);//nan
console.log(85/"78a");//nan
console.log(47-"27");//4727
console.log("lk"*45);//nan
console.log(typeof(22-"33"));//-number
console.log(76-"67");//9

//NaN- NOT A NUMBER je JavaScript rezervisana rec koja ukazuje da broj zapravo nije legalni broj.


// Ako ispitamo tip Nan rezultat dobijemo number
console.log("lk"*45);//nan
console.log(typeof("lk"*45));//number

//Postoji metoda za proveru da li je neka vrednost nan,odnosno broj koji nije korektan.
//U pitanju isNaN()metoda.

console.log(isNaN(67+"88"));//false

console.log(isNaN(100/"Apple"));//true

//Infinity
//Infinity (-Infinity) je vrednost kada za rezultat dobijemo broj koji je van granica 
//maximalnog broja prema racunanju u JavaScriptu.

console.log(20/0);

console.log(-1/0);

//Heksadecimalni brojevi

//JavaScript interpretira konstante kao heksadecimalne ako im je prefiks 0x

let prom=0xFF;//15*16+15*1
console.log(prom);
//0-0
//10-A,15-F;

//Brojevi kao objekti

let broj=new Number(14);
console.log(broj);

console.log(broj+7);
console.log(typeof broj);

let broj2=10
console.log(broj>broj2);

function radnoVreme(){
    let satnica=+prompt("Unesite prvi broj:");
    let minutnica=+prompt("Unesite drugi broj");
    if(isNaN(satnica) || isNaN(minutnica)){
        return `Morate uneti brojeve.`
    }else if(satnica<0 || satnica>23){
        return `Nije uneta korektna vrednost za satnicu.`
    }else if(minutnica<0 || minutnica>59){
        return `Nije uneta korektna vrednost za minutnicu.`
    }else if(satnica<9 || satnica>16){
        return `Ne`
}else{
    return `Da`
}
}
console.log(radnoVreme());









