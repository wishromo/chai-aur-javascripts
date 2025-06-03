//<,>,<=,>=,==,!=
//2<=2 ,3 != 2 ,=== its chack the type as well
// if (2=="2")
// {
//     console.log("execute");
    
// }
// if(2==="2"){
//     console("executed")// it will be not excuted because its check the datatype as well
// }
// else {
//     console.log("not excuted");
// }
// if (2!=3){
//     console.log("executed");
    
// }
// const temprature = 40
// if(temprature===41){
//     console.log("temprature is less then 50");
    
// } else{
// console.log("temprature is greater then 50");}
// const score=200
// if (score>100) {
//     const power="fly"
//     console.log(`user power:${power}`);
//     var power2="swim"               //its a golbal varibale so can be acces from outside
    
    
// }
//    console.log(`user power:${power2}`);
//    console.log(`user power:${power}`);//it will not executed because the power varibel is inside the scope of if statment nad when it come out it will be finished
const balance=1000
// if (balance>500) console.log("test"),//it can be written like this as well but it is not appreiciateable implicit shuld be one liner
// console.log("test2");//impilicit scope that i understand that it is sope but one liner
// if (balance < 500){
// console.log("less than 500");

// }else if(balance<750){

// console.log("less than 750");

// } else if(balance<900)
// {
// console.log("less tan 900");

// }
// else {console.log("it greater than 100");
// }






// const userEmail="hina .ai"
// if (userEmail){ //when we consider the variabele do have the string value and it is true then this tis truthy value
//     console.log("Got user email")
// }
// else {
//    console.log("Donaot have the user email") 
// }
// const userEmail=""
// if (userEmail){ //when we consider the variabele do not have the string value and it igive else part then this tis truthy value
//     console.log("Got user email")
// }
// else {
//    console.log("Donaot have the user email") 
// }
const userlogginIn=true
const debitCard=true
// if (user)
const userEmail=[]//with array its still give true value although aarry is empty
if (userEmail){ 
    console.log("Got user email")
}
else {
   console.log("Donaot have the user email") 
}
//falsy values
//false,0,-0,Bigint 0n,"",null,undefine,NaN
//truthy values
//true,"0","false",'  ',{},[],function(){}
if (userEmail.length===0){          //tho check that the array is empty or have data in it
    console.log("array is empty");
    
}
const emptyObject={}
if (Object.keys(emptyObject).length === 0){                /// to see the object is empty or not
    console.log("Object is empty")
}


//gernal Knowlge
// false==0
// true
// false==""
// true
// 0==""
// true
// Nullish coalescing oprerator (??) null, undefined
let val1;
val1  = 5 ?? 10             //?   and ?? they have diffrence
val1= null ?? 10        //it give 10 in return null will be not asosigne not null or undefined
val1=undefined ?? 15
val1=null??10??20 // it will asigen the first value after null
console.log(val1);  // us e for database that if it return the value so it would be null or then assighed null in return so i cane mannage my data 
//Ternitary Opreator
//condtion ? true:false


const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less then 80"):console.log("more than 80");

