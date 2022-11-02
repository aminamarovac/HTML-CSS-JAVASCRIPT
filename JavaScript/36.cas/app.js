//1.
// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva

//  dvocifrena broja je 9009 = 91 x 99.

//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.

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



//primer
const niz=["a","b","c","d","e"];
for(let i=1;i<=5;i++){
    for(let j of niz){
        console.log(i+j);
    }
}
