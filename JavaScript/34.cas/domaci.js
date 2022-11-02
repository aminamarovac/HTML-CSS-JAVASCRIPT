// Domaci zadatak:
// 1.zadatak
// Sabrati sve godine tjst elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.
array=[1,4,2,19,9,3,22];
// const duzina=godine.length;
	// const zbir = godine.reduce((previousValue, currentValue) => {
	// 	return(previousValue + currentValue)
	// });
	// console.log(zbir/duzina);
	function firsTask(arr){
		const duzina=arr.length;
		const suma=arr.reduce((previousValue,currentValue)=>previousValue+currentValue);
		return +(suma/duzina).toFixed(2);
	}
	console.log(firsTask(array));



// 2. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
//1mil=1.609344 km
function convertMilesToKilometers(){
    array1=[1,4,2,19,9,3,22];
    const totalDistanceInKilometres=array1.map(function(element){
		return+(element*1.609).toFixed(1);

	})
	.reduce((previousValue,currentValue)=>(previousValue+currentValue));
	return totalDistanceInKilometres;

}
console.log(convertMilesToKilometers());




