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
scoreEnd = document.getElementById('scoreEnd'),
preTime = document.getElementById('preTime'),
preTimeBoard = document.getElementById('preTimeBoard')

let groundBefore;
let endGame;
let score;
let duration;
let preDuration;
let gameTime = 15

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
    duration = gameTime
    preDuration = 3
    scoreBoard.innerText = 0
    
    whiteBoard.classList.add('d-none')
    preTimeBoard.classList.remove('d-none')
    
    time.innerText = duration
    preTime.innerText = preDuration
    preTimer()

    setTimeout(() => {
        countDown()
        mouseShow()
    
        setTimeout(() => {
            endGame = true
        }, gameTime + '000');
    }, 3000);
    
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

        textHead.classList.add('d-none')
        img.classList.add('d-none')
        scoreEnd.classList.remove('d-none')

        scoreBoard2.innerText = score
        playBtn.innerText = 'Try Again'
    }, gameTime + '000');
}

function preTimer() {
    setTimeout(() => {
        preTime.style.fontSize = '200px'
    }, 50);
    const pt = setInterval(() => {
        preDuration--
        preTime.innerText = preDuration
        preTime.style.fontSize = '300px'
        setTimeout(() => {
            preTime.style.fontSize = '200px'
        }, 50);
    }, 1000);

    setTimeout(() => {
        clearInterval(pt)
        preTimeBoard.classList.add('d-none')
        setTimeout(() => {
            preTime.style.fontSize = '300px'
        }, 50);
    }, 3000);
}

window.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);