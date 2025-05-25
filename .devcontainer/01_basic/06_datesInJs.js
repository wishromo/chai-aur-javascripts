//Date is an object in js

let MyDate=new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString())
// console.log(MyDate.toISOString())
// console.log(MyDate.toLocaleString())
//console.log(typeof MyDate);


// let  myCreateDate=new Date(2025,0,22)//give the day at january 22 2025
// console.log(myCreateDate.toDateString());//withn this commond
//let  myCreateDate=new Date(2025,0,22,5,3)
// console.log(myCreateDate.toLocaleString());
// let myCreateDate=new Date("20225-01-14")
let myCreateDate=new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());
let myTimeString=Date.now()
// console.log(myTimeString);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{
    weekday:"long",
   month:"long"
   
}))







