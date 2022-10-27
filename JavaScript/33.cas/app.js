// Napraviti novi niz sa brojevima vecim od 17 i iteraciju izvrsiti kroz for petlju
const niz1=[4,7,25,32,42,14,29,19];
const niz2=[];
for(let number of niz1){
    if(number > 17){
        niz2.push(number);
    }

}

console.log(niz2);

// Filter metoda kreira novi niz sa  onim elementima koji su prosli test.
// Preko filter metode dobijamo novi niz cija je maximalna duzina jednaka duzini niza na koji se primenila metoda,
// a minimalna duzina je 0.
//  Odradimo prethodni zadatak na drugi nacin:
// Ono sto data funkcija vraca predstavlja uslov na osnovu kojeg se element dodaje u novi niz
// ili ne dodaje.
const niz3=niz1.filter((element)=> element>17);
console.log(niz3);

//Napraviti novi niz koji vraca novi sa parnim
const niz5=niz1.filter((element)=>element%2===0
)
console.log(niz5);

//Vraca novi sa elementima gde je drugo slovo e

const words=["televizor","daljinski","telefon","voda","ranac","stolica"];
const drugoSlovo=words.filter((element)=>{
    return element[1]==="e";
}
)
console.log(drugoSlovo);

// primeniti filter na niz i novi vraca elemente cija je duzina <=6
const duzina6=words.filter((element)=>{
    return element.length <=6 ;
})
console.log(duzina6);

//vraca niz sa elementima ciji je tip boolean
const newArr=["Rec","Dve REci",26,true,false,[true,false],39,true];
const newArr2=newArr.filter((element)=> typeof element=== "boolean"
);
console.log(newArr2);
//Provera da li je promenljiva niz
console.log(typeof [1,2,3]);
console.log([1,2,3] instanceof Array);
console.log(Array.isArray([1,2,3]));

//niz koji se sastoji iz parnih brojeva,
// manjih ili jednakih 50 postojeceg niza
const niz7=[91,-14,-5,22,34,55,54,29,12,6,7];
const niz8=niz7.filter((element)=>{
return element%2===0 && element<=50
}
)
console.log(niz8);

