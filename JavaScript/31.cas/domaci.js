//1.Napraviti pomocu map metode ()novi niz stringova ciji ce elementi biti ispisani velikim slovima
let niz1=["bela","Crvena","zUta","ljubicastA","zelena","plava"]
let velikaSlova = niz1.map((element) => element.toUpperCase());
console.log(velikaSlova);

//2.pomocu for petlje naprviti novi niz koji ce sadrzati samo godine vece od 17.
let niz2=[2,-3,5,9,-22,82,2,90,23,14,42,9,22,18];
function noviNiz (arr){
    let noviNizz = [];
    for (number of arr) {
        if (number > 17) {
            noviNizz.push(number);
        }
    }

    return noviNizz.sort((a,b)=>a-b);
};

console.log(noviNiz(niz2));

