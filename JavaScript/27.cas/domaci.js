//1.zadatak Napraviti funkciju koja iz nekog niza brise 
//sve elemente na parnim pozicijama(indeksima),indeks drugi,cetvrti,po redosledu parni

let array1=["bela", "crvena", "zuta", "narandzasta", "crna", "plava", "zelena", "roza", "siva", "teget", "ljubicasta"];
console.log(array1)
function prvizadatak (arr) {
	let parniNiz = ""
	for (element in arr) {
		if (element % 2 === 0) {
			parniNiz += arr[element] + " , ";
		}
	}
	return parniNiz;
};

console.log(prvizadatak(array1));

//2.zadatak Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj".

function drugizadatak (arr) {
	let parniNiz = ""
	for (element in arr) {
		if (element % 2 !== 0) {
			arr[element]= " paran broj "
		}
		{parniNiz += arr[element] 
		}
	}
	return parniNiz;
};








































console.log(drugizadatak(array1));