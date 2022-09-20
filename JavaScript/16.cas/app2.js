//Zbirka 1py.pdf

const  brojFlasa=function(){
    const zapreminaJedne= +prompt ("Unesite zapreminu flase:");
    const ukupnaKolicina=+prompt("Unesite kolicinu limunade:");
    return Math.ceil(ukupnaKolicina/zapreminaJedne);
}
console.log(brojFlasa())

//Domaci:
const pokloni = function () {
    const brojk = +prompt ("Unesite broj cokoladica u jednom poklonu: ");
    const brojn = +prompt ("Unesite ukupan broj cokoladica: ");
    if(isNaN(brojk)|| isNaN(brojn)){
    return "Niste uneli broj cokoladica.";
}else if(brojk<1 || brojk>20){
    return "Broj cokoladica prema jednom poklonu mora biti izmedju 1 i 20.";
}else if(brojn<0 || brojn>1000){
    return "Ukupan broj cokoladica mora biti izmedju 1 i 1000.";
}else{
    return Math.floor(brojn/brojk);
}
}
console.log(pokloni());
