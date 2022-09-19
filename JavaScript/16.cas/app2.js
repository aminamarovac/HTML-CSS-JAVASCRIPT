//Zbirka 1py.pdf

const  brojFlasa=function(){
    const zapreminaJedne= +prompt ("Unesite zapreminu flase:");
    const ukupnaKolicina=+prompt("Unesite kolicinu limunade:");
    return Math.ceil(ukupnaKolicina/zapreminaJedne);
}
console.log(brojFlasa())

//Domaci:
const pokloni = function () {
    const brojk = prompt ("Unesite broj cokoladica u jednom poklonu: ");
    const brojn = prompt ("Unesite ukupan broj cokoladica: ");
    return Math.floor(brojn / brojk);
}
console.log(pokloni());