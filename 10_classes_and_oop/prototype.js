
// let myname="hina  "
// console.log(myname.truelenght)
let myherose=["thor","spiderman","hulk"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    hulk:"super jumps",
    getspderpower:function(){console.log(`spidy power is ${this.spiderman}`)}
}
//crete factory funtion
Object.prototype.hina=function(){console.log(`hina is presented in all objects`)}

// heropower.hina()
// myherose.hina()//WE CAN INJECT THE POWER TO ARRAY AS WELL
Array.prototype.heyhina=function(){console.log(`hina says hello`);
}
// heropower.heyhina() 
// just arry has the power not to the other siblings but if assigne 
//  to the Object then implement on all
// myherose.heyhina()





//inheritance




const user={
    name:"hina",
    email:"hina@google.com"
}
const Teacher={
    makeVideo:true

}
const TeacherSupport={
    isavaibel:false
}
const TASupport={
    makeAssigment:'js assigntment',
    fulltime:true,
    __proto__:TeacherSupport
}
Teacher.__proto__=user



//modren synatx
Object.setPrototypeOf(TeacherSupport,Teacher)


let anotherusername="chaiaurcode        "
String.prototype.truelenght = function() {
     console.log(`${this}`)
  
    console.log(`true lenght ${this.trim().length}`);
    

};
anotherusername.truelenght()
"hina".truelenght()
"icetea".truelenght()