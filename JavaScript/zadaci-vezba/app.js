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

function listpapira() {
    let visinaUMilimetrima= +prompt("Unesite visinu lista papira u milimetrima");
    let sirinaUMilimetrima= +prompt("Unesite sirinu lista papira u milimetrima");
    if(isNaN(visinaUMilimetrima) || isNaN(sirinaUMilimetrima)){
        return `Duzina i sirina moraju biti brojevi.`;
    }else if(visinaUMilimetrima < 0 || visinaUMilimetrima > 300.0){
        return `Visina mora biti izmedju 0-300.0`
    }else if(sirinaUMilimetrima < 0 || sirinaUMilimetrima >300 ){
        return `Sirina  mora biti izmedju 0-300`
    }else{
        let povrsina=(visinaUMilimetrima*sirinaUMilimetrima);
        return `Povrsina lista papira u kvadratnim milimetrima iznosi: ${povrsina}`
    }
}
console.log(listpapira());