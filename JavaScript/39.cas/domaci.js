//Napraviti objekat student koji ce da ima vrednosti po zelji svojstava sledecih:
//Ime,prezime,broj indeksa,ocene(niz svih ocena koje student ima u trenutnoj godini),
//prosekOcena(metoda koja na osnovu ocena vraca prosek datih ocena).
const student={
    ime:"Amina",
    prezime:"Marovac",
    brojIndexa:"035007",
    ocene:[9,8,10,10,9,10],
prosekOcena:function(){
    const brojOcena=this.ocene.length;
    const suma=this.ocene.reduce((previousValue,currentValue)=>previousValue+currentValue);
    const prosek=suma/brojOcena;
    return `Prosek trenutnih ocena  ${this.ime} ${this.prezime} je ${prosek}`
}
}
console.log(student.prosekOcena());