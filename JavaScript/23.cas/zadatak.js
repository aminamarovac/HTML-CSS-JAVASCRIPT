//Zadatak:
//Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate kordinate datih tacaka.
function rastojanje(){
    let AXOsa=+prompt("Unesite kordinatu x za tacku A:");
    let AYOsa=+prompt("Unesite kordinatu y za tacku A:");
    let BXOsa=+prompt("Unesite kordinatu x za tacku B:");
    let BYOsa=+prompt("Unesite kordinatu y za tacku B:");
    let rastojanjee=Math.sqrt((BXOsa**2 - AXOsa**2)+(BYOsa**2-AYOsa**2));
    if(isNaN(AYOsa) || isNaN(AXOsa) || isNaN(BXOsa) || isNaN(BYOsa)){
    return `Uneta vrednost mora biti broj.`
    }else if(BXOsa<AXOsa){
        return `Kordinata x kod tacke B mora biti veca od kordinate x kod tacke A.`
    }else if(BYOsa<AYOsa){
        return `Kordinata y kod tacke B mora biti veca od kordinate y kod tacke A.`
    }else{
    return `Rastojanje izmedju tacaka A i B iznosi ${Math.round(rastojanjee)}`
    }
}
console.log(rastojanje());