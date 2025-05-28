// const tinderuser= new Object()//first way to defin  singleton eobject
const tinderuser={ }  //other way to define  non singleton object
tinderuser.id="abc123"
tinderuser.name="hina"
tinderuser.islogedIn=false


// console.log(tinderuser);
const regUser={
email:"hinasaedaa@gmail.com",
fullName:                               //OBJECT IN OBJECT
{             
    userFullNmae:                       //ANOTHER OBJECT IN OBJECT
    {
        firstName:"HINA IQBAL",
        lastName:"Muhammad Iqbal"
    }

}
}
// console.log(regUser.fullName)
// console.log(regUser.fullName.userFullNmae.lastName)
// combing two object like array
const obj1={
    1:"a",
    2:"b"

}
const obj2={
    3:"c",
    4:"d"

}
const obj4={
    5:"e",
    6:"f"

}

// const obj3={obj1,obj2}
// console.log(obj3);//same probelm like array it will be combined but like two other object not like one object
// const obj3=Object.assign(obj1,obj2)//this will add keys of th eboth object with values

// console.log(obj3);
// const obj3=Object.assign({},obj1,obj2,obj4)
//  console.log(obj3);
 //so the last way of combing two object is by spread opreator

const obj3={...obj1,...obj2,...obj4}

// console.log(obj3)
const user=[                        //array with multiple object
                                    // two way to acces it first rhrough mapin ohter way is here
    {
        id:1,
        name:"hira"
    },
    {
        id:1,
        name:"moshin"
    },
    {
        id:1,
        name:"raza"
    }
]
// console.log(user[0])//give the full object on this location in array
// console.log(user[1].name) //its a arry so first we five the location of the elment which is object the acces the name in it

// console.log(tinderuser);
//to acces the keys in object for loop 
// console.log(Object.keys(tinderuser));
// console.log(Object.values(user[2]));//we can getn value of any object
// console.log(Object.entries(user));//give entries for the object user in array
console.log(tinderuser.hasOwnProperty("islogedIn"));//if we use it in loop and if the property not exist so we use this way to acces the propert in obect it gibve answer in boolean




