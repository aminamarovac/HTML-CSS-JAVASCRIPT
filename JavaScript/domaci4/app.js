//1.zadatak
//function karakteri(){
//let recenica = prompt ("Zameniti karaktere");
//let novaRecenica = "";
//let duzina=recenica.length;
//for (let i = 0; i < duzina; i++) {
//if (duzina%2===1 && i===duzina-1) {
   // novaRecenica += recenica[duzina - 1];
//} else if (i%2===0) {
  //  novaRecenica += recenica[i + 1];
//} else if (i % 2 === 1) {
    //novaRecenica += recenica[i - 1];
//}
   // }
   // return novaRecenica;
//}
//console.log(karakteri());

//2.zadatak
const firstByFirst=()=> {
    const A=prompt("Unesite recenicu A:");
    const duzina1=A.length;
    const B=prompt("Unesite recenicu B:");
    const duzina2=B.length;
    let C="";
    //Sintaksa za ternary operator
    //USLOV ? vrednost u slucaju ispunjenja uslova:vrednost u slucaju neispunjenja uslova
    let duzina=duzina1>duzina2? duzina1 : duzina2;
    for(let i=0;i<duzina;i++){
        C+=A[i] + B[i];
        if(i>=duzina1){
            C+=B[i];
        }else if(i>=duzina2){
            C+=A[i];
        }
        else{
            C+=A[i]+B[i];
        }
}
return C;
}
    console.log(firstByFirst());
    






