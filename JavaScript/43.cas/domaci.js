//Napraviti niz objekata gde ce svaki objekat sadrzati:ime,prezime,starost,bojaOciju,
//bojaKose,polozenC.
//Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon.
//i koji nisu polozili C.

const array=[
    //1.
    {
        name:"Amina",
        lastName:"Marovac",
        age:18,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:true,
    },
    //2.
    {
        name:"Amina",
        lastName:"Besirovic",
        age:18,
        eyeColor:"blue",
        hairColor:"hijabGirl",
        laidC:true,
    },
    //3.
    {
        
        name:"Ahmed",
        lastName:"Krkmisevic",
        age:19,
        eyeColor:"blue",
        hairColor:"brown",
        laidC:true,
    },
    //4.
    {
        name:"Vahid",
        lastName:"Gasanin",
        age:19,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:true,
    },
    //5.
    {
        name:"Imran",
        lastName:"Hazirovic",
        age:19,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:false,
    },
    //6.
    {
        name:"Munevera",
        lastName:"Plojovic",
        age:18,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:true,
    },
    //7.
    {
        name:"Muhamed",
        lastName:"Krkmisevic",
        age:16,
        eyeColor:"brown",
        hairColor:"black",
        laidC:true,
    },
    //8.
    {
        name:"Amina",
        lastName:"Marovac",
        age:18,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:true,
    },
    //9.
    {
        name:"Muusa",
        lastName:"Zecirovic",
        age:16,
        eyeColor:"brown",
        hairColor:"black",
        laidC:false,
    },
    //10.
    {
        name:"Merjem",
        lastName:"Hadzijasarevic",
        age:20,
        eyeColor:"brown",
        hairColor:"blue",
        laidC:true,
    },
    //11.
        {
        name:"Abdurahman",
        lastName:"Selmanovic",
        age:15,
        eyeColor:"brown",
        hairColor:"black",
        laidC:true,
        },
    //12.
    {
        name:"Harun",
        lastName:"Zecirovic",
        age:18,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:false,
    },
    //13.
    {
        name:"Talib",
        lastName:"Dolovac",
        age:16,
        eyeColor:"brown",
        hairColor:"brown",
        laidC:false,
    }
]
const filteredStudents=(par)=>{
    const filtered=par.filter((element)=>
    element.eyeColor==="brown" && element.laidC===false);
    return filtered;
}
console.log(filteredStudents(array));

        