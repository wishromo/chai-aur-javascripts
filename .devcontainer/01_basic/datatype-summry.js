// Prmitive Data type
// call by value what ever change its cahange in copy not in the orignial variable

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scorevalue=100.3
const isloggedIn=false
// const outsideTemp=nulll
let userEmail
const id=Symbol("123")//use to define type that it should be strind
const anotherid=Symbol( '123')
// console.log(id===anotherid)
const bigNumber=9798798798798798n


// Non prmitive
// call by refrence
// Array,Objects,Function
const heros=["Imran Khan","Dr Abdul Qadeer khan","Abudul Sattar Edhi"]
let myobc={
    name:"hina",
    age:44,
    id:3
    
}
 const myfuntion=function myFunction(){
    console.log("Hello World")
 }
console.log(typeof myfuntion);

