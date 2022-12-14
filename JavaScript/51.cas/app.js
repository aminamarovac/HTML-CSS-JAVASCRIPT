//Sinhroni JavaScript

//stack-kada uzimamo poslednji element sa vrha
// Za početak, kratak osvrt na problematiku sinhronog izvršavanja koda u JavaScript-u:

// sinhroni pristup u programiranju (u JS-u, a naravno i inače)
// podrazumeva da se instrukcije programskog koda izvršavaju onim redosledom kojim su zapisane
// takav pristup ne pravi probleme u slučaju instrukcija koje se izvršavaju velikom brzinom 
//(kada praktično deluje da se program izvršava trenutno), ali ....
// ukoliko neka od instrukcija (petlja, ili poziv funkcije), 
//zahteva više vremena za obradu, tako da se vreme obrade ne može zanemariti, nastaje zastoj
// Najprostije rečeno, procesorski zahtevne instrukcije mogu zablokirati izvršavanje ostatka koda i to
// (osim ukoliko sistem na drugi način ne omogućava procesiranje korisničkih zahteva), svakako predstavlja problem.

// U JavaScript-u, asinhroni pristup u izvršavanju instrukcija omogućava da se pod određenim okolnostima, 
//određeni delovi koda izvršavaju paralelno (u praktičnom smislu - istovremeno), pa ćemo se u nastavku pozabaviti različitim
//  implementacijama ovakvog pristupa