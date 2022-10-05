//1.zadatak
//Napraviti funkciju koja izracunava obim kruga gde se poluprecnik unosi od strane korisnikaa.

function obimKruga(){
let r=parseInt(prompt("Unesite poluprecnik kruga:"))
let obim=2*r*Math.PI;
if(isNaN(r)){
return `Uneta vrednost mora biti broj.`
}else{
return obim.toFixed();
}
}
console.log(obimKruga());