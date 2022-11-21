const godine=[
    {starost:19},
    {starost:19},
    {starost:19},
    {starost:18},
    {starost:16},
    {starost:18},
    {starost:14},
    {starost:14},
];

// Napraviti novi niz koji ce sadrzati one elemente (objekte) cija je starost veca 
// od 18.

// godine2=godine.filter(({starost})=>
// starost>18);
// console.log(godine2);

const punoletni=godine.filter((element)=>
element.starost>18);
console.log(punoletni);
