//Izracunavanje sume kvadrata parnih brojeva u opsegu od broja n do broja m
//(n i m se unose sa tasture,n<m)
//drugi broj mora biti veci od prvog

function sumaKvadrata(){
    let brojN=+prompt("Unesite prvi broj:");
    let brojM=+prompt("Unesite drugi broj:");
    let suma=0;
    if(isNaN(brojN) || isNaN(brojM)){
        return `Unete vrednosti moraju biti brojevi.`
    }else if(brojN>=brojM){
        return `Drugi broj mora biti veci od prvog.`
    }else{
    for(let i=brojN;i<=brojM;i++){
    if(i%2===0){
        suma+=i**2;
    }
}
    }
return suma;
}
    console.log(sumaKvadrata());