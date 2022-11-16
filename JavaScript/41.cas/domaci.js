// Domaci zadatak:
// 1. Zadatak
const radnik = {
first_name: "Amina",
last_name : "Marovac",
fullname:function(){
    return `${this.first_name} ${this.last_name}`;
},
adresa:{
ulica:"Dubrovacka",
broj:"140",
grad:"Novi Pazar",
getAdress:function(){
    return `${radnik.first_name}${radnik.last_name}stanuje na adresi
    ${this.ulica}${this.broj}${this.grad}`;

}}};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());
