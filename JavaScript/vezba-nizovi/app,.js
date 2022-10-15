//push metoda
const boje=["plava","crvena","zuta","bela"];
boje.push("zelena");
console.log(boje);
boje.push("roza","ljubicasta","siva")
console.log(boje);
//dodavanje elementa na poslednjem mestu
boje[boje.length]="teget"
console.log(boje);

let niz=55;
console.log(niz);

let niz2=new Array(55); // vraca prazna polja
console.log(niz2);
console.log(niz2.length);

//metoda za prevodjenje niza unutar stringa
// let bojee=boje.join("$");
// console.log(bojee);
let boje3=boje.toString();
console.log(boje3);
let boje4=boje.join(" ")
console.log(boje4)

function prevodjenje(arr){
    let string=" "
    for(element of arr){
        string += element + " $ "
    }
    let duzina=string.length
    return string.slice(0,duzina-1)
}
console.log(prevodjenje(boje));

const funkcija=(arr2)=>{
    let recenica=" "
    for(element of arr2){
        recenica += element + " 22 "
    }
    let duzina=recenica.length;
    return recenica.substr(0,duzina-1);
}
console.log(funkcija(boje));

//pop
let borde=boje.pop()
console.log(borde);
console.log(boje);

//unshift
let unshift=boje.unshift("narandzasta")
console.log(boje);
console.log(unshift)

//shift
let izbrisani=boje.shift()
console.log(boje)
console.log(izbrisani)