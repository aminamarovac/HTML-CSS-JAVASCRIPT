//reduceRight()-isto kao reduce metoda,samo sto ucitavanje niza ide s desne strane.

const niz=[1,2,3,4,5];
const suma=niz.reduceRight((prev,curr)=>prev+curr);
console.log(suma);

//every()metoda ispituje da li je svaki element niza prosao test
//Rezultat je boolean,odnosno true ili false.

const godine=[15,14,18,18,18,16,19,17,19];
const isEveryAdult=godine.every((element)=>element>=18);
console.log(isEveryAdult);
const adultArr=godine.filter((element)=>element>=18);
console.log(adultArr);
const isEveryAdult2=godine.every((element)=>element>=18);
console.log(isEveryAdult2);


//some() metoda ispituje da li bar jedan element niza zadovoljava odredjeni uslov
//takodje vraca boolean

const isSomebodyAdult=godine.some(function (element){
    return element>=18;
})
console.log(isSomebodyAdult);

//find() metoda nam vraca prvi element koji ispunjava odredjeni uslov.
//Ako nijedan element ne ispunjava uslov metoda nam vraca undefind.

const grupa=["Imran","Muhamed","Ahmed","Muusa","Amina","Harun","Abdurahman","Talib"];
const firstElementPassedCondition=grupa.find((element)=>element.length>8);
console.log(firstElementPassedCondition);

//findIndex() metoda nam vraca index onog elementa koji je prvi prosao uslov zadat unutar f-je.
//ako nijedan element ne ispunjava uslov,metoda nam vraca -1.
const firstIndexPassedCondition=grupa.findIndex((element)=>element.length>8);
console.log(firstIndexPassedCondition);

//Array.from() metoda nam vraca niz iz bilo kojeg objekta koji je iterirajuci
//(koji ima length svojstvo)
//Ova metoda nam vraca niz gde je svaki argument jedan karakter stringa koji
//pretvaramo u niz.
const recenica="Ovo mora biti niz"
const mustBeArray=Array.from(recenica);
console.log(mustBeArray);




