//TRUTHY AND FALSY VALUES

let isSunny=false;
//isSunny=true;
//if(isSunny === true){
    //console.log("Napolju je suncano vreme.Ponesite naocare.")
//}else if(isSunny === false){
   // console.log("Napolju je oblacno vreme.");
//}
if(isSunny){
    console.log("Napolju je suncano vreme.Ponesite naocare.")
}else if(!isSunny){
    console.log("Napolju je oblacno vreme.");
}

//Sve FALSY vrednosti su:
//1.false
//2.0
//3. -0
//4. 0n
//5. "" -prazan string
//6.null
//7.undefined
//8.NaN

// Ispitati da li je broj koji unosi korisnik Truthy ili Falsy:
function TruthyOrFalsy(){
    const vrednost= +prompt("Unesite svoju vrednost:");
    if(vrednost){
        return "Uneli ste TRUTHY VREDNOST."
    }else {
        return "Uneli ste FALSY vrednost."
    }
}

console.log(TruthyOrFalsy());

