/* Find classes or IDs */
let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");
let clue3 = document.querySelector("#clue-3");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

/* Your Code Here */
const keysPressed=[];
const secretCode="what";
const numericCode="911";
const finalWord="Supercalifragilisticexpialidocious";


window.addEventListener("keypress", (e) => {
  console.log(e.key);
  keysPressed.push(e.key);
  console.log(keysPressed);
  //4 character long password --> use slice method and the array only stays 4 chars long
  let attemptedSecret=keysPressed.slice(-secretCode.length);
  //console.log(attemptedSecret);
  if(attemptedSecret.join("")===secretCode){
    console.log("Password submitted!");
    clue1.classList.add("hidden");
    button.classList.remove("hidden");
  }
  //updating the if statement for the second passcode
  let attemptedNum=keysPressed.slice(-numericCode.length);
  if(attemptedNum.join("")===numericCode){
    console.log("You got it correct")
    button.classList.add("hidden");
    clue2.classList.add("hidden")
    clue3.classList.remove("hidden");
  }
  let attemptedFinal=keysPressed.slice(-finalWord.length);
  if(attemptedFinal.join("")===finalWord){
    page.classList.remove("has-background-black");
    body.innerHTML='<figure class="image center"><img id="main" src="http://zacharytotah.com/wp-content/uploads/2017/09/DiCaprio-Welcome-to-the-Club-Meme.jpg" alt="Welcome to the Club"></figure>';
  } 
})

let startButton=document.querySelector("#start-button");
startButton.addEventListener("click", ()=> {
  var alert1="You have run out of time!"
  setTimeout(alert, 60000, alert1);
});



