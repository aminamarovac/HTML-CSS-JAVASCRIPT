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

niz100=["Bela","Crvena","Plava","Zuta"];
console.log(niz100.indexOf("Plava"));

function funkcija1(arr){
    if(arr.indexOf("Crvena")){
        return `Nema crvene boje.`;
    }else{
        return `Crvena boja se nalazi na ${arr.indexOf("Crvena")+1}`;
    }
}
console.log(funkcija1(niz100));

function funkcija11(arr){
    if(arr.lastIndexOf("Crvena")){
        return `Nema crvene boje.`;
    }else{
        return `Crvena boja se nalazi na ${arr.lastIndexOf("Crvena")+1}`;
    }
}
console.log(funkcija11(niz100));

niz111=niz100.includes("narandzasta");
console.log(niz111);

const indexi=niz100.keys()
for(let index of indexi){
    console.log(index);
}

const indexIVrednosti=niz100.entries();
console.log(indexIVrednosti);

for(let index2 of indexIVrednosti){
    console.log(index2);
}

svastara=[["prva","druga","treca"],["deseta","jedanaesta","dvanaesta"],
["dvadeseta","dvadesetiprva"]];
console.log(svastara.flat());
svastara2=svastara.flat().sort();
console.log(svastara2);



