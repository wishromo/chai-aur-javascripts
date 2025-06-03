// for 
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5) {
//          console.log("5 is best no"); 
//     }
//     console.log(element); 
// }
//console.log(element); //it s give error because scope i out
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(`Outer loop value :${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         // console.log(`inner  loop value :${j} and outer loop value :${i}`);
//         console.log(i+' * '+j+" = "+i*j);
        
    
//     }
    
// }

let myArray=["flash","batman","spiderman","superman"]
// console.log(myArray.length);

// for (let i = 0; i <= myArray.length; i++) {          //if we write = sign with it it gives all array index but give undefiend at the end at there is nothing equal to it
// for (let i = 0; i <= myArray.length; i)              // if we remove i++ it will only print the 0 index of the array and run infinite to stop it Ctrl+C
//     {
    for (let i = 0; i <= myArray.length; i++) 
    {
    const element = myArray[i];
    // console.log(`array value ${myArray[i]}`);
    // console.log(element);// it can be written like this as well
    }
    //break and continue key words
    // for (let i = 1; i <= 20; i++) {
    //     if (i==5) {
    //        console.log("5 reached");
    //        break     // work like switch break to control flow
    //     }
    //  console.log(`value of i is : ${i}`)
        
    // }
    for (let i = 1; i <= 20; i++) {
        if (i==5) {
           console.log("5 reached");
           continue     // it will reach to the 5 no then it skip that no and move fuhter means for that time it will pass it without problem and do not come out of loop
        }
     console.log(`value of i is : ${i}`)
        
    }
    

