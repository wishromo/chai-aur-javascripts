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