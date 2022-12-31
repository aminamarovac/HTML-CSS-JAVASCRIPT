//File for class subject

//Node  runtime koji vrsi egzekuciju i kompajlovanje javascript koda.
//Node ima mnostvo svojih modula,najpoznatiji us fs(fileSystem) i http modul.

// const fs=require('fs');
// fs.writeFile("text.text","djahhahaja");

// class Car{
//     constructor(name,type){
//         this.name=name;
//         this.type=type;
//     }
//     fullName() {
//         return console.log(this.name + " " + this.type);
//     }
// }

// const newCar=new Car("Audi","Limo");
// console.log(newCar);

// newCar.fullName();

class User{
    constructor(name,lastname,age){
        this.name=name;
        this.lastname=lastname;
        this.age=age;
    }
    fullName(){
        return console.log(this.name + " " + this.lastname);
    }
}
const newUser=new User("Amina","Marovac",19)

console.log(newUser);
newUser.fullName();
