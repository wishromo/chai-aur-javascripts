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