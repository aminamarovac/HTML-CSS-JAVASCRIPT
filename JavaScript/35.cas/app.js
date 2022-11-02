//1.
const brojevi = [12, 20, 13, 27, 18, 43, 2];

const firstTask = (arr) => {
  const sum = arr
    .filter((el) => el % 2 === 0)
    .map((el) => el * 2)
    .reduce((prev, curr) => prev + curr);
  return sum;
};

console.log(firstTask(brojevi));

//u Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona pronaci sumu parnih elemenata
//Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.
[1,2,3,5,8,13];
[1,1,2,3,5,8];

const myFunction2=()=>{
    const niz=[1,2];
    let i=2;
    while(niz[i-2] + niz[i-1]<=4000000){
        niz.push(niz[i-2] + niz[i-1])
        i++;
    }
    const sumaParnih=niz.filter((element)=>element%2===0) .reduce((prev,curr)=>
    prev+curr);
    return sumaParnih;

}
console.log(myFunction2())

// niz[i]=niz[i-2] + niz[i-1]
// niz[0]+niz[1];

//treci je niz od prvog plus niz od drugog



