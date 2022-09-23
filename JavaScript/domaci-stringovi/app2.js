//2.zadatak:pretvoriti sva velika slova u mala
function convertToLowerCase() {
  let nekaRecenica = prompt("Unesite neku recenicu: ");
  let duzina = nekaRecenica.length;
  let recenica2 = "";
  
  for (let i = 0; i < duzina; i++) {
    if (nekaRecenica[i] === nekaRecenica[i].toUpperCase() && nekaRecenica[i] !== " ") {
        recenica2 +=nekaRecenica[i].toLowerCase() 
    } else {
      recenica2 += nekaRecenica[i];
    }
  }
  return recenica2;
  }
  console.log(convertToLowerCase());    
