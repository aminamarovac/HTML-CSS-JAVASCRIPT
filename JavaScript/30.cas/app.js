// JavaScript sortiranje nizova//
// sort()metoda-vrsi sortiranje niza abecedno.

const grupa=["Talib","Ahmed","Mejra","Muusa","Amina","Amina","Abdurahman"];
grupa.sort();
console.log(grupa)

//Za obrnuto sortiranje se koristi metoda reverse()
grupa.reverse();
console.log(grupa);
//Reverse okrece nas niz od poslednjeg ka prvom elementu.
// Ako zelimo da elementi budu poredjani od (Z-A) onda treba primeniti 
// sort metodu,pa onda reverse metodu.


const brojevi=[-56,85,61,-32,78,104];
//sort metoda ne radi dobar posao kod brojeva,samim tim
//moramo kao argument staviti neku funkciju koja ce nam
//poredjati brojeve od najmanjeg ka najvecem ili obratno.
//brojevi.sort();
console.log(brojevi);

//fora
brojevi.sort(function (a,b) {return a-b}); //Anonymous function
console.log(brojevi);

//Sortiranje niza od veceg ka manjem broju ide na slican nacin:
brojevi.sort((a,b) => b-a);
console.log(brojevi);

// Random sortiranje niza
function random(){
    return 0.5-Math.random();
};
brojevi.sort(random)
console.log(brojevi);


//Postoji nekoliko nacina da dobijemo najveci (najmanji) element niza.

// 1.Sortiranjem niza,zatim pristupamo najvecem,odnosno najmanjem elementu.
//Dobijanje minimuma:
function minimum(arr){
    arr.sort((a,b)=>a-b);
    return arr[0];
}
console.log(minimum(brojevi));

function maximum(arr){
    arr.sort((a,b)=>b-a);
    return arr[0];
}
console.log(maximum(brojevi));


// 2.Primenom Math.max.apply() (Math.min.apply());
// Dobijanje minimuma ide na sledeci nacin:
let min=Math.min.apply(null,brojevi);
console.log(min);

//Dobijanje maximuma
let max=Math.max.apply(null,brojevi);
console.log(max);

//3.Pravljenje funkcije koja nam vraca minimum,odnosno maximum.

const minn=(arr)=>{
    let minimum=Number.POSITIVE_INFINITY;
    for(number of arr){
        if(number < minimum){
            minimum=number;
        }
    }
return minimum;
}
console.log(minn(brojevi));

//za domaci funkcija za maximum




