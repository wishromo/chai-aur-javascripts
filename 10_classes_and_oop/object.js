
function multiplelyby5(num) {
    return num * 5
}

// Add the 'power' property to the function object
multiplelyby5.power = 2; // You can assign any value here, e.g., 2, 'some value', etc.

console.log(multiplelyby5(5))      // Output: 25
console.log(multiplelyby5.power)   // Output: 2 (Now it shows the value!)
console.log(multiplelyby5.prototype) // Output: { constructor: f multiplelyby5() } 
//and also show the empty {} as aresult means it is the "this" of that function

function createuser(username,score)
{
   this. username=username
   this.score=score
}
createuser.prototype.increment=function(){// selfecreated prototype
    this.score++
}
createuser.prototype.printme=function(){// selfcreated prototype
    console.log(`price is ${this.score}`)
}

const chai= new createuser("chai",25)
const tea= new createuser("tea",250)
//this means jis nay bhi bulaya
chai.printme(chai.increment())


/*
Here,s what happens behind the scenes when the new keyword is used:

A Object is created:The new keyowrd inititates the creation of new javascript object
A  prtotype is linked :the newly created object gets linked to the prototype property
of the constructor function.This means that it has access to prperties and methods defined
on the constructor's prototype.

The cosntructoe is called:The consturctor function is called withthe specified arguments 
and this is bound to the newly created object.If no explicit return value is specifed
fro the constructor,Javascript assumes this,the newly created object,to be the intended return

The new object is returned:After the constuctor function has been called,if it doesn't return a
non-primitive value (Object,array,function etc)the newly creatd object is returned
*/
