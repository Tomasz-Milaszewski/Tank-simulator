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

    var isWPressed = false;
    var isSPressed = false;
    var isAPressed = false;
    var isDPressed = false;
       
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyW') {
            isWPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'KeyW') {
            isWPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyS') {
            isSPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'KeyS') {
            isSPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyA') {
            isAPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'KeyA') {
            isAPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyD') {
            isDPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (event.code === 'KeyD') {
            isDPressed = false;
        }
    })

var tankVelocity = 0.01;
var tankRotationVelocity = 0.01;
var leftOffset = 0;
var topOffset = 0;
var rotationDegree = 0;
var time = 10;

setInterval(function () {
    var tankAngleDegree = getDegree(tank);
    console.log(tankAngleDegree);
    var tankAngleRadians = tankAngleDegree * (Math.PI / 180);
    console.log(tankAngleRadians);

    if (tankAngleDegree <= 90 && tankAngleDegree >= -90) {
        console.log(leftOffset);
        console.log(topOffset);
        if (isWPressed && leftOffset >= -65 && topOffset >= 0) {
            console.log('true');
            velocity = tankVelocity;
            console.log(velocity);
            leftOffset = leftOffset + (velocity * time) * Math.cos(tankAngleRadians);
            tank.style.left = leftOffset + 'px'
            topOffset = topOffset + (velocity * time) * Math.sin(tankAngleRadians);
            tank.style.top = topOffset + 'px'
        }
        if (isSPressed && leftOffset >= -60 && topOffset >= 0) {
            velocity = tankVelocity;
            leftOffset = leftOffset - (velocity * time) * Math.cos(tankAngleRadians);
            tank.style.left = leftOffset + 'px'
            topOffset = topOffset - (velocity * time) * Math.sin(tankAngleRadians);
            tank.style.top = topOffset + 'px'
        } else {
            velocity = 0;
        }
    } else {
        if (tankAngleDegree > 90 || tankAngleDegree < -90) {
            if (isSPressed && leftOffset >= -60 && topOffset >= 0) {
                velocity = tankVelocity;
                leftOffset = leftOffset + (velocity * time) * Math.cos(tankAngleRadians);
                tank.style.left = leftOffset + 'px'
                topOffset = topOffset + (velocity * time) * Math.sin(tankAngleRadians);
                tank.style.top = topOffset + 'px'
            }
            if (isWPressed && leftOffset >= -60 && topOffset >= 0) {
                velocity = tankVelocity;
                leftOffset = leftOffset - (velocity * time) * Math.cos(tankAngleRadians);
                tank.style.left = leftOffset + 'px'
                topOffset = topOffset - (velocity * time) * Math.sin(tankAngleRadians);
                tank.style.top = topOffset + 'px'
            } else {
                velocity = 0;
            }
        }
    }
}, time)


