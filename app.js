const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const startButton = document.querySelector('.btn-start');
const restartButton = document.querySelector('.btn-restart');

const audioStart = document.querySelector('.audioStart');
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

const startGame = () => {
    textStart.innerHTML = "";
    

    pipe.classList.add('pipe-animation')
    audioStart.volume = 0.1;
    audioStart.play();
}


const restartGame = () => {
    mario.src = './src/imagens/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0';

    audioGameOver.pause();

    audioStart.play();
    audioStart.volume = 0.1;
    audioStart.currentTime = 0.1;

    clearInterval(loop);
    startGame();
}



const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {


        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        audioStart.pause();
        audioStart.currentTime = 0;

        audioGameOver.currentTime = 0.1;
        audioGameOver.volume = 0.2;
        audioGameOver.play();

        document.getElementById("text-start").style.color = "red";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER 😥</strong>";

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
