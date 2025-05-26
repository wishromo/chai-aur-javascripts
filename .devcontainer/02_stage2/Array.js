//Array
const myArr=[1,2,3,4,5]
const myHeros=['superman','spiderman','wonderwoman']
// console.log(myArr[2]);
const myArr2= new Array(1,2,3,4)
//Array Method
// myArr.push(6)//add value 
// console.log(myArr);
// myArr.push(7)//add value 
// console.log(myArr);
// myArr.pop(6)// remove the last elemnt from array
// console.log(myArr);
// myArr.unshift(9)//add the 9 to start of the arry and change the location off all element
// console.log(myArr);
// myArr.shift()//dont not give any element in it remove 9 form the arry

// console.log(myArr);
// console.log(myArr.includes(4));//give answer in true or false
// console.log(myArr.indexOf(4));//give the vlue at inder 4

 const newArr=myArr.join()//join two array and convert to string
// console.log(newArr);
// console.log(typeof newArr);//tell us that its type is string

//slice,splice
console.log("A",myArr);


const my1=myArr.slice(1, 3)//
console.log("B", myArr)
console.log(my1);

const my2=myArr.splice(1, 3)// change the original arry and gove the specific data
console.log("C", myArr)

console.log(my2);













