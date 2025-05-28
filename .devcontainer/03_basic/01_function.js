
 function sayMyName()
 {
// console.log("h");
// console.log("i");
// console.log("n");
// console.log("a");
}
sayMyName()   //this is refrence for execuiton
// function AddTwoNo(no1,no2){         //np1 and no2 are parameter
//     console.log(no1+no2);
    


// }
// AddTwoNo()// give nan because parameter or argument are not passed in no1 and no 2
// AddTwoNo(3,4)            //3,4 is argument
// AddTwoNo(3,"4")//change both in string and give 34
// AddTwoNo(3,null)//only give 3
// AddTwoNo(3,a)  cannot be aded one is no other is string
// const result=AddTwoNo(3,5)
// console.log("result",result);// it ginve undefined result





// function AddTwoNo(no1,no2)
// {    
//     let result = no1+no2 
//       console.log(result)
//     return result                      
//     // console.log(no1+no2) //everytihng beforre return will be executed but nothhing after return will be executed

// }


function AddTwoNo(no1,no2)
{   
  return no1+no2                    
   
}
const result = AddTwoNo(3,5)
// console.log("result",result);


// function logInUser(userName){
//     // if(userName === undefined) // give true value
//     if(!userName) //other way to write if sttement er said that username is not equal to value
//     {
//         console.log("Please enter name");
//         return      //the next line will be not executed with this return if condition work
        
//     }
//     return `${userName} just logged in`
// }

// // console.log(logInUser("Hina"))

//  console.log(logInUser())    //  if the arument not passed it will give undefined resull


function logInUser(userName="sam"){ // now the if not executed because mininmunm value "sam" is already in th variable on first console below
    // if(userName === undefined) // give true value
    if(!userName) //other way to write if sttement er said that username is not equal to value
    {
        console.log("Please enter name");
        return      //the next line will be not executed with this return if condition work
        
    }
    return `${userName} just logged in`
}

// console.log(logInUser("Hina"))
// console.log(logInUser())

function ClculateCartPrice(val1,val2,...num1) //rest oparator like spread opreator collect all the arguments and make arry of it
{
    return  num1
}
// console.log(ClculateCartPrice(200,300,400,5000));//give last two elemt=nts becuse in first two the 200 and 300 passed

const user=
{
name:"hina",
price:199
}
function handelObject(anyobject)
{
   console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handelObject(user)        //here we give the name of the object
handelObject({              //you can give object directly
    name:"saeed",
    price:100
})


const newArray=[100,200,300,400]
function ReturnAray(getAray)
{
return getAray[2]
}
// console.log( ReturnAray(newArray));
console.log(ReturnAray([900,500,600]));//here we can give array as well

