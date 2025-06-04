//foreach loop. ittrate each value in array
//ususally use for function
const coding=["js","rb","c++","python","java"]
//call back funtion donaot have name
coding.forEach( function (item){
    // console.log(item);
    
})
coding.forEach((item)=> {       //arrow funtionn
   // console.log(item);
    
}) 
function printme(item) {        //fention called from outside
    
    // console.log(item);
    
}
coding.forEach(printme)         //it not ony recive item but also recive the index and the array it seldf so we can access all of it here      
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    

})
//use for database api because we recive object in from of array
const mycoding=[
    {
    langName:"javascrpit",
    languagefileName:"js"

},
{
    langName:"c plus plus",
    languagefileName:"c++"
},
    {
    langName:"rubyrails",
    languagefileName:"rb"
}
]
mycoding.forEach((item)=>{
    console.log(item.langName);
    console.log(item.languagefileName);
    
    
})