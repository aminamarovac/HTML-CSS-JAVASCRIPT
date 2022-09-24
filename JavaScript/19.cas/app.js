//1.zadatak
//pozicija poslednjeg razmaka u stringu
//function prviZadatak(){
    //let recenica= prompt("Unesite neku recenicu:")
    //let lastSpace=recenica.lastIndexOf(" ");
    //return lastSpace;
//}
//console.log(prviZadatak());


//2.zadatak:
//ispisi duzinu prve unete reci;
//function duzinaPrve(){
   // let recenica= prompt ("Unesite neku recenicu:");
   // let recenica1= "";
    //let prviSpace=recenica.indexOf(" ");

  //  for(let i=0;i<prviSpace;i++){
   // recenica1+=recenica[i];
//}
//if(prviSpace===-1){
   // return `Uneli ste samo jednu rec.`;
//}
//let duzinaPrveReci=recenica1.length;
//return `Duzina prve reci je ${duzinaPrveReci}.`
//};
//console.log(duzinaPrve());



//3.zadatak
//Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci(odvojenih razmakom)...
//function thirdWord(){
   // let A=prompt("Unesite prvu recenicu:")
   // let B=prompt("Unesite drugu recenicu:");
    //let prvaRec="";
    //let drugaRec="";
    //let prviSpace=A.indexOf(" ");
    //let poslednjiSpace=B.lastIndexOf(" ");
    //for(let i=0;i<prviSpace;i++){
        //prvaRec+=A[i];
    //}
    //for(let i=poslednjiSpace+1;i<B.length;i++);{
   // drugaRec+=B[i];
//}
//return prvaRec.concat(" ",drugaRec);
//}
//console.log(thirdWord());



//4.zadatak:
function tenth(n){
    let recenica=prompt("Unesite neku recenicu:");
    prvihN="";
    for(let i=0;i<n;i++){
        prvihN+=recenica[i];
    }
if(n>recenica.length){
    return recenica;
}
else{
    return prvihN;
}
}
console.log(tenth(14));

