//es6
// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeusername() {
//         // This is where the conversion to uppercase happens
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", "123");

// This should output "123abc"
// console.log(chai.encryptPassword());

// This should output "CHAI" (the uppercase version)
// console.log(chai.changeusername());






//behind the scene with creating prototype and  
function user (username, email, password) {

    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword=function(){
     return `${this.password}abc`
}
user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}
const tea= new user("tea","tea@google.com","345")
console.log(tea.encryptPassword())
console.log(tea.changeusername());

