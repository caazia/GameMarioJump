const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audioJump');
const audioGameOver = document.querySelector('.audioGameOver');
const textStart = document.querySelector('#text-start');

const jump = () => {
    mario.classList.add('jump');
    audioJump.currentTime = 0.1;
    audioJump.volume = 0.1;
    audioJump.play();


    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./src/imagens/game-over.png';
        mario.style.width= '75px';
        mario.style.marginLeft = '50px';

        audioGameOver.currentTime = 0.1;
        audioGameOver.volume = 0.2;
        audioGameOver.play();

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER 😥</strong>";

        clearInterval(loop);
    } 
}, 10);

document.addEventListener('keydown', jump);