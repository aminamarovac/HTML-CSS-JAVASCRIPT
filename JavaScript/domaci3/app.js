// 1.zadatak
//Napisati broj koji na osnovu dva uneta broja od strane korisnika ispisuje:
//Povrsinu kvadrata ako su uneti brojevi jednaki
//Povrsinu pravougaonika ako su uneti brojevi razliciti.

const broj=Number(prompt("Unesite broj:"));
const brojj=Number(prompt("Unesite broj:"));
if(broj===brojj){
    console.log("Povrsina kvadrata iznosi", broj * broj);
}else if(broj!==brojj){
    console.log("Povrsina pravougaonika iznosi", broj * brojj);
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

const broj1=Number(prompt("Unesite broj1:"));
const broj2=Number(prompt("Unesite broj2:"));
if(isNaN(broj1) || isNaN(broj2)) {
    console.log("Niste uneli korektne vrednosti za brojeve");
}else if(broj1===broj2){
    console.log("Povrsina kvadrata na onosvu unetih brojeva je:"+broj1*broj2);
}else{
  console.log(
    "Povrsina pravougaonika na osnovu unetih brojeva je:"+broj1*broj2);
}