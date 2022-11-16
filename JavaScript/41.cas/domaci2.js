// 2. Zadatak
const automobil = {
    marka: "Audi",
    model: "Q7",
    boja: "Bela", 
    pogon: "quattro",
    menjac: "Automatik",
    km:240000,
    vlasnik:["062321552","063930630"],
    garaza:{
    parking:"JKP Servis",
    vikend:"od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function(pocetniDatum, krajnjiDatum) {
    const pocetniDan=pocetniDatum.getDate()
    const krajnjiDan=krajnjiDatum.getDate()
    const ukupnoDana=krajnjiDan-pocetniDan;
    return `Cena parkinga za dati period je ${ukupnoDana*this.dnevnaKarta}`;
    }    
}
    }
    automobil.boja="crvena";
    console.log(automobil.boja);

    const vahid=new Date(2003,5,25);
    console.log(vahid.getDate());

console.log(automobil.garaza.platiZa(new Date(2022,10,16),new Date(2022,10,21)));

//Date.parse-vraca razliku izmedju nekog poslatog datuma i 1.jan 1970...

console.log(new Date(810282892822922));

const amina=new Date(2003,11,8);
const munevera=new Date(2003,11,13);

const aRazlika=Date.parse(amina);
const mRazlika=Date.parse(munevera);

const razlika=Math.abs(aRazlika-mRazlika);
const datumRazlike=new Date(razlika);
console.log(datumRazlike);

