const
ground = document.querySelectorAll('.ground'),
mouse = document.querySelectorAll('.mouse'),
scoreBoard = document.getElementById('scoreBoard'),
board = document.getElementById('board'),
m1 = document.getElementById('m1'),
m2 = document.getElementById('m2'),
m3 = document.getElementById('m3'),
m4 = document.getElementById('m4'),
m5 = document.getElementById('m5'),
m6 = document.getElementById('m6');

let groundBefore;
let endGame;
let score;

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
    mouseShow()
    setTimeout(() => {
        endGame = true
    }, 20000);
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

