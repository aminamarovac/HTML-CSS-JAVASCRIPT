//call(),apply(),bind() su funkcije koje koristimo u slucajevima kada zelimo da se neka f-ja
//primeni na objekat koji je izvan date funkcije.
//Predjimo svaku od njih kroz sledeci primer:

const person={
    firstName:"Muhamed",
    lastName:"Krkmisevic",
    dateOfBirth:new Date(2005,5,13),
    fullName:function(){
        return `${this.firstName}${this.lastName}`;
    }
};
console.log(person.fullName);

const person2={
    firstName:"Muusa",
    lastName:"Zecirovic",
    dateOfBirth:new Date(2006,8,12),
}
console.log(person2);

//Sintaksa za koriscenje ovih funkcija je
//Prvo ide pozivanje funkcije,pa onda kao argumenti date funkcije
//idu:
//1.Objekat za koji zelimo da se primeni data metoda;
//2.Eventualne argumente funkcije (ako funkcija po definiciji zahteva).

console.log(person.fullName.call(person2));

const restoran={
    hrana:"pizza",
    gosti:"zadovoljni",
    lokacija:"Uzi centar grada"
}
function poruka (grad,drzava){
    return `Vecerasnji specijalitet naseg restorana je ${this.hrana}.I sa
    ponosom mozemo reci da su gosti ${this.gosti}.Nas restoran se nalazi u 
    ${this.lokacija} u ${grad},${drzava}.`;
}

const restoran2={
    hrana:"supa",
    gosti:"zgrozeni",
    lokacija:"Mur",
}

console.log(poruka.call(restoran,"Beograd","Srbija"));
console.log(poruka.call(restoran2,"Novi Pazar","Srbija"));

//apply() je vrlo slicno,s tim sto se argumenti funkcije stavljaju unutar niza.

console.log(poruka.apply(restoran,["Novi Pazar","Srbija"]));

//bind() funkcionise na nacin da prvo dodelimo datu funkciju sa objektom
//nekoj promenljivoj i onda tu promenljivu(funkciju) pozovemo sa potrebnim argumentima.

const bindFunction=poruka.bind(restoran2);
console.log(bindFunction("Sarajevo","BIH"));

