//Iz 2 poslata niza vratiti treci niz koji ce sadrzati one elemente iz oba niza
//koji nisu sadrzani u onom drugom nizu.

const treciNiz=(niz1,niz2)=>{
    niz3=[];
    const noviNiz1=niz1.filter((element)=>!niz2.includes(element));
    const noviNiz2=niz2.filter((element)=>!niz1.includes(element));
    return [...noviNiz1,noviNiz2];


}
console.log(treciNiz([1, 2, 3, 4], [3, 4, 5, 6]));