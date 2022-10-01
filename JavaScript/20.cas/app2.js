function prviZadatak(){
    let satnica=+prompt("Unesite broj satnice");
    let minutnica=+prompt("Unesite minutnicu:")
    if(isNaN(satnica)|| isNaN(minutnica)){
        return `Morate uneti brojeve:`
    }else if(satnica<0 || satnica>23){
        return `Za satnicu morate uneti brojeve izmedju 0 i 23.`
    }else if(minutnica<0 || minutnica>23){
        return `Za minutnicu moraju biti uneti brojevi izmedju 0 i 23.`
    }else if(satnica<9 || satnica>17){
        return `Ne.`
    }else{
        return `Da.`
    }
}
console.log(prviZadatak());
