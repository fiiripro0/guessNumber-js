'use strict';

let secretNumber= Math.round(Math.random()*20)+1
let score =20
let hightScore=0

console.log(secretNumber);


document.querySelector('.check').addEventListener('click',()=>{
    let guess = Number( document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').innerHTML="pls SRART guessing"
    }else if(guess !== secretNumber){
        document.querySelector('.message').innerHTML=guess > secretNumber? "Too High!" : "Too low!"
        // document.querySelector('.message').textContent=guess>secretNumber?"Too Hight!":"Too Low!";
        score--
        document.querySelector('.score').textContent=score
        if(score<=0){
            document.querySelector('.message').innerHTML="Game Over! You lost all your points"
            document.querySelector('body').style.backgroundColor="#ff3333"
            document.querySelector('.score').innerHTML=0
        }
    }else if(guess === secretNumber){
        document.querySelector('.message').innerHTML="Congratulations! You guessed it right"
        document.querySelector('body').style.backgroundColor="#60b347"
        document.querySelector('.number').innerHTML=guess
        document.querySelector('.number').style.width="200px"
        if(score > hightScore) {hightScore=score}
        document.querySelector('.highscore').innerHTML=hightScore
    }
    console.log(guess,secretNumber);
})

document.querySelector('.again').addEventListener('click', function (){
    // hightScore=0;
    document.querySelector('.message').textContent='starting again'
    document.querySelector('.number').textContent='?'
    document.querySelector('.score').textContent=20
    document.querySelector('body').style.backgroundColor="#2196F3"
    document.querySelector('.guess').value=''
    document.querySelector('.number').style.width="150px"
    secretNumber= Math.round(Math.random()*20)+1
    score=20;

})