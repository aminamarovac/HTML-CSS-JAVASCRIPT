//Napraviti funkciju koja nam vraca novi niz koji nema duplikata
//1.nacin
const niz=[12,1,3,2,3,4,6,4];
const eraseDuplicate=function(arr){
    const newArr=[];
for(let i=0;i<arr.length;i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }

}
return newArr;
}
//console.log(eraseDuplicate(niz));

//2.nacin

const eraseDuplicate2=(arr)=>{
    let newArr2=[]
    newArr2=arr.filter((element)=>
    !newArr2.includes(element));
    return newArr2;
}
console.log(eraseDuplicate2(niz));