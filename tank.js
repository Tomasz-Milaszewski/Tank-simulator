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

const tankVelocity = 0.1;
const tankRotationVelocity = 0.1;
var isWPressed = false;
var isSPressed = false;
var isAPressed = false;
var isDPressed = false;
var leftOffset = 0;
var topOffset = 0;
var rotationDegree = 0;
var time = 100;

setInterval(function () {
    var tankAngleDegree = getDegree(tank);
    var tankAngleRadians = tankAngleDegree * (Math.PI / 180) + 'deg';

    if (tankAngleDegree <= 90 && tankAngleDegree >= -90) {
        if (isWPressed && leftOffset >= -60 && topOffset >= 0) {
            velocity = tankVelocity;
            leftOffset = leftOffset + (tankVelocity * time) * Math.cos(tankAngleRadians);
            tank.style.left = leftOffset + 'px'
            topOffset = topOffset + (tankVelocity * time) * Math.sin(tankAngleRadians);
            tank.style.top = topOffset + 'px'
        }
        if (isSPressed && leftOffset >= -60 && topOffset >= 0) {
            velocity = tankVelocity;
            leftOffset = leftOffset - (tankVelocity * time) * Math.cos(tankAngleRadians);
            tank.style.left = leftOffset + 'px'
            topOffset = topOffset - (tankVelocity * time) * Math.sin(tankAngleRadians);
            tank.style.top = topOffset + 'px'
        } else {
            tankVelocity = 0;
        }
    } else {
        if (tankAngleDegree > 90 || tankAngleDegree < -90) {
            if (isSPressed && leftOffset >= -60 && topOffset >= 0) {
                velocity = tankVelocity;
                leftOffset = leftOffset + (tankVelocity * time) * Math.cos(tankAngleRadians);
                tank.style.left = leftOffset + 'px'
                topOffset = topOffset + (tankVelocity * time) * Math.sin(tankAngleRadians);
                tank.style.top = topOffset + 'px'
            }
            if (isWPressed && leftOffset >= -60 && topOffset >= 0) {
                velocity = tankVelocity;
                leftOffset = leftOffset - (tankVelocity * time) * Math.cos(tankAngleRadians);
                tank.style.left = leftOffset + 'px'
                topOffset = topOffset - (tankVelocity * time) * Math.sin(tankAngleRadians);
                tank.style.top = topOffset + 'px'
            } else {
                tankVelocity = 0;
            }
        }
    }
}, time)

