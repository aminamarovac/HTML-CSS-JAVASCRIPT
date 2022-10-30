//reduce()metoda vrsi takodje iteraciju kroz svaki element, s tim sto
// ona kao rezultat daje jedan broj.
// Najcesca primena reduce metode je kada zelimo sumu elemenata niza.

//u slucaju da kupujemo direktno u radnji
const korpa=[1600,900,1400,220,1490];
const zbir=korpa.reduce((previousValue,currentValue)=>previousValue+currentValue);
console.log(zbir);

// u slucaju da kupujemo online vraca se postarina od 500dinara.
//reduce() metoda dozvoljava initial value i ona se upisuje nakon funkcije
//zapravo kao drugi(opcioni) argument reduce metode.
//niz.reduce(function() {} , initial value);

const onlineZbir=korpa.reduce((prev,curr)=> prev + curr,500);
console.log(onlineZbir);

const godine=[15,14,19,18,17,18,20,13];
//napraviti funkciju koja vraca zbir godina koje su vece od 17
const zbirGodina=(arr)=>{
    const punoletni=arr.filter((element)=>{
        return element>17
    })
    const zbir=punoletni.reduce((prv,crv)=>{
        return prv+crv;
    })
    return zbir
}
console.log(zbirGodina(godine));

function samAdult2nd(arr){
    const zbir=arr.reduce((prev,curr)=>{
        if(curr>=18){
            return prev+curr;
        }else{
            return prev
        }
    },0);
    return zbir;
}

console.log(samAdult2nd(godine));
//Fugonacijev nizz