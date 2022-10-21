// JavaScript Array Iteration//

// Array Iteration metode prolaze kroz svaki element niza.

// 1.forEach()metoda - poziva funkciju za svaki element niza.

const niz=["Imran","Talib","Ahmed","Abdurahman","Muhamed"];

niz.forEach((element)=>console.log(element));//menja for petlju za dati niz.

for(element of niz){
    console.log(element);
};

for(let i=0;i<niz.length;i++){
    console.log(niz[i]);
}

niz.forEach((element,index,array)=> console.log(`${index}:${element} i treci element je zapravo ceo niz:${array}`));

const brojevi=[4,-6,12,31,-21,13,6,202,34.5];


// map() metoda kreira novi niz,tako sto se iterira niz na koji se primenjuje metoda,
// vazno je napomenuti da map metoda ne menja originalni niz.

//Napraviti funkciju koja uzima jedan niz kao argument,a ciji su elementi veci za 2 od prvog niza.
function nizAddTwo(arr1){
    let noviNizz=[];
    for(number of arr1){
    noviNizz.push(number+2);
    }
    return noviNizz;
}
console.log(nizAddTwo(brojevi));

const noviNizzz=brojevi.map((element)=>element+2 );


//svaki element da bude imran_prezime itd.

const niz3=niz.map((element)=>element+"_Prezime");
console.log(niz3);

//Pomocu map metode napraviti novi niz koji vraca sve pozitivne brojeve kvadrirane,a negativne onakve kakvi jesu.
const brojevi2=[-4,-9,2,19,-10,92,90];
const pozitivniNaKvadrat=brojevi2.map((element)=>{
    if(element<0){
        return element**2
    }else{
        return element;
    }
});

console.log(pozitivniNaKvadrat);