//create new class user with data like name,lName(lastName),yearOfBirth

class User{
    constructor(name,lastname,yearOfBirth){
        this.name=name;
        this.lastname=lastname;
        this.yearOfBirth=yearOfBirth;
        this.age=this.calcuateAge()
    }
    calcuateAge(){
    return 2022-this.yearOfBirth;
    }
}
class AditionalInfo extends User{
//street,city,state,phone number
constructor(street,city,state,phoneNumber,number){
    super(newUser.name,newUser.lastname,newUser.yearOfBirth,newUser.age);
    this.street=street;
    this.city=city;
    this.state=state;
    this.phoneNumber=phoneNumber;
    this.number=this.numberHandler(this.state,this.phoneNumber)
}
statesArr=[
    {
        state:"USA",
        cId:"+1",
    },
    {
        state:"UK",
        cId:"+44",
    },
    {
        state:"Mexico",
        cId:"+52",
    },
    {
        state:"India",
        cId:"+91",
    },
    {
        state:"Kina",
        cId:"+86",
    },
    {
        state:" Serbia",
        cId:"+381",
    },
];
numberHandler(state,phoneNumber){
    this.findState=this.statesArr.find(s=>s.state===state);
    return phoneNumber.replace(phoneNumber[0],this.findState.cId);
}
}

const newUser=new User("Amina","Marovac",2003);
const newUser2=new User("Dubrovacka 140","Novi Pazar","Srbija",066)
console.log(newUser);
newUser.calcuateAge();
console.log(newUser2)

