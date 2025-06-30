class users{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class teacher extends users { //extend is builtin word to get acces from the back function
    constructor(username,email,password) {
             super(username) //super should b always on the top in consturctors
                this.email=email
 
                this.password=password
    }
    addcourse(){console.log(`A new course is added by ${this.username}`);
    }
}
const chai= new teacher("chai","cahi@google.com","123")
chai.addcourse()
const maslachai=new users("masalachai")
maslachai.logme()
chai.logme()
console.log(chai ===maslachai);
console.log(chai instanceof teacher);
console.log(chai instanceof users);



