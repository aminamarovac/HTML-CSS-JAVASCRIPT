//callstack

callstack=[];
console.log(callstack);

callstack.push("main()");
console.log(callstack);

callstack.push("func1()");
console.log(callstack);

callstack.pop("func1()");
console.log(callstack);


//Asinhroni JavaScript
//sklanjanje nekih dugih funk na web api
//event loop
//last in first up
//callback dubue
//fetch
//Funkcije zavisne od asinhrone ce da cekaju na web api.
//funkcija je referentni tip podatka koji mozemo da prosledjujemo u raznim oblicima.
//Mehanizmi :

//1.callback-teski za kontrolisanje
//.setTimeOut(callback,neki broj)
//promises
//garden.bradwoods.jo
//JavaScript V8 Engine