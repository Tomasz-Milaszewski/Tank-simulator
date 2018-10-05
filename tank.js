//generates tank and sends it to battlefield
const app = document.querySelector('.tankContainer');
const tank = document.createElement('div');
const tankTower = document.createElement('div');
const towerCannon = document.createElement('div');

tank.classList.add('tank');
towerCannon.classList.add('towerCannon');
tank.appendChild(towerCannon);
tankTower.classList.add('tankTower');
tank.appendChild(tankTower);
app.appendChild(tank);

//tank movement
// console.log(tank.getBoundingClientRect());
// console.log(tank.getBoundingClientRect().top);
// console.log(tank.getBoundingClientRect().right);
// console.log(tank.getBoundingClientRect().bottom);
// console.log(tank.getBoundingClientRect().left);

const tankVelocity = 0.1;
const tankRotationVelocity = 0.1;
var isWPressed = false;
var isSPressed = false;
var isAPressed = false;
var isDPressed = false;
var leftOffset = 0;
var topOffset = 0;
var rotationDegree = 0;
var time = 10;

getDegree(tank);

window.addEventListener('keydown', function (event) {
    if (event.code === 'LeftArrow') {
        isWPressed = true
        console.log('true');
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'W') {
        isWPressed = false;
    }
})
window.addEventListener('keydown', function (event) {
    if (event.code === 'S') {
        isSPressed = true;
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'S') {
        isSPressed = false;
    }
})
window.addEventListener('keydown', function (event) {
    if (event.code === 'A') {
        isAPressed = true;
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'A') {
        isAPressed = false;
    }
})
window.addEventListener('keydown', function (event) {
    if (event.code === 'D') {
        isDPressed = true;
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'D') {
        isDPressed = false;
    }
})

// setInterval(function () {
//     if (letsPlayLock) { return; }
//     if (isLeftArrowPressed && leftOffset >= 1) {
//         velocity = basketVelocity;
//         leftOffset = leftOffset - basketVelocity * basketTime;
//         basket.style.left = leftOffset + 'px'
//     }
//     //right move includes limiting condition for wider basket - limitation from the right
//     if (isRightArrowPressed && leftOffset <= 449 && (leftOffset + basket.getBoundingClientRect().width) < 500) {
//         velocity = basketVelocity;
//         leftOffset = leftOffset + basketVelocity * basketTime;
//         basket.style.left = leftOffset + 'px'
//     } else {
//         velocity = 0;
//     }
//     PageTransitionEvent
// }, basketTime)

