//for each do not return any value
// const coding=["js","rb","c++","python","java"]
// const valu=coding.forEach((item)=>{
//  console.log(item);
//  return item

// })
// console.log(valu);//it will return undefined 


//it return the value by filter
const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newNums= mynums.filter( (num)=>num>4)// //arrow funtion in line and we give condition

// console.log(newNums);

// const newNums=mynums.filter((num)=>{ //if we do not write it in one line with the conditon so we shuld give the codition with return if use scope for it
//  return num >4 
    
// })
//  console.log(newNums);
const newnums=[]//it is the long way to use the foreach loop not filter
mynums.forEach((num)=>{
    if (num>4) {
          newnums.push(num)
    }
  
})
   // console.log(newnums);
    //a book arry with multiple object
   const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publish: 1979,
    edition: 2004 // Year of a recent edition
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: 2008 // Year of a recent edition
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: 2014 // Year of a recent edition
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: 1996 // Year of a recent edition
  },
  {
    title: "Dune",
    genre: "Science Fiction",
    publish: 1965,
    edition: 2008 // Year of a recent edition
  },
  {
    title: "The Great Gatsby",
    genre: "Classics",
    publish: 1925,
    edition: 2004 // Example recent edition year
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 2018 // Example recent edition year
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: 2001 // Example recent edition year
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    publish: 2011,
    edition: 2015 // Example recent edition year
  },
  {
    title: "The Alchemist",
    genre: "Philosophical Fiction",
    publish: 1988,
    edition: 2006 // Example recent edition year
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publish: 1951,
    edition: 2001 // Example recent edition year
  },
  {
    title: "Fahrenheit 451",
    genre: "Dystopian",
    publish: 1953,
    edition: 2013 // Example recent edition year
  },
  {
    title: "Jane Eyre",
    genre: "Gothic Fiction",
    publish: 1847,
    edition: 2006 // Example recent edition year
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2012 // Example recent edition year
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publish: 1851,
    edition: 2002 // Example recent edition year
  }
];

// const userBooks=books.filter((bk)=>bk.genre==="Fantasy")
const userBooks=books.filter((bk)=>{ 
    return bk.publish>=1995 && bk.genre==="Fantasy"})
console.log(userBooks);
