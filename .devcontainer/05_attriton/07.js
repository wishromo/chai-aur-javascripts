//map return the value 
 const myNumw=[1,2,3,4,5,6,7,8,9,10]
//  const newNums=myNumw.map((num)=>num+20)
//const newNums=myNumw.map((num)=>{ return num+20})//if we use scope then we have to wirte return with it
const newNums=myNumw
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num >= 40)//chaining of diffrent maps an filter
 console.log(newNums);
 