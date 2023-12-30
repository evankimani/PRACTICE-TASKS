let secretNumber=Math.floor(Math.random()*20);
//console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function(){
   const guess= document.querySelector('.guess')
   guess.value='secretNumber'
   console.log(guess)
})