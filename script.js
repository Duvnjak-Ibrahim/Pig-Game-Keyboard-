'use strict';
// Pulling from Html
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
let scoreText1 = document.querySelector('#score--0');
let scoreText2 = document.querySelector('#score--1');
let player1Active = document.querySelector('.player--0');
let player2Active = document.querySelector('.player--1');
let p1 = document.querySelector("#name--0") 
let p2 = document.querySelector("#name--1") 
let dice = document.querySelector('.dice');
// data values
let player1Turn = true;
let playerWon = false;
let score1 = Math.floor(Math.random() * 6) + 1;
let score2 = Math.floor(Math.random() * 6) + 1;
let scoreTextNum1 = 0;
let scoreTextNum2 = 0;
let sum = 0;
let isPrepared = false

// ************************
// ************************
rollDice.addEventListener('click', function () {
  if(isPrepared == true){
    
    if(playerWon == false){
  if (score1 !== 1 && player1Turn == true) {
    score1 = Math.floor(Math.random() * 6) + 1;
    sum += score1;
    currentScore1.textContent = sum;

    dice.src = `/images/dice-${score1}.png`;
    dice.classList.remove('hidden');



    

    // if score1 isnt 1
  } else if (score2 !== 1 && player1Turn == false) {
    score2 = Math.floor(Math.random() * 6) + 1;
    sum += score2;
    currentScore2.textContent = sum;

    dice.src = `/images/dice-${score2}.png`;
    dice.classList.remove('hidden');
   

    // if score2 isnt 1
  }
  if (score1 === 1) {
    console.log(score1, score2);

    score1 = Math.floor(Math.random() * 6) + 1;
    sum = 0;
    currentScore1.textContent = 0;
    player1Turn = false;
    player1Active.classList.remove('player--active');
    player2Active.classList.add('player--active');

    dice.src = `/images/dice-${1}.png`;
    dice.classList.remove('hidden');

   

    // if score1 is 1
  } else if (score2 === 1) {
    console.log(score1, score2);

    score2 = Math.floor(Math.random() * 6) + 1;
    sum = 0;
    currentScore2.textContent = 0;
    player1Turn = true;
    player1Active.classList.add('player--active');
    player2Active.classList.remove('player--active');

    dice.src = `/images/dice-${1}.png`;
    dice.classList.remove('hidden');

   
    // if score2 is 1
  }}
}
// ROLL FUNCTION FOR BOTH PLAYERS (WHEN U PLAY WITH MOUSE)
});
  // *******************************
  //  *****************************
holdBtn.addEventListener('click', function () {
  if(isPrepared == true){
    if(playerWon == false){
  if (player1Turn == true) {
    scoreTextNum1 += Number(currentScore1.textContent);
    scoreText1.textContent = scoreTextNum1;
    sum = 0;
    currentScore1.textContent = 0;
    player1Turn = false;
    player1Active.classList.remove('player--active');
    player2Active.classList.add('player--active');
    score1 = Math.floor(Math.random() * 6) + 1;
    dice.classList.add('hidden');
    if(scoreTextNum1 >= 30){
        player1Active.classList.remove('player--active');
        player1Active.classList.add('player--winner');
        playerWon=true
    }
  } else if (player1Turn == false) {
    scoreTextNum2 += Number(currentScore2.textContent);
    scoreText2.textContent = scoreTextNum2;
    sum = 0;
    currentScore2.textContent = 0;
    player1Turn = true;
    player1Active.classList.add('player--active');
    player2Active.classList.remove('player--active');
    score2 = Math.floor(Math.random() * 6) + 1;
    dice.classList.add('hidden');
    if(scoreTextNum2 >= 30){
        player2Active.classList.remove('player--active');
        player2Active.classList.add('player--winner');
        playerWon=true
    }

  }}
}
// HOLD BTN FOR BOTH PLAYERS (WHEN U PLAY WITH MOUSE)
});
// ********************************
// ********************************
newBtn.addEventListener('click', function () {
  if(isPrepared == true){
   player1Turn = true;
  score1 = Math.floor(Math.random() * 6) + 1;
  score2 = Math.floor(Math.random() * 6) + 1;
  scoreTextNum1 = 0;
  scoreTextNum2 = 0;
   sum = 0;
    playerWon= false
   currentScore1.textContent = 0;
   currentScore2.textContent = 0;
   scoreText1.textContent = 0
   scoreText2.textContent = 0
   dice.classList.add('hidden');
   player2Active.classList.remove('player--active');
   player1Active.classList.remove('player--winner');
   player2Active.classList.remove('player--winner');
   player1Active.classList.add('player--active');
  }
  // NEW GAME Function
});



document.addEventListener("keydown",function(e){
  if(isPrepared == true){
    console.log(e.key)
    if(e.key === "w"){
      if(playerWon == false){
        if (score1 !== 1 && player1Turn == true) {
          score1 = Math.floor(Math.random() * 6) + 1;
          sum += score1;
          currentScore1.textContent = sum;
      
          dice.src = `/images/dice-${score1}.png`;
          dice.classList.remove('hidden');
    }
    if (score1 === 1) {
      console.log(score1, score2);
  
      score1 = Math.floor(Math.random() * 6) + 1;
      sum = 0;
      currentScore1.textContent = 0;
      player1Turn = false;
      player1Active.classList.remove('player--active');
      player2Active.classList.add('player--active');
  
      dice.src = `/images/dice-${1}.png`;
      dice.classList.remove('hidden')
  }
}
// ROLL FUNCTION FOR PLAYER 1 (KEYBOARD)
}
if(e.key ==="e"){
  if (player1Turn == true) {
    scoreTextNum1 += Number(currentScore1.textContent);
    scoreText1.textContent = scoreTextNum1;
    sum = 0;
    currentScore1.textContent = 0;
    player1Turn = false;
    player1Active.classList.remove('player--active');
    player2Active.classList.add('player--active');
    score1 = Math.floor(Math.random() * 6) + 1;
    dice.classList.add('hidden');
    if(scoreTextNum1 >= 30){
        player1Active.classList.remove('player--active');
        player1Active.classList.add('player--winner');
        playerWon=true
    }
  // HOLD FUNCTION FOR PLAYER 1 (KEYBOARD)
}

}

// *************************
// *************************

if(e.key === "o"){
  if(playerWon == false){
   
   if (score2 !== 1 && player1Turn == false) {
      score2 = Math.floor(Math.random() * 6) + 1;
      sum += score2;
      currentScore2.textContent = sum;
  
      dice.src = `/images/dice-${score2}.png`;
      dice.classList.remove('hidden');
     
  
      // if score2 isnt 1
    }
     if (score2 === 1) {
      console.log(score1, score2);
  
      score2 = Math.floor(Math.random() * 6) + 1;
      sum = 0;
      currentScore2.textContent = 0;
      player1Turn = true;
      player1Active.classList.add('player--active');
      player2Active.classList.remove('player--active');
  
      dice.src = `/images/dice-${1}.png`;
      dice.classList.remove('hidden');
  
     
      // if score2 is 1
    }
}
// ROLL FUNCTION FOR PLAYER 2 (KEYBOARD)
}
if(e.key ==="p"){
 if (player1Turn == false) {
    scoreTextNum2 += Number(currentScore2.textContent);
    scoreText2.textContent = scoreTextNum2;
    sum = 0;
    currentScore2.textContent = 0;
    player1Turn = true;
    player1Active.classList.add('player--active');
    player2Active.classList.remove('player--active');
    score2 = Math.floor(Math.random() * 6) + 1;
    dice.classList.add('hidden');
    if(scoreTextNum2 >= 30){
        player2Active.classList.remove('player--active');
        player2Active.classList.add('player--winner');
        playerWon=true
    }

  }
// HOLD FUNCTION FOR PLAYER 2 (KEYBOARD)
}
if(e.key === "h"){
  player1Turn = true;
  score1 = Math.floor(Math.random() * 6) + 1;
  score2 = Math.floor(Math.random() * 6) + 1;
  scoreTextNum1 = 0;
  scoreTextNum2 = 0;
   sum = 0;
    playerWon= false
   currentScore1.textContent = 0;
   currentScore2.textContent = 0;
   scoreText1.textContent = 0
   scoreText2.textContent = 0
   dice.classList.add('hidden');
   player2Active.classList.remove('player--active');
   player1Active.classList.remove('player--winner');
   player2Active.classList.remove('player--winner');
   player1Active.classList.add('player--active');
  
   // NEW Game 
}

  } 

})


// document.querySelector(".pop-up").classList.add("hidden")


document.querySelector(".x").addEventListener("click",function(){
  document.querySelector(".pop-up").classList.add("hidden")
  document.querySelector(".blackish").classList.add("hidden")
 
})
// WHEN U CLICK X ON POP-UP 

setTimeout(function(){
  document.querySelector(".loading").classList.add("hidden")
},2000)
// LOADING SCREEN Function





document.querySelector(".enter").addEventListener("click",function(){
  if(document.querySelector(".name1").value  &&  

  document.querySelector(".name2").value &&

  document.querySelector(".name1").value  !==  
  
  document.querySelector(".name2").value   ){

    p1.textContent = document.querySelector(".name1").value
    p2.textContent = document.querySelector(".name2").value
    document.querySelector(".nameData").classList.add("hidden")
    isPrepared = true
  }
    //  WHEN U TYPE NAME CORRECTLY ENOUGH 
    //  THIS WILL TAKE VALUES FORM INPUTS AND PUT THEM IN GAME
})

console.log("hello yo");