//2.zadatak Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj".


const secondTask=(arr)=> {
let  duzina=arr.length;
for(let i=0;i<=duzina;i++){
    if(i%2===1){
        arr[i]="paran broj";
    }
}return arr
}
console.log(secondTask([1,2,3,4,5,6,7,8,9,10]));