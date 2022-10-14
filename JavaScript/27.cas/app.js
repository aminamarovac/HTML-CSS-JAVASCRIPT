 // ARRAY METODE//

 // 1. PUSH () metoda na najlaksi nacin dodaje element nizu na poslednjem mestu.

const voce=["jagoda","banana","mandarina","ananas"];

voce.push("mango"); // vraca duzinu niza nakon sto se doda odredjeni element

console.log(voce);

//console.log(voce.push("mango"));

// push() metoda moze dodatri vise elemenata u nizu.
voce.push("jabuka","kivi","narandza");
console.log(voce);

// Novi nacin dodavanja elementa na poslednjem mestu.

voce[voce.length]="kupina"
console.log(voce);

//Jos jedan razlog zasto izbegavati new ARRAY() prilikom definisanja niza:
let brNiz=[55];
console.log(brNiz);

let brNiz2=new Array(44);
console.log(brNiz2);
console.log(brNiz2.length);

// 2. Za prevodjenje niza unutar stringa se koristi metoda toString()

let voceString=voce.toString()
console.log(voceString);
console.log(typeof(voceString));

// Jos jedan nacin prevodjenja niza u string.Sa dodatnim mogucnostima.
//let voceString2=voce.join() // vraca string preveden kao kod tostring metode
//let voceString2=voce.join(""); // vraca string gde izmedju elemenata niza nema zareza.
let voceString2=voce.join("*");
console.log(voceString2);

// rucno pravljenje join("_")

const joinManual=(arr)=>{
    let arrString="";
    for(let element of arr){
        arrString += element + "_"
    }
    let duzina=arrString.length
   // return arrString.substr(0,duzina-1); //1.nacin
    return arrString.slice(0,duzina-1); //2.nacin
} 
console.log(joinManual(voce));


// 3. Pop() metoda se koristi za brisanje poslednjeg elementa niza.

let kupina=voce.pop() ; // vraca izbrisani element
console.log(voce);
console.log(kupina);


// 4. UnShift() metoda dodaje element na prvom mestu u nizu.

let duzina=voce.unshift("tresnja"); //vraca duzinu niza sa unetom tresnjom na pocetku, svi elementi se pomeraju za jedno mesto
console.log(voce);
console.log(duzina);

voce.unshift("tresnja" , "bostan" , "sljiva"); // moze dodati vise elemenata na pocetku niza
console.log(voce);


// 5. Shift () metoda se koristi za brisanje prvog elementa niza.

let izbrisaniElement=voce.shift()
console.log(voce);
console.log(izbrisaniElement);