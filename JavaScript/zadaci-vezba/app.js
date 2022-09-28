// function inchToCm(inch){
//     return `Broj inaca za dati broj centimetara iznosi ${inch*2.54}`
// }
// console.log(inchToCm(40));


// function kmtoM(km){
//     return `Broj kilometara za uneti broj metara iznosi ${km*1000}`
// }
// console.log(kmtoM(2));


// function teren(){
//     let sirina=+prompt("Unesite sirinu terena:");
//     let duzina=+prompt("Unesite duzinu terena:");
//     if(isNaN(sirina) || isNaN(duzina)){
//         return `Sirina i duzina moraju biti brojevi.`
//     }else if(sirina<1 || sirina>100){
//         return `Sirina moraju biti brojevi izmedju 1 i 100.`
//     }else if(duzina<1 || duzina>100){
//         return `Duzina moraju biti brojevi izmedju 1 i 100.`
//     }else{
//         let ukupno=2*sirina+2*duzina
//     }return `Ukupno metara koje sportista predje je ${ukupno}`
// }
// console.log(teren());


// function listPapira() {
//     let visinaUMilimetrima= +prompt("Unesite visinu lista papira u milimetrima");
//     let sirinaUMilimetrima= +prompt("Unesite sirinu lista papira u milimetrima");
//     if(isNaN(visinaUMilimetrima) || isNaN(sirinaUMilimetrima)){
//         return `Duzina i sirina moraju biti brojevi.`;
//     }else if(visinaUMilimetrima < 0 || visinaUMilimetrima > 300.0){
//         return `Visina mora biti izmedju 0-300.0`
//     }else if(sirinaUMilimetrima < 0 || sirinaUMilimetrima >300 ){
//         return `Sirina  mora biti izmedju 0-300`
//     }else{
//         let povrsina=(visinaUMilimetrima*sirinaUMilimetrima);
//         return `Povrsina lista papira u kvadratnim milimetrima iznosi: ${povrsina}`
//     }
// }
// console.log(listPapira())

// function prviZadatak(){
//     let recenica=prompt("Unesite neku recenicu:");
//     let duzina=recenica.length;
//     let brojac=0;
//     for(i=0;i<duzina;i++){
//         if(recenica[i]==="m" || recenica[i]==="M"){
//             brojac ++
//         }
//     }return `Uneta recenica sadrzi ${brojac} slova.`
// }
// console.log(prviZadatak());


// function drugiZadatak(){
//     let recenica=prompt("Unesite recenicu:");
//     let duzina=recenica.length;
//     let brojac=0;
//     for(i=0;i<duzina;i++){
//         if(recenica[i]===recenica[i].toLowerCase() && recenica[i]!==" "){
//             brojac++
//         }
//     }
//     return `U datoj recenici ima ${brojac} malih slova.`
// }
// console.log(drugiZadatak());


// function treciZadatak(){
//     let recenica=prompt("Unesite recenicu:");
//     let duzina=recenica.length;
//     malaSlova=0;
//     velikaSlova=0;
//     for(i=0;i<duzina;i++){
//         if(recenica[i]===recenica[i].toLowerCase() && recenica[i]!== " "){
//             malaSlova+=1;
//         }else if(recenica[i]===recenica[i].toUpperCase() && recenica[i]!== " "){
//             velikaSlova +=1;
//         }
//     }if(malaSlova<velikaSlova){
//         return `U datoj recenici ima vise velikih slova ${velikaSlova}, a malih ima ${malaSlova}`
//     }else if(malaSlova>velikaSlova){
//         return `U datoj recenici ima vise malih slova,ima ih ${malaSlova},a velikih ima ${velikaSlova}`
//     }
// }
// console.log(treciZadatak());


// function cetvrtiZadatak(){
//     let recenica=prompt("Unesite recenicu:");
//     let lastSpace=recenica.lastIndexOf(" ")
//     return lastSpace;
// }
// console.log(cetvrtiZadatak())


// function duzinaPrveReci(){
//     let recenica=prompt("Unesite recenicu:");
//     let recenica1=""
//     let lastSpace=recenica.lastIndexOf(" ");
//     for(let i=0;i<lastSpace;i++){
//         recenica1+=recenica[i]
//     }if(lastSpace===-1){
//         return `Uneli ste samo jednu rec.`
//     }
//     let duzinaPrveReci=recenica1.length;
//     return `Duzina prve reci iznosi ${duzinaPrveReci}`
// }
// console.log(duzinaPrveReci());


// function petiZadatak(){
//     let A=prompt("Unesite prvu recenicu");
//     let B=prompt("Unesite drugu recenicu");
//     let prvaRec="";
//     let drugaRec=""
//     let prviSpace=A.indexOf(" ");
//     let drugiSpace=B.lastIndexOf(" ");
//     for(let i=0;i<prviSpace;i++){
//         prvaRec+=A[i];
//     }for(let i=drugiSpace+1;i<B.length;i++){
//         drugaRec+=B[i];
//     }return prvaRec.concat(" ",drugaRec)
// }
// console.log(petiZadatak());


// function sestiZadatak(n){
//     let recenica=prompt("Unesite recenicu:");
//     prvihN="";
//     for(let i=0;i<n;i++){
//     prvihN+=recenica[i];
//     }if(prvihN<recenica.length){
//         return recenica;
//     }else{
//         return prvihN;
//     }
// }
// console.log(sestiZadatak(5));


// function malaSlova(){
//     let recenica=prompt("Unesite recenicu");
//     let malaSlova=recenica.toLowerCase();
//     return malaSlova;
// }
// console.log(malaSlova())


// function isPalindrom(){
//     let recenica=prompt("Unesite recenicu:");
//     let duzina=recenica.length;
//     obrnutaRecenica="";
//     for(let i=duzina-1;i>=0;i--){
//         obrnutaRecenica+=recenica[i];
//     }
// if(obrnutaRecenica===recenica[i]){
//     return true;
// }else{
//     return false;
// }
// }
// console.log(isPalindrom())


// function karakteri(){
//     let recenica=prompt("Zmeniti karaktere:");
//     let duzina=recenica.length;
//     let novaRecenica="";
//     for(i=0;i<duzina;i++){
//     }if(duzina%2===1 && i===duzina-1){
//         novaRecenica+=recenica[duzina-1]
//     }else if(i%2===0){
//         novaRecenica+=recenica[i+1];
//     }else if(i%2===1){
//         novaRecenica+recenica[i-1]
//     }
//     return novaRecenica;
// }
// console.log(karakteri());


function sestiZadatak(){
    let A=prompt("Unesite prvu recenicu:");
    let duzina1=A.length;
    let B=prompt("Unesite drugu recenicu:");
    let duzina2=B.length;
    let C=""
    let duzina=duzina1>duzina2?duzina1:duzina2;
    for(i=0;i<duzina;i++){
        C=A[i] + B[i];
    }if(i>=duzina1){
        C+=B[i]
    }else if(i>=duzina2){
        C+=A[i]
    }else{
        C+=A[i]+B[i]
    }
    return C
}
console.log(sestiZadatak());