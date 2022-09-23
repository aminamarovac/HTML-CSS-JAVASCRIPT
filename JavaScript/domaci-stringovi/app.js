//1.zadatak
//Proveriti da li je uneti string palindrom(potpuno je isti kada se cita otpozadi)
//npr 'anavolimilovana' je palindrom

const isPalindrom = function(){
  let recenica=+prompt("Unesite neku recenicu:");
  let duzina=recenica.length
  let obrnutaRecenica="";
  for(let i=duzina-1;i>=0;i--){
    obrnutaRecenica+=recenica[i];
  }
if(obrnutaRecenica=recenica){
  return true;
}else{
  return false;
}
};
console.log(isPalindrom());
