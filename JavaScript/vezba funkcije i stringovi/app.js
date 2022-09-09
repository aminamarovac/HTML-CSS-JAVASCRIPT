

//stringovi

let recenica="Danas je lepo vreme"
let rec="Danas"

let treciKarakter=recenica[2];
console.log(treciKarakter);

let novaRec=recenica.toUpperCase();
console.log(novaRec);

let duzinaRecenice=recenica.length;
console.log(duzinaRecenice);
console.log(rec.length);

let recenica2 = "Danas je bilo promenjljivo vreme"
for(i=0;i<recenica2.length;i++){
    console.log(recenica2[i]);
}


let recenicaa=" Danas je lepo vreme "
let recenica3=" ";
for(i=0;i<recenicaa.length;i++){
    if(i === 0){
        recenica3 += recenicaa[i].toUpperCase();
    }else if(recenicaa[i-1]=== " "){
        recenica3 += recenicaa[i].toUpperCase();
    }else{
        recenica3 += recenicaa[i];
    }
}
console.log(recenica3);

let recenica4=" ";
let len=recenicaa.length;
for(i=0;i<len;i++){
    if(i === 0){
        recenica4 += recenicaa[i].toUpperCase();
    }else if(recenicaa[i+1] === " "){
        recenica4 += recenicaa[i].toUpperCase();
    }else{
        recenica4 += recenicaa[i];
    }
}
console.log(recenica4);

let recenica5="";
for(i=0;i<recenicaa.length;i++){
    if(recenicaa[i] === " "){
        continue;
    }else{
        recenica5 += recenicaa[i];
    }
}
console.log(recenica5);

recenicaa111 = "banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
recenica112=" ";
for(i=0;i<recenicaa111.length -1;i++){
    if(recenicaa111[i] === "a" && recenicaa111[i+1] === "n"){
        recenica112+="d";
    }else if(recenicaa111[i] === "a"){
        recenica112+="d"
    }else{
        recenica112 += recenicaa111[i];
    }
}
console.log(recenica112);

let recenica0 =
"Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica20 = "";
for(i=0;i<recenica0.length;i++){
    if(
        recenica0[i] === "a" ||
        recenica0[i] === "o" ||
        recenica0[i] === "i" ||
        recenica0[i] === "u" ||
        recenica0[i] === "e"
    ){
        recenica20+=recenica0[i].toUpperCase();
    }else if(i===recenica0.length){
        recenica20 += ".";
    }else{
        recenica20 += recenica0[i];
    }
}console.log(recenica20);
