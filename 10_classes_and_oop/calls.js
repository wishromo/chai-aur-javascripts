function setusername(username){
    //complex db calls
    this.username=username
    console.log("called")
}
function createuser(username,email,password){
    setusername.call(this,username)//this "this" will ake the refrence of the other fucntion this from previous function
    this.email=email 
    this.password=password
}
const chai= new createuser("cahi","cahil@goole.com",123)
console.log(chai);

