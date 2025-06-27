// // fetch('https://jsonplaceholder.typicode.com/posts').then().catch().finally();//three promises
 




const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('asyn task one is complete');
        resolve();
    }, 1000);
});
promiseOne.then(function(){console.log('promise 1 consumed')})//conecton with resolve



 new Promise(function(resolve,reject){
    setTimeout(function () {
       console.log("Asyn task 2") 
       resolve()//if it written outside of the funtion first that function will run then the
       //  settime out function will resolve but if written wiht settimeout then that funtion will happen first
    },1000)
 })
 .then(function(){console.log('promise 2 completed')})

const promoisethree=new Promise(function(resolve, reject)  {
    setTimeout(function(){
        resolve({username:"chai",email:"chaiaurcode@gmail.com"})
    } ,1000)
})
promoisethree.then(function(user){
console.log(user)
})



const promisefour=new Promise((resolve, reject) => {
    setTimeout(function(){ 
        let error=false
        if(!error){
            resolve({usename:"hina",passwordd:"1234"})
        }else
        reject('error:somthing wrong')
    } ,1000)
})
promisefour.then(function(user)
{
    console.log(user)
    return user.usename
})
.then(function(usename)
{
    console.log(usename)
})
.catch(function(error)
{
    console.log(error)
})
.finally(()=>{console.log("the promise is either resolve or rejected")})





const promisefive=new Promise(function(resolve, reject) 
{setTimeout( function(){
    let error=false
    if(!error){
        resolve({username:"javascript",passwordd:"345"})
    }else{
        reject("js went wrong")
    }
},1000)
    
})


async function consumepromisefive()
 {
   try
   { 
    const response=await promisefive//promisefive is object
    console.log(response)
}
catch(error)
{
    console.log(error)
}}
consumepromisefive()


// async function getalluser() {
//    try {
//     const response=await fetch('http://jsonplaceholder.typicode.com/users')
//   const data= await response.json()
//   console.log(data)
//    } catch (error) {
//     console.log("e:",error)
//    }
// }
// getalluser()
fetch('http://api.github.com/users/hiteshchoudhary')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch(()=>{console.log(error)})
.finally(()=>{console.log("data revcived")})