//Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da
// li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, 
//funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu
// dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.
let array1=["kajsija","jabuka","visnja","kupina","kruska","maline","tresnje","mango","ananas","bostan","narandza"];
function myFunction2(arr){
   array2=" "
if(arr[0]==="kajsija"){
   array2+=arr.indexOf(0) + 11 + array1.sort()+arr.lastIndexOf("visnja")+0;
   return array2;
}else if
   (arr.indexOf("jagoda")){
      return`Jagoda se nalazi na ${arr.indexOf("jagoda")}.mestu.`
}else{
   return array2.sort();
}
}
console.log(myFunction2(array1));
