const myNums=[1,2,3]

// const myTotal= myNums.reduce (function(acc,curval) {
//     // console.log(`acctural value:${acc} and currentvalue:${curval}`);
    
//     return acc+curval

    
// },0)
const myTotal=myNums.reduce( (acc,cur) => acc+cur ,0)

//console.log(myTotal);
 const ShoppingCart=[{itemName:"js course",price:999},
    {itemName:"Data science course",price:4334},
    {itemName:"mobile development course",price:2423},
    {itemName:"ryby rail cours",price:2423}]
    const total=ShoppingCart.reduce((acc,item)=> acc+ item.price,0)
    console.log(total);     
