//domaci
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