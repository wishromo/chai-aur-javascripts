#project related to DOm
## projectlink
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solotion code
## project 1
```javascript
console.log('hina')
 const buttons=document.querySelectorAll('.button')
//  console.log(buttons)
const body=document.querySelector("body")
// buttons.forEach(function(button)
// {
//  console.log(button)
// button.addEventListener('click',function(e)
// {
// console.log(e)
// console.log(e.target)
// with if 
// if(e.target.id==="grey")
// {
//   body.style.backgroundColor=e.target.id
// }
// if(e.target.id==="white")
// {
//   body.style.backgroundColor=e.target.id
// }
// if(e.target.id==="blue")
// {
//   body.style.backgroundColor=e.target.id
// }
// if(e.target.id==="yellow")
// {
//   body.style.backgroundColor=e.target.id
// }
// })
// })
// with switches
//   const colors=e.target.id
// switch (colors) 
// {
//     case "grey":
//       body.style.backgroundColor=e.target.id
//         break;
//     case "white":
//       body.style.backgroundColor=e.target.id
//         break;
//     case "blue":
//       body.style.backgroundColor=e.target.id
//         break;
    
       

//     default:
//       body.style.backgroundColor=e.target.id
//         break;
// }



// })})
//with simple on line
buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(e) {
      console.log(e);
      console.log(e.target);

      // Directly set the background color to the ID of the clicked element.
      // This works because e.target.id is expected to be a valid CSS color name.
      body.style.backgroundColor = e.target.id;
  });
});



```
## project 2 solution
```
const form=document.querySelector('form')

// const height=parseInt (document.querySelector('height').value)
//this use case will give u empty value because the event is not performed yet
form.addEventListener('submit',function(e){
  e.preventDefault()
 const height=parseInt (document.querySelector('#height').value)
 const weight=parseInt((document.querySelector('#weight').value))
 const results=document.querySelector('#results')
 if (height===""||height<0||isNaN(height)){
   results.innerHTML=`please give a valid height ${height}`

 }
 else if (weight===""||weight<0||isNaN(weight)){
  results.innerHTML=`please give a valid weight ${weight}`

}
else {const bmi=(weight/((height*height)/10000)).toFixed(2)
  //show the result
  results.innerHTML=`<span>${bmi}</span>`
  //assignment given
  if (bmi < 18.6) {
    results.innerHTML += `<br><span>You are Under Weight</span>`; // Use += to append
} else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML += `<br><span>You are in Normal Range</span>`;
} else if (bmi >= 24.9) { // Or simply else if (bmi > 24.9)
    results.innerHTML += `<br><span>You are Overweight</span>`;
}

else if (bmi > 29.9) {
    results.innerHTML += `<br><span>You are Obese</span>`;
}
}
}) 
```