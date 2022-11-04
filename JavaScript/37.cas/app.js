const niz=["Vahid","Talib","Imran","Ahmed","Abdurahman","Amina B.","Amina M.",];

//indexOf ()metoda pretrazuje niz i vraca nam index elementa koji predstavlja argument date metode.
//  Ako se elemnt koji pretrazujemo ne nalazi unutar niza,rezultat ce biti -1.
//zadatak
//za argument funkcija da uzima neki niz i vraca nam poziciju na kojoj se nalazi Imran,dok ako Imran nije 
//prisutan neka ispise poruku Sad ceImran doci.

function myFunction(arr){
    if(arr.indexOf("Imran")){
        return `Sad ce Imran doc.`
    }else{
        return `Imran se nalazi na ${arr.indexOf("Imran")+1}.mestu.`
    }
    }
    console.log(myFunction(niz));

    //lastIndexOff()metoda nam pretrazuje niz i vraca nam index
    //poslednjeg pojavljivanja elementa koji predstavlja argument date metode,
    //u slucaju da se neki element nalazi vise puta u datom nizu.
    //Ako se ne nalazi rezultat je -1.


function myFunction2(arr){
    if(arr.lastIndexOf("Imran")){
        return `Sad ce Imran doc.`
    }else{
        return `Imran se nalazi na ${arr.lastIndexOf("Imran")+1}.mestu.`
    }
    }
    console.log(myFunction2(niz));


    //includes()metoda funkcionise isto kao kod stringova.Zapravo vraca nam
    //boolean u zavisnosti od toga da li se argument nalazi unutar niza na koji primenjujemo datu metodu.

    console.log(niz.includes("Mejra"));
    console.log(niz.includes("Amina B."));

    //JavaScript keys() i entries() metode nam vracaju indexe datog niza,
    //odnosno kombinaciju indexa i vrednosti.

   const indeksi=niz.keys() //Array Iterator Object
    for(let indeks of indeksi){
        console.log(indeks);
    }

    const indeksiIVrednosti=niz.entries(); //Array Iterator Object

    for(let item of indeksiIVrednosti){
        console.log(item);
    }


    //flat metoda iz niza nizova pravi niz koji je sacinjen od svih elemenata.
    const svastara=[["jabuke","kruske","mandarine","mango"],["somun","ruza","bageta"],[
        "krompir","bostan","luk"
    ]];
    const svastaraSredjena=svastara.flat();
    console.log(svastaraSredjena);
    svastaraSredjena.sort().reverse();
    console.log(svastaraSredjena);

    //w3 resource// 
    //codewars



