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
## project 3 solution
```
const clock = document.getElementById('clock'); //they both work same
// const clock=document.querySelector('#clock')

setInterval(function() { // Corrected: 'Function' to 'function'
  let date = new Date();
  // console.log(date.toLocaleTimeString());//for checking
  clock.innerHTML=date.toLocaleTimeString()
}, 1000);
//java script method to set the interval after every specified time and always be written like this its a synatx 1000 mean one second 2000 means two second
```
## project 4 solution
```
// in form we can give the input as submit as well rather the button
let randonNumber=(parseInt(Math.random()*100+1))
const submit=document.querySelector('#subt')
const UserInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let NumGuess=1

let playGames=true
if(playGames){
  submit.addEventListener('click',function(e){
    e.preventDefault()
   const guess=(parseInt (UserInput.value))
   console.log(guess)
   validateGuess(guess)
  })
}
function validateGuess(guess){
  // check the no is that proper value or not
  if(isNaN(guess)){
    alert('Please enter a valid No')
  }
  else if(guess<1){
    alert('Please enter a more then 1')
  }
  else if(guess>100){
    alert('Please enter a no less then 100')
  }
  else{
    prevGuess.push(guess)
    if(NumGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over , Ranadom number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess)
{
//give the message that it it working random no eqaul
if (guess===randonNumber){
  displayMessage(`You guessed it right`)
  endGame()
}
else if(guess<randonNumber){
  displayMessage(`Number is Tooo Low`)
}
else if(guess>randonNumber){
  displayMessage(`Number is Too High`)
}
}
function displayGuess(guess){
  //its a cleanup method
UserInput.value=""
guessSlot.innerHTML+= `${guess},  `
NumGuess++
remaining.innerHTML=`${11-NumGuess}`
}


function displayMessage(message){
  //cleanup guess
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}


function endGame(){
UserInput.value=""
UserInput.setAttribute('disabled',"")
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p)
playGames=false
newGame()
}
function newGame(){
 const newGameButton=document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
   randonNumber=parseInt(Math.random()*100+1)
   prevGuess=[]
   NumGuess=1
   guessSlot.innerHTML=""
   remaining.innerHTML=`${11-NumGuess}`
   UserInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGames=true
 })
}
```
## project 5 solution
```
onst insert=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
insert.innerHTML=`
<div class='color'>

<table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

</div>`

})
```
## project 6 souiton
```
// genrate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};
let intevlId
const StarticRangechangingColor=function(){
  if(!intevlId){
    intevlId= setInterval(changeBgColor,1000)

  }
  function changeBgColor(){
  document.body.style.backgroundColor=randomColor()
 }
}

document.querySelector("#start").addEventListener('click',StarticRangechangingColor)
const StopChangingColor=function(){
clearInterval(intevlId)
int
evlId=null
}
document.querySelector("#stop").addEventListener('click', StopChangingColor)`
```