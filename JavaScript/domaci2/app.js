// Domaci:
// 1.zadatak
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
for(var x=1; x<=20;x++){
    if (x%2!==0){
    console.log(x);
    }
} 

// 2.zadatak
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
for (var y=50;y<=100;y++){
    if (y%5===0){
console.log(y);
    }
}
// 3.zadatak
// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
for (var a=12;a<=28;a++){
    if(a%2===0){
        console.log(a);
    }
}

// 4.zadatak
// Suma neparnih prirodnih brojeva od 10 do 20.
for (var z=10;z<=20;z++){
    if(z%2!==0){
        console.log(z);
    }
}

// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

// 1.1
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  // 1.2
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
  
  // 2.
  for (let i = 50; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  
  // 3.
  // Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
  // 4.
  // Suma neparnih prirodnih brojeva od 10 do 20.
  
  // 3.
  for (let i = 6; i <= 14; i++) {
    console.log(i * 2);
  }
  
  // 4.
  let suma = 0;
  for (let i = 11; i <= 20; i += 2) {
    suma += i;
  }
  
  console.log(suma);