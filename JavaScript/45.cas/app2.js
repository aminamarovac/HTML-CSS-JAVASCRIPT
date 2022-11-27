//...spread operator nam sluzi za pravljenje kopije niza ili objekta,
//kao i spajanje vise nizova(objekata).
const niz=[1,2,3,4,5];
const niz1=["sto","stolica","tabla","marker"];
const niz2=[...niz1];
console.log(niz2);
niz2[1]="fotelja";
console.log(niz2);
console.log(niz1);

//Spajanje vise nizova
const niz3=[...niz, ...niz1];
console.log(niz3);
const niz4=[15,...niz2,150];

const obj={
    ime:"Muhamed",
    prezime:"Krkmisevic",
    starost:17,
};
const newObj={
    ...obj,
    bojaKose:"crna",
    kovrdzav:false
}
console.log(newObj)

// Napraviti funkciju koja vraca novi niz gde je svaki
// element objekat sa vrednostima title i budzet

const movies=[
    {title:"Delibal",rating:8,budget:"230M"},
    {title:"Sadece sen",rating:9,budget:"3000M"},
    {title:"Ask tesadufleri sever",rating:10,budget:"350M"},
    {title:"Adimi unutma",rating:9,budget:"130M"},
];
function just2(arr){
    const newArr=arr.map(function(element){
        return {
            title:element.title,
            budget:element.budget,
        }
    })
    return newArr;
}
console.log(just2(movies));