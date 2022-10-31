// Domaci zadatak:
// 1. Zadatak
// Sabrati sve godine tjst elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.
let godine=[7,28,5,42,3,91,11,71,19,5];
const duzina=godine.length;
	const zbir = godine.reduce((previousValue, currentValue) => {
		return(previousValue + currentValue)
	});
	console.log(zbir/duzina);

// 2. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
//1mil=1.609344 km
function convertMilesToKilometers(){
    array1=[1,4,2,19,9,3,22];
    return array1.map(element => element*1.609);
}
console.log(convertMilesToKilometers());

