// 1.zadatak
//Napisati broj koji na osnovu dva uneta broja od strane korisnika ispisuje:
//Povrsinu kvadrata ako su uneti brojevi jednaki
//Povrsinu pravougaonika ako su uneti brojevi razliciti.

const broj9=Number(prompt("Unesite broj:"));
const brojj8=Number(prompt("Unesite broj:"));
if(broj9===brojj8){
    console.log("Povrsina kvadrata iznosi", broj9 * broj9);
}else if(broj9!==brojj8){
    console.log("Povrsina pravougaonika iznosi", broj9 * brojj8);
}

const broja=Number(prompt("Unesite brojj:"));
const brojb=Number(prompt("Unesite broj:"));
switch (broja,brojb) {
  case broja===brojb:
    console.log(broja,brojb);
    break;
  case broja!==brojb:
    console.log(broja,brojb);
    break;
  default:
        console.log(("Povrsina kvadrata iznosi:",broja*broja ,"Povrsina pravougaonika iznosi:", broja * brojb)); 
}

const broj6=Number(prompt("Unesite broj1:"));
const broj5=Number(prompt("Unesite broj2:"));
if(isNaN(broj6) || isNaN(broj5)) {
    console.log("Niste uneli korektne vrednosti za brojeve");
}else if(broj6===broj5){
    console.log("Povrsina kvadrata na onosvu unetih brojeva je:"+broj6*broj6);
}else{
  console.log(
    "Povrsina pravougaonika na osnovu unetih brojeva je:"+broj6*broj5);
}

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

