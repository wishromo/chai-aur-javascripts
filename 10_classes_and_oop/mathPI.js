
const descrpter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descrpter);
Math.PI = 5;
console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 250,
    isaviable: true,
    orderchai:function(){console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "Lemon Chai";

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "Spiced Chai";

console.log(chai.name);
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
    console.log(`${key}:${value}`);

    }
}