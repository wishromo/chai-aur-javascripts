 // object litreal
 const user={
    username:"hina",
    loginCount:8,
    signedIn:true,
    getuserDeatails:function(){
        // console.log("got user details from database")
        // console.log(`username:${this.username}`)
        // console.log(this)
    }
    
}
// console.log(user.username)
// console.log(user.getuserDeatails())
// console.log(this)


//constructor
//new keyword is the constructor funtion
//it is use to make multiple recordsfor new context
//new is the constructor function      
function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    this.greeting=function(){console.group(`welcome ${this.username}`)}
    return this
}

const userone = new User("hina", 12, true);
const usertwo = new User("chaiaurcode", 11, false);

// console.log(userone);
// console.log(usertwo);

// You can also compare them to see they are distinct objects
// console.log(userone === usertwo); // Output: false
// object created
//contructor function cllaed with "new" fuction
//this injectd all the data
console.log(userone.constructor);//refrence about yourself
//check instanceof