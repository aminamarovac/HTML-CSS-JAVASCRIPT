//1.zadatak
//Napraviti funkciju koja izracunava obim kruga gde se poluprecnik unosi od strane korisnika.

function obimKruga(){
let r=parseInt(prompt("Unesite poluprecnik kruga:"))
let obim=2*r*3.14;
if(isNaN(r)){
return `Uneta vrednost mora biti broj.`
}else{
return obim.toFixed();
}
}
console.log(obimKruga());