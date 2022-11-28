const student=  { 
    name:"Amina",
    lastName:"Besirovic",
    age:18,
    eyeColor:"blue",
    hairColor:"hijabGirl",
    laidC:true,
}

const person=  { 
    name:"Amina",
    lastName:"Besirovic",
    age:18,
    eyeColor:"blue",
    hairColor:"hijabGirl",
    laidC:true,
}
person2=person;
console.log(person2);
// freeze () metoda cini objekat immutabile

student.lastName="Marovac";
// console.log(student);
// Object.freeze(student);
// student.lastName="Besirovic"//ne menja se jer je objecat zamrznut
// console.log(student)
// student.godinaRodjenja=2003;
// console.log(student);


// seal () metoda cini objekat promenljivim,ali nije dozvoljeno dodavanje niti brisanje elemenata.
// Object.seal(student);
// student.godinaRodjenja=2003;
// console.log(student);
student.lastName="Besirovic"
// console.log(student);
// delete student.hairColor;
// console.log(student);


// values () metoda vraca niz vrednosti datog objekta.
const vrednosti=Object.values(student);
console.log(vrednosti);


// keys() metoda vraca niz kljuceva datog objekta.
const svojstvo=Object.keys(student);
console.log(svojstvo);


// entries() metoda vraca niz nizova(svaki podniz je name:value par)

const parovi=Object.entries(student)
console.log(parovi);
const parovi2=parovi.flat();
console.log(parovi2);
//neprimitivni tipovi su referentni


// is() metoda ispituje identicku jednakost.

console.log(Object.is(student,person));
console.log(Object.is(person,person2));





