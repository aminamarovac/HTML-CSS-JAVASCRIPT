const person={
    firstName:"Imran",
    lastName:"Hazirovic",
};
console.log(person)

//Svi objekti u javaScriptu su povezani sa nekim prototype objektom tako da mozemo reci
//da svaki objekat ima prototype.
//Prototype je objekat koji sadrzi svojstva i metode(properties and methods).


//2 nacina pravljenja sablona za objekte:

//1.Constructor function(konstruktor funkcija)

function User(firstName,lastName,score){
    this.firstName=firstName;
    this.lastName=lastName;
    this.score=score;
};

User.prototype.incrementscore=function(){
    this.score+=1;
}

const imran=new User("Imran","Hazirovic",4);
console.log(imran);

imran.incrementscore();
console.log(imran);

const vahid=new User("Vahid","Gasanin",2);
vahid.incrementscore();
console.log(vahid);

//napraviti constructor funkciju za objekte koji imaju :
//marka,boja,godinaProizvodnje,udaran.
//nakon toga prototype funkciju za sve objekte napravljene preko tog konstruktora,
//koja pretvara udaran iz false u true.

function Automobil(marka,boja,godinaProizvodnje,udaran){
    this.marka=marka;
    this.boja=boja;
    this.godinaProizvodnje=godinaProizvodnje;
    this.udaran===udaran;
    
}
Automobil.prototype.jeUdaran=function(){
    this.udaran=true;
}

const mojAuto= new Automobil("Audi","plava",1998,false);
console.log(mojAuto);
mojAuto.jeUdaran();
console.log(mojAuto);