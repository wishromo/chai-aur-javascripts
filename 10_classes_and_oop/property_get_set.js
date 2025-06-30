function user(email,password){
    this._email=email
    this._password=password

Object.defineProperty(this, "email", {
    get: function() {
        return this._email.toUpperCase();
    },
    set: function(val) {
        this._email = val;
    }
});
Object.defineProperty(this, "password", {
    get: function() {
        return this._password.toUpperCase();
    },
    set: function(val) {
        this._password = val;
    }
})}
const chai =new user("chai@gogolle.com","123")
console.log(chai.email);

console.log(chai.password);


