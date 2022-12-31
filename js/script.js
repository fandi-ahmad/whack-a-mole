const
ground = document.querySelectorAll('.ground'),
mouse = document.querySelectorAll('.mouse'),
scoreBoard = document.getElementById('scoreBoard'),
scoreBoard2 = document.getElementById('scoreBoard2'),
board = document.getElementById('board'),
m1 = document.getElementById('m1'),
m2 = document.getElementById('m2'),
m3 = document.getElementById('m3'),
m4 = document.getElementById('m4'),
m5 = document.getElementById('m5'),
m6 = document.getElementById('m6'),
time = document.getElementById('time'),
whiteBoard = document.getElementById('whiteBoard'),
playBtn = document.getElementById('playBtn'),
textHead = document.getElementById('textHead'),
img = document.getElementById('img'),
scoreEnd = document.getElementById('scoreEnd')

let groundBefore;
let endGame;
let score;
let duration;

function randomGround(ground) {
    let g= Math.floor(Math.random() * ground.length);
    const gRandom = ground[g];
    if (gRandom == groundBefore) {
        randomGround(ground)
    }
    groundBefore = gRandom
    return gRandom
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function mouseShow() {
    const gRandom = randomGround(mouse);
    const tRandom = randomTime(200, 700)
    gRandom.classList.add('mouse-show');

    setTimeout(() => {
        gRandom.classList.remove('mouse-show');
        if (!endGame) {
            mouseShow()
        }
    }, tRandom);
}

function startGame() {
    endGame = false
    score = 0
    scoreBoard.innerText = 0
    duration = 10
    time.innerText = duration
    countDown()
    mouseShow()

    whiteBoard.classList.add('d-none')

    setTimeout(() => {
        endGame = true
    }, 10000);
}

function punch() {
    score++
    scoreBoard.innerText = score

    m1.classList.remove('mouse-show')
    m2.classList.remove('mouse-show')
    m3.classList.remove('mouse-show')
    m4.classList.remove('mouse-show')
    m5.classList.remove('mouse-show')
    m6.classList.remove('mouse-show')
}

mouse.forEach(m => {
    m.addEventListener('click', punch)
});

function countDown() {
    duration--
    const td = setInterval(() => {
        time.innerText = duration
        duration--
    }, 1000);
    
    setTimeout(() => {
        clearInterval(td)
        whiteBoard.classList.remove('d-none')

        img.classList.add('d-none')
        scoreEnd.classList.remove('d-none')

        scoreBoard2.innerText = score
        playBtn.innerText = 'Try Again'
    }, 10000);
}