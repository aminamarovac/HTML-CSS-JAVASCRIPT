//Domaci zadatak

function fudbalskiTeren(){
    let duzina= +prompt("Unesite duzinu fudbalskog terena:");
    let sirina =+prompt("Unesite sirinu fudbalskog terena:")
    let rastojanje= +prompt("Unesite rastojanje od ograde do fudbalskog terena:")
    let obim=0;
    if(isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)){
        return `Uneto moraju biti brojevi.`
    } else if (duzina < 90 || duzina > 120) {
		return "Morate uneti neki broj od 90 do 120.";
	} else if (sirina < 45 || sirina >90) {
		return "Morate uneti neki broj od 45 do 90";
	} else if (rastojanje< 2 || rastojanje > 10) {
		return "Brojevi rastojanja ograde od terena moraju biti od 2 do 10.";
	} else {
		obim =
			2 * (duzina + sirina + 4 * rastojanje);
	}
	return obim;
};
console.log(fudbalskiTeren());
