const user={
    username:"hina",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this) // this give the object  expalination and what is inside it

    }
}
// user.welcomemessage()
// user.username="saeed"
// user.welcomemessage()
// ;
// console.log(this)// outsie the scope it says that it is object with this {} sign
//in browser it give window object because before vs code it was executed in browser so it was  window object or pre requsite object
//  function chai(){
//     let username="hina"
//     console.log(this.username)//this now woek in funtion becuse it give undefiend in return when calling it out
//  }chai()
// const chai= function(){     //this function also give undefiend beacuse it is in varable but remaining logic is same that this do jot woek in funtion
//     let username="hina"
//     console.log(this.username)
// } 
// chai()
const chai=()=>{            //this is arrow funtion but working is same
    let username="hina"
    // console.log(this.username)

}
chai()
//
// const addtwo=(num1,num2)=>{     //we can give argument in in
//     return num1+num2
// }
//  console.log(addtwo(4,5)); 
           //implicit return
//  const addtwo=(num1,num2)=>  num1+num2       //the arrow function can be written like this as well
    // const addtwo=(num1,num2)=>  (num1+num2)   //if write in parenthesis then there is no need to write return but if write the arrow funtion in bracket then return keyword is important
 const addtwo=(num1,num2)=> ({username:"hina"})  //in case of object it should be wrpe in paranthesis
console.log(addtwo(4,5));           //
