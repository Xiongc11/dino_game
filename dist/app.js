const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }

    setTimeout(function() {
        dino.classList.remove('jump');
    }, 300)
}

let isAlive = setInterval(function() {
    // Get Current Dino Y Position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));



    //Get Current Dino X Position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // detect collision
    if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140) {
        // console.log('collision');
        alert('Game Over!!! You Dead!!!')
    }
  

}, 10);

document.addEventListener('keydown', function(e){
    jump();
});