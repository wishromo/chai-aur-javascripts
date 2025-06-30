class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username ${this.username}`);
        
    }
    static createid(){      //it will not give the the id to every person
        return `123`
    }
}
const hitesh= new user("hitesh")
//console.log(history.createid());
class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new teacher("iphone","i@phone.com")
iphone.logme()
// console.log(iphone.createid()); this will not work because creatid ()is static but not do anything else

