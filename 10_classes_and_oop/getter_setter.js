class user {
    constructor(email,password) {
        this.email=email,
        this.password=password

        
    }
    get email(){
        return this._email.toUpperCase()//_email is the scret prperty
    }
    set email(val){
        this._email = val;
    }
    get password(){
        return `${this._password}hina`
    }
    set password(val){
        this._password=val
    }
}
const hina= new user("h@ina.ai","abc")
console.log(hina.password);
console.log(hina.email);
