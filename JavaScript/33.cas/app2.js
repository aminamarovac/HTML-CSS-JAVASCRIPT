// Domaci zadaci:
// 1. Zadatak
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti
//  novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

let niz1 = [-9, -78, 4, 17, -22, -5, 7, 6, 10, 18];
function function1() {
const niz2 = niz1.map((element) => {
if (element > 2 && element < 8) {
		return (element * 4) / 2;
} else if (element > 2) {
		return element * 7;
} else {
		return element;
		}
	}
   )
   const filtriran = niz2.filter((element) => {
	   return element < 10;
	}
   )
	   return filtriran;
}
console.log(function1());

// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];



