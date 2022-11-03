// //vezba
// //reduceRight
const niz=[1,8,3,2,9];
// const suma=niz.reduceRight((prev,curr)=>prev+curr);
// console.log(suma);


// //every
// isEvery=niz.every((element)=>element>=18);
// console.log(isEvery);

// const suma2=niz.reduce((prev,curr)=>prev+curr);
// console.log(suma2);

const isPalindrom=(broj)=>{
    const strBroja=broj.toString();
    let obrnutiStr="";
    for(let i=strBroja.length-1;i>=0;i-- ){
        obrnutiStr+=strBroja[i];
    }
    const obrnutiBroj=+obrnutiStr;
    if(obrnutiBroj===broj){
        return true;
    }else{
        return false;
    }
};
const highestPolindrom3=()=>{
    let palindroms=[];
for(let i=100;i<=999;i++){
    for(let j=100;j<=999;j++){
        if(isPalindrom(i*j) && !palindroms.includes(i*j)){
            palindroms.push(i*j);
        }

    }
}
palindroms.sort((a,b)=> b-a );
return palindroms[0];
};
console.log(highestPolindrom3());




