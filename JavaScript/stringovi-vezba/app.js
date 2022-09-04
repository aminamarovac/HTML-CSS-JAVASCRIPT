// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka. 
let recenica99="";
for(let i=0;i<recenica.length;i++){
    if(recenica[i]===" "){
        continue
    }else{
        recenica99 += recenica[i]
    }
}
console.log(recenica99);


// Napravi novu recenicu gde ce umesto slova a pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
recenicaa111 = "banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
let recenica5=" ";
for(let i=0;i<=recenicaa111.length -1 ; i++){
    if(recenicaa111[i]==="a" && recenicaa111[i+1]==="n"){
        recenica5+="d"
    }else if(recenicaa111[i]==="a"){
        recenica5+="t";
    }else{
        recenica5+=recenicaa111[i];
    }
}
console.log(recenica5);