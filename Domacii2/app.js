//2.zadatak
//Korisnik unosi dva realna broja x i y.Napisati program koji izracunava i stampa
//kolicnik x/y,ako je broj y razlicit od nule,
//a inace ispisuje poruku:Deljenje je nemoguce.


const brojx =Number(prompt("Unesite broj x:"));
const brojy=Number(prompt("Unesite broj y:"));
if (brojy!== 0) {
	console.log(brojx / brojy);
} else if (brojy === 0) {
	console.log("Deljenje je nemoguce");
}


const broj1 =Number(prompt("Unesite broj 3:"));
const broj2=Number(prompt("Unesite broj 4:"));
if(isNaN (broj1) || isNaN(broj2)){
	console.log("Niste uneli korektne vrednosti za brojeve.");
}else if (y===0){
	console.log("Deljenje nulom je nemoguce.");
}else{
	console.log("Kolicnik" + "broja" + broj1 + "i" + "broja" + broj2 + "je:" + broj1 / broj2 );
}

