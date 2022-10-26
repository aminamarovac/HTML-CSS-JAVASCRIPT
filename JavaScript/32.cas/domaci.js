//1.zadatak
//Napraviti funkciju koja ce iz postojeceg niza napraviti novi uz par uslova:
//value>2=> value*7
//value>2 i value<8=> (value*4)/2
let niz1=[9,78,46,4,1,9,12,3,7,6,17,19,23,43,71];
let novi=niz1.map((number)=>{
    if(number>2 && number<8){
        return (number*4)/2;
    }else if(number>2){
        return number*7;
    }else{
        return number;
    }

});
console.log(novi);
