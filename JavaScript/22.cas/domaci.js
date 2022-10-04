//Domaci:
//2.zadatak
//Napraviti funkciju koja izracunava povrsinu kruga gde poluprecnik predstavlja argument funkcije

function povrsinaKruga(r){
    let povrsina=r*r*3.14;
    if(isNaN(r)){
        return `Uneta vrednost mora biti broj.`
    }else{
        return `Povrsina kruga za unetu vrednost poluprecnika iznosi ${povrsina.toFixed()}`
    }
}
console.log(povrsinaKruga(3));



//3.zadatak
//Napraviti funkciju  za pretvaranje radijana u stepene.

function radianToDegree(rad){
    return `Broj stepena za uneti radijan iznosi ${rad*57.297.toFixed()} radijana. `
}
console.log(radianToDegree(5));