//MATH METODE//

// Nesto drugacija sintaksa u odnosu na klasicne metode:
// Meth.method(number)

// Postoje 4 metode pomocu kojih mozemo da zaokruzimo broj(ucinimo ga celim).

// 1. Math.round() - zaokruzuje broj najblizem celom broju.

console.log(Math.round(4.41));
console.log(Math.round(4.74));

// 2. Math.ceil() - zaokruzuje broj na sledeci ceo broj

console.log(Math.ceil(4.74));
console.log(Math.ceil(4.04));

// 3. Math.floor() - zaokruzuje broj na prethodni ceo broj.

console.log(Math.floor(4.74));
console.log(Math.floor(4.04));
console.log(Math.floor(-5.8));

// 4. Math.trunc() - zaokruzuje broj tako sto odstrani decimalni zapis.

console.log(Math.trunc(4.74));
console.log(Math.trunc(4.04));
console.log(Math.trunc(-5.8));

// 5. Math.sign() - metoda moze vratiti 3 vrednosti:
// vraca -1 ako je argument metode negativan broj
// 0 ako je argument metode 0
// 1 ako je argument metode pozitivan broj

console.log(Math.sign(-89));

// 6. Math.pow() - vraca prvi argument stepenovan drugim argument.

console.log(Math.pow(6,4));
console.log(6**4);

// 7. Math.sqrt() - vraca kvadratni koren argumenta.

console.log(Math.sqrt(9));
console.log(Math.ceil(Math.sqrt(1455)));

// 8. Math.abs() - vraca pozitivnu vrednost argumenta.

console.log(Math.abs(-9));
console.log(Math.abs(9));

// 9. Math.sin() - vraca sinus argumenta ( vraca vrednost iz [-1,1]),a argument mora biti vrednost u radijanima.

console.log(Math.sin(Math.PI / 2));

// 10. Math.cos() - vraca kosinus argumenta ( vraca vrednost iz [-1,1]),a argument mora biti vrednost u radijanima.

console.log(Math.cos(Math.PI));

// Dve metode za nalazenje najmanje,odnosno najvece vrednosti za nekoliko datih brojeva:

// 10. Math.min() i  11. Math.max()

console.log(Math.min(-33,-22,-11,22,33,66));
console.log(Math.max(433,-22,-11,11,22,33,66));

// 12. Math.random() - vraca nam random broj izmedju 0(ukljucujuci 0) i 1(ne ukljucujuci 1).

console.log(Math.random());

console.log(Math.floor(Math.random() * 11)); //vraca broj od 0 do 10(ukljucujuci 10).

//Sledeci primer vraca random broj izmedju 1 i 10-ukljucujuci oba.
console.log(Math.floor(Math.random() * 10)+1);

//Sledeci primer nam vraca random broj izmedju 5 i 500(ukljucujuci oba)
console.log(Math.floor(Math.random() * 496)+5);

//Math.log()metode


//Math.log(x) - vraca logaritam broja x za osnovu e.
console.log(Math.log(6));

//Math.log2(x) - vraca logaritam broja x za osnovu 2.
console.log(Math.log2(6));

//Math.log10(x) - vraca logaritam broja x za osnovu 10.
console.log(Math.log10(6));













