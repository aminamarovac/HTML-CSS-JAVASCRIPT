 // JavaScript Sets //
// Setovi predstavljaju kolekciju unikatnih vrednosti.
// Svaka se vrednost pojavljuje samo jednom.

// Kreiranje seta:
const letters=new Set(["a","b","c","d","a"]); //nema drugog a
console.log(letters);

// Metode:
//add() dodaje novi element u setu
letters.add("m");
console.log(letters);

//delete() brise specifican element u setu.
letters.delete("m");
console.log(letters);

//has() vraca boolean (da li se neka vrednost nalazi u setu)
console.log(letters.has("m"));

//forEach() poziva callback funkciju za svaki element

letters.forEach((element)=>console.log(element));

//values() 
console.log(letters.values());

//Napraviti funkciju koja iz datog niza vraca novi niz,brisuci duplikate originalnog.
//(koriscenjem setova)

function brisiDuplikate(arr){
    let set=new Set(arr);
    return [... set];
}
console.log(brisiDuplikate([1,1,1,1,5,8,4,4,4,3,2]));

