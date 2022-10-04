//Domaci zadatak

function fudbalskiTeren(){
    let duzina= parsInt(prompt("Unesite duzinu fudbalskog terena:"));
    let sirina =parsInt(prompt("Unesite sirinu fudbalskog terena:"))
    let rastojanje= parsInt(prompt("Unesite rastojanje od ograde do fudbalskog terena:"));
    let obim=2*duzina+2*sirina+8*rastojanje;
    if(isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)){
        return `Uneto moraju biti brojevi.`;
    } else if (duzina < 90 || duzina > 120) {
		return `Morate uneti neki broj u segmentu[90,120].`
	} else if (sirina < 45 || sirina >90) {
		return `Morate uneti neki broj u segmentu[45 do 90]`;
	} else if (rastojanje< 2 || rastojanje > 10) {
		return `Brojevi rastojanja ograde od terena moraju biti od 2 do 10.`;
	} else {
	return `Za obradjivanje terena je potrebno ${obim} metara.`;
}
}
console.log(fudbalskiTeren());
