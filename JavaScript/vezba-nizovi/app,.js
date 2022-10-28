// //push metoda
// const boje=["plava","crvena","zuta","bela"];
// boje.push("zelena");
// console.log(boje);
// boje.push("roza","ljubicasta","siva")
// console.log(boje);
// //dodavanje elementa na poslednjem mestu
// boje[boje.length]="teget"
// console.log(boje);

// let niz=55;
// console.log(niz);

// let niz2=new Array(55); // vraca prazna polja
// console.log(niz2);
// console.log(niz2.length);

// //metoda za prevodjenje niza unutar stringa
// // let bojee=boje.join("$");
// // console.log(bojee);
// let boje3=boje.toString();
// console.log(boje3);
// let boje4=boje.join(" ")
// console.log(boje4)

// function prevodjenje(arr){
//     let string=" "
//     for(element of arr){
//         string += element + " $ "
//     }
//     let duzina=string.length
//     return string.slice(0,duzina-1)
// }
// console.log(prevodjenje(boje));

// const funkcija=(arr2)=>{
//     let recenica=" "
//     for(element of arr2){
//         recenica += element + " 22 "
//     }
//     let duzina=recenica.length;
//     return recenica.substr(0,duzina-1);
// }
// console.log(funkcija(boje));

// //pop
// let borde=boje.pop()
// console.log(borde);
// console.log(boje);

//unshift
// let unshift=boje.unshift("narandzasta")
// console.log(boje);
// console.log(unshift)

// //forEach
// let niz=["Imran","Talib","Ahmed","Abdurahman","Muhamed"];
// // niz.forEach((element)=>console.log(element));

// // for(element of niz){
// //     console.log(element);
// // }

// // for(i=0;i<niz.length;i++){
// //     console.log(niz[i]);
// // }

// // niz.forEach((element,index,array)=>console.log(`${element}:${index} i treci element je zapravo
// // ceo niz: ${array}`));


// let brojevi1=[2,9,92,672,67,30];
// function ceoNiz(arr){
//     noviNiz2=[];
//     for(number of arr){
//         noviNiz2.push(number+2);
//     }
//     return noviNiz2;
// }
// console.log(ceoNiz(brojevi1));


// const viNiz3=brojevi1.map((element)=>element+2);
// console.log(viNiz3);

// const niz55=niz.map((element)=>element+ "_Prezime") ;
// console.log(niz55);

// let brojevi2=[333,2,-3,9,92,672,67,30];
// let pozitivniNaKvadrat=brojevi2.map((element)=>{
//     if(element>0){
//         return element**2;
//     }else{
//         return element;
//     }
// })
// console.log(pozitivniNaKvadrat);



// niz222=[2,-3,5,9,-22,82,2,90,23,14,42,9,22,18];
// function niz9(arr){
//     let niz90=[ ];
//     for(number of arr){
//         if(number > 17){
//     niz90.push(number)
//         }
//     }
//     return niz90.sort((a,b)=>a-b);
// };
// console.log(niz9(niz222));


// niz1=["muhamed","ahmed","abdurahman"];
// niz2=niz1.map((element)=>{
//     return `${element[0].toUpperCase()}${element.slice(1,element.length)}`
// });
// console.log(niz2);

// const numbers2=numbers.map((element)=>element**2);
// console.log(numbers2);

//kvadratni koreni
// numbers3=numbers.map((element)=> + Math.sqrt(element,2).toFixed(2));
// console.log(numbers3);


//kvadratne korene elemenata koji imaju indexe 1,3,5
// numbers55=numbers.map((element,index)=>{
//     if(index===0 || index===3 || index===5){
//         return element**2;
//     }else{
//         return element;
//     }
// }
// )
// console.log(numbers55);


const nizA=[22,34,90,7,29,37,41];
const nizB=nizA.filter((element)=>{
    return element<17
});
console.log(nizB);

const nizC=nizA.filter((element)=>{
    return element>17 && element%2===0
})
console.log(nizC);

const nizD=nizA.filter((element)=>{
    return element%2===0
})
console.log(nizD);

const words=["televizor","daljinski","telefon","voda","ranac","stolica"];
const drugoSlovo=words.filter((element)=>{
    return element[1]==="e";
})
console.log(drugoSlovo);

const nizE=words.filter((element)=>{
    return element.length<=6;
})
console.log(nizE);

const newArr=["Rec","Dve REci",26,true,false,[true,false],39,true];
const newArr2=newArr.filter((element)=>{
    return typeof element==="boolean";
})
console.log(newArr);
console.log(typeof[1,2]);
console.log([1,2,3]instanceof Array);
console.log(Array.isArray([1,2,3]));

const niz7=[91,-14,-5,22,34,55,54,29,12,6,7];
const niz8=niz7.filter((element)=>{
    return element%2===0 && element<=50;
})
console.log(niz8);
console.log(typeof (niz8));




