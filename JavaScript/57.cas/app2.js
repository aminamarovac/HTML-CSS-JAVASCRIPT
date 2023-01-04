
/* fail for class subject
class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  fullName() {
    return console.log(this.name + " " + this.type);
  }
}

const newCar = new Car("Audi", "Limo");

console.log(newCar);

newCar.fullName();
 */

// Crate a new class User with data like name, lName(last name), yearOfBirth
// Create a method which will calculate how old is user
// Klase su izrada modela podataka unutar aolikacije(web ili bilo koje druge)
//Svaka klasa mora da ima metodu constructor(){},a ona vrsi funkciju
//glavne funkcije(metode) unutar klase.
//Pomocu constructor metode se inicijalizuju glavni podaci unutar klase.
//inicijalizacija promenljive i dodela vrednosti njoj
//vrsi se pomocu this metode(npr this.name)
//metode su funkcije unutar klase koje takodje mogu vrsiti
//inicijalizaciju promenljivih i obradu podataka.
//Svaka klasa mora imati novu constructor metodu.

class User {
  constructor(name, lName, yearOfBirth) {
    this.name = name;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.age = this.calculateAge(this.yearOfBirth);
  }

  calculateAge(yearOfBirth) {
    return 2022 - yearOfBirth;
  }
}

class AdditionalInfo extends User {
  #statesArr = [
    {
      state: "USA",
      cId: "+1",
    },
    {
      state: "UK",
      cId: "+44",
    },
    {
      state: "Mexico",
      cId: "+52",
    },
    {
      state: "India",
      cId: "+91",
    },
    {
      state: "China",
      cId: "+86",
    },
    {
      state: "Serbia",
      cId: "+381",
    },
  ];

  // street, city, state, phone number
  constructor(street, city, state, phoneNumber) {
    super(newUser.name, newUser.lName, newUser.yearOfBirth, newUser.age);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.number = this.numberHandler(this.state, this.phoneNumber);
  }

  numberHandler(state, phoneNumber) {
    this.findState = this.#statesArr.find((s) => s.state === state);
    return phoneNumber.replace(phoneNumber[0], this.findState.cId);
  }

  ispis(){
    this.beautify={
    name:newUser.name,
    lName:newUser.lName,
    yearOfBirth:newUser.yearOfBirth,
    street:this.street,
    city:this.city,
    state:this.state,
    number:this.phoneNumber,
    phoneNum:this.number,
  }
  return console.log(this.beautify);
}
}

const newUser = new User("Amina", "Marovac", 2003);

console.log(newUser);

const additional = new AdditionalInfo(
  "Dubrovacka140.",
  "Novi Pazar",
  "Serbia",
  "0631387323"
); 

console.log(additional);
console.log(newUser); 
additional.ispis();
