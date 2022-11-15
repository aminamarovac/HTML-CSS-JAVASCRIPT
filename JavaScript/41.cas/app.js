// Napraviti objekat sa sledecim svojstvima:
// 1.firstName,
// 2.lastName,
// 3.language,
// 4.setLanguage - metoda za stvaranje jezika
// 5.setNickName-metoda(svaka osoba ima nadimak sastavljen od prva dva slova imena i prva dva slova prezimena)

const person={
    firstName:"Amina",
    lastName:"Marovac",
    language:"srpski",
    setLanguage:function(p){
        this.language=p;
        return this.language;
    },
    setNickName:function(){
        let prvaDvaSlova=this.firstName[0].toUpperCase()+this.firstName(1).toLowerCasse()
        let drugaDvaSlova=this.lastName[0].toLowerCase()+this.lastName(1).toLowerCase();
        return prvaDvaSlova+drugaDvaSlova;

    }
}
//console.log(person);
console.log(person.setLanguage("turski"));
console.log(person.language);
console.log(person.setNickName());