//napraviti novi niz koji ce sadrzati kvadrate elemenata postojeceg niza

const numbers=[2,5,10,3,4,8];
const numbers2=numbers.map((element)=>element**2);
console.log(numbers2);


//napraviti niz koji sadrze kvadratne korene elemenata postojeceg
const numbers3=[2,18,5,4,91,22];
const numbers4=numbers3.map((element)=>+Math.sqrt(element,2).toFixed(2))
console.log(numbers4);
console.log((typeof(numbers4[2])));

//1.nacin
//3.kvadrirati brojeve koje imaju index 0,3,5
const numbers5=[-8,-7,-12,0,5,23,61];
const numbers6=numbers5.map((element,index)=>{
    if(index===0 || index===3 || index===5){
        return element**2;
    }else{
        return element;
    }
}
)
console.log(numbers6);

//2.nacin
const numbers7=numbers5.map((element,index)=>{
  return   index===0 || index===3 || index===5?element**2:element;
})
console.log(numbers7);