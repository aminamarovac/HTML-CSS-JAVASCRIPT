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