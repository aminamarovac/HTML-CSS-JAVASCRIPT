//OBJEKTI SU GLAVNA STVAR U JAVASCRIPTU
//Objekti su promenljive koje mogu sadrzati vise vrednosti.
//Oni se zapisuju u name:value paru.Jedan takav par se zove svojstvo.

const car={
    marka:"BMW",
    godiste:2004,
    boja:"plava"
};
console.log(car);//ispisivanje objekta

//Svojstvima objekta mozemo da pristupimo na 2 nacina:
//1.
console.log(car.boja);
//2.
console.log(car["marka"]);

// Objekti takodje mogu sadrzati metode.
// Metode su sadrzane unutar objekta kao definicija funkcije.

const person={
    JMBG:1306005783971,
    ime:"Muhamed",
    prezime:"Krkmisevic",
    mesto:"Lug",
    imeIPrezime:function(){
        return this.ime+ " " +this.prezime;
    }
}
console.log(person.JMBG);
console.log(person.imeIPrezime());
//this predstavlja referencu na neki objekat.
//this nije promenljiva,vec je keyword(neka rezervisana rec) u JavaScriptu.
//Vrednost thisa se ne moze promeniti.


//Napraviti objekat student koji ce da ima vrednosti po zelji svojstava sledecih:
//Ime,prezime,broj indeksa,ocene(niz svih ocena koje student ima u trenutnoj godini),
//prosekOcena(funkcija koja na osnovu ocena vraca prosek datih ocena).