console.log(saberiDvaBroja(4,5));

function saberiDvaBroja(br1,br2){
    return br1+br2;
}

// console.log(saberiTriBroja(4,6,2));
// const saberiTriBroja=(br1,br2,br3)=>br1+br2+br3;

//Hoisting kod funkcija vazi ako se radi o funkcijama definisanim preko 
//function keyword,dok kod error funkcija ne vazi,tjst nije moguce pozvati
//funkciju pre definisanja iste.

if(true || true || false);//true

if(false&&true&&true);//false

//Da li je neka vrednost truthy ili falsy
console.log(!!"Muhamed");//falsy
//console.log(Boolean("Muhamed"));alternativa

console.log(!!5+"34");//true-string
console.log(-1);//true
console.log(!!(63-63))//false-0

const niz=[1,2,3,4,5,6];

//FreeCodeComp



