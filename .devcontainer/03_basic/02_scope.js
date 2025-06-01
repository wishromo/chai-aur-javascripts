// let a=20             //global variable
// const b=30           //there values are availbel in block
// var c=45
var c=300               //we difne again c here with othe value but it would not print because it see the c varibel value in block
let a= 300
//{}              //this is scope come with if else or function but if come with object then there we define object
if (true){          //{}when it come with function or if thaen it is called scoope
    let a=20            //block variabel
const b=30              //there values cannot go outside of the block
var c=45
//  console.log("inner",a);
// console.log(a);

 
//  console.log(b)         ///if we  give console inside the if then it will not give error
//  console.log(c)

}

// variable a and b give error but c print he valuse althiogh all of them are in the same if but we define varibale inside the if and console outside the if



//  console.log(a);
// console.log(b)
// console.log(c)


function one(params)
 {
    const userName="hina"
     function Two()
     {
        const website="youtube"
        console.log(userName);
        
     }
    //  console.log(website);  //this will give error because the father function is trying to acces baby functio
     Two()
    

}
// one()
if(true)
{
    const userName="Hina"
    if(userName ==="Hina")
    {
        const website="  Youtube"
        // console.log(userName+website);
        
  
    }
    
// console.log(website); //it give eror becuse website varibale is indside the baby if and from father if it is acciesing

}
//console.log(userName);    //it give error because user name is accesing from out side of the father if scope


// **********************intresting concept************//
// console.log(addone(5)) //it can be called here as well nothing wrong with it
function addone(num)
{
    return num+1
} 

console.log(addone(5))

// console.log(addtwo(5)) //this will give errrir because funciton is called but it is in varibale and it come in hoisting concept 

 const addtwo=function addtwo(num)
{
    return num+2
} 
console.log(addtwo(5));
