let random=Math.floor(Math.random()*51)+50;
console.log(random);

//JavaScript Date Objects//


//Datumi se prave uz sintaksu:
new Date()

//Postoje 4 nacina da dobijemo neki datum:

//1.new Date() - vraca nam trenutno vreme

let datum=new Date();
console.log(datum);

//2.new Date(godina,"mesec",dan,sat,minut,sekunda,milisekunda)
// JavaScript mesece racuna od 0 do 11.
// Ovaj nacin je validan ako imamo bar dva argumenta,a maximum 7.    

let datum2=new Date(2003,11,8,11,20,12,44);
console.log(datum2);

let datum3=new Date(2003,11);
console.log(datum3);

//3.new Date(milisekunde)
//Pocetni datum:1970-01-01

let datum4=new Date(54e11); //dodaje 55e11 vrednost na taj datum
console.log(datum4);

//4.New Date(date string)

let datum5=new Date("2015-03-25");
console.log(datum5);

let datum6=new Date(2003,11,8,11,20,12,44,47);
console.log(datum6);

//Ako prvom argumentu (godina) stavimo samo 2 cifre,JavaScript to posmatra kao 
//prosli vek,te automatski tim dvema ciframa prethodi 19...

let datum7=new Date(20,7,21);
console.log(datum7);

//JavaScript skladisti datume kao broj milisekundi.

//Prikazivanje datuma:

//Postoji nekoliko metoda za prikazivanje datuma.Sintaksa je:datum.method()

//1.datum.toString()

let datum8=new Date(20,7,21);
console.log(datum8.toString());

//2.datum.toUTCString()

console.log(datum8.toUTCString());

//3.datum.toDateString()

console.log(datum8.toDateString());

//4.datum.toISOString()

console.log(datum8.toISOString());

//5.Date.parse(datum) - vraca razliku u milisekundama izmedju datuma koji smo stavili kao argument funkcije i 
// 01-01-1970

console.log(Date.parse(1975,0,1));

// Postoje metode za dobijanje parametara nekog datuma,
//kao i metode za menjanje parametra nekog datuma.

//Get Date metode:

//1.getFullYear()

let trenutno=new Date();
console.log(trenutno.getFullYear());

//2.getMonth()

//3.getDate()

//4.getHours()

//5.getMinutes()

//6.getSeconds()

//7.getMilseconds()

//8.getTime() - vraca broj milisekundi izmedju 01-01-1980 i datuma koji predstavlja argument funkcije.
console.log(trenutno.getTime());
console.log(Date.parse(trenutno));

//9.getDay() - vraca dan u nedelji 0-6.
let nedelja=new Date(2022,10,9,21,45,45);
console.log(nedelja.getDate());

//Date.now() 
console.log(Date.now()); // vraca broj milisekundi izmedju 01-01-1970 i trenutnog vremena.

//Set Date metode

//1.setFullYear()
trenutno=new Date()
let setYear=trenutno.setFullYear(2017);
console.log(trenutno);

//2.setMonth()

//3.setDate()

//4.setHours()

//5.setMinutes()

//6.setSeconds()

//7.setMiliSeconds()

let setSeconds=trenutno.setSeconds(12)
console.log(trenutno);




