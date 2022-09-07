const treciZadatak=function(recenica){
    let recenica2=""
    for (i = 0; i <= recenica.length; i++) {
        if (
            recenica[i] === "a" ||
            recenica[i] === "e" ||
            recenica[i] === "i" ||
            recenica[i] === "o" ||
            recenica[i] === "u"
        ) {
        recenica2 += recenica[i].toUpperCase();
        } else if (i === recenica.length) {
            recenica2 += ".";
        } else {
            recenica2 += recenica[i];
        }
        }
        return recenica2
        
}

console.log(treciZadatak("Pocela je nova skolska godina."));
console.log(recenica2);