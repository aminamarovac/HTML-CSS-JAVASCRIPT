//JSON - JAVASCRIPT OBJECT NOTATION

// najcesce se koristi prilikom slanja podataka sa servera do web stranice.

//Sintaksa vrlo slicna objektu u JavaScriptu.

//Objekat u JavaScriptu:
// const student={
//     ime:"Amina",
//     prezime:"Marovac",
//     brojIndexa:"035007",
// }

//JSON format:
// const student2={
//     "ime":"Amina",
//     "prezime":"Marovac",
//     "brojIndexa":"035007",
// }

//Objekti su promenljivi!(Mutable)
const person={
JMBG:0812003788993,
firstName:"Amina",
lastName:"Marovac",
}

//Bilo koja promena na x objekat ce takodje promeniti person objekat.
//Ovo vazi za neprimitivne tipove podataka,tjst novoj promenljivoj x
//dodeljujemo referencu na objekat person (a ne vrednost).
// Idemnticko izjednacavanje.
const x=person;
console.log(x);

console.log(x.lastName);
x["lastName"]="Besirovic"
console.log(x);

console.log(person);

//Brisanje svojstva iz objekta se vrsi preko delete keyworda.

//delete person["JMBG"]

delete person.JMBG;
console.log(person);
// delete brise i name i value.

//Vrednost u objektu moze biti :
//neki drugi objekat
//niz
//metoda(funkcija)...

// JSON.stringify() metoda nam sluzi za prevodjenje objekta u JSON,nakon toga JSON formata 
//u string.

const stringObjekta=JSON.stringify(person);
console.log( typeof stringObjekta);

//JSON.parse nam vraca objekat iz poslatog argumenta.
console.log(JSON.parse(stringObjekta));
console.log(typeof JSON.parse(stringObjekta));

//Dodati nova svojstva
//1.trenutnabrzina-0
//2.maximalna-260
//3.povecanjeBrzine:(metoda koja uzima jedan argument)
//smanjenjeBrzine
