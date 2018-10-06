var spaceCounter = 0;

function cannonBullet() {
    document.addEventListener("keydown", function (event) {
        if (event.code === 'Space') {
            if (spaceCounter % 2 === 0) {
                bulletLoading();
                spaceCounter += 1;
                console.log(spaceCounter);
            }
        }
    });
}
cannonBullet();

var loadingInterval;
var bulletLoaded = false;
var bulletShot = false;

function bulletLoading() {
    var loadingBar = document.createElement('div');
    loadingBar.classList.add('loadingBar');
    app.appendChild(loadingBar);

    var leftBorderThickness = 0;
    loadingInterval = setInterval(function () {
        leftBorderThickness += 2;
        loadingBar.style.borderLeftWidth = leftBorderThickness + 'px';
    }, 50);
    setTimeout(function () {
        clearInterval(loadingInterval);
        bulletLoaded = true;
    }, 3000);
}

function trigger() {
    document.addEventListener("keydown", function (event) {
        if (event.code === 'Space') {
            if (spaceCounter % 2 !== 0 && bulletLoaded === true) {
                shot();
                spaceCounter = 0;
                console.log(spaceCounter);
            } else {return;}
        }
    })
}
trigger();

function shot() {
    //bullet creation
    var cannon = document.querySelector('.towerCannon');
    var bullet = document.createElement('div');
    bullet.classList.add('bullet');
    cannon.appendChild(bullet);
    
    //clearing loadingBar
    var loadingBar = document.querySelector('.loadingBar');
    loadingBar.style.display = 'none';

    //bullet movement
    var bulletVelocity = 0.1;
    var bulletTime = 10;
    var topOffset = getPosition(bullet)[0];
    var leftOffset = getPosition(bullet)[1];
    const cannonAngleDegreeStart = getDegree(cannon);
    const cannonAngleRadiansStart = cannonAngleDegreeStart * (Math.PI / 180);
    var cannonAngleDegree = getDegree(cannon);
    var cannonAngleRadians = cannonAngleDegree * (Math.PI / 180);    

    shootingInterval = setInterval(function () {

        if (cannonAngleDegreeStart <= 90 && cannonAngleDegreeStart >= -90) {
            var velocity = bulletVelocity;
            // console.log(leftOffset);
            // console.log(topOffset);
            leftOffset = leftOffset + (velocity * bulletTime) * Math.cos(cannonAngleRadiansStart - cannonAngleRadians);
            // console.log(leftOffset);
            bullet.style.left = leftOffset + 'px';
            
            // var bulletProperties = window.getComputedStyle(bullet);
            // var bulletLeft = bulletProperties.getPropertyValue("left");
            // console.log(bulletLeft);

            topOffset = topOffset + (velocity * bulletTime) * Math.sin(cannonAngleRadiansStart - cannonAngleRadians);
            bullet.style.top = topOffset + 'px';
        } else {
            if (cannonAngleDegree > 90 || cannonAngleDegree < -90) {
            var velocity = bulletVelocity;
            // console.log(leftOffset);
            // console.log(topOffset);
            leftOffset = leftOffset + (velocity * bulletTime) * Math.cos(cannonAngleRadians);
            bullet.style.left = leftOffset + 'px';
            topOffset = topOffset + (velocity * bulletTime) * Math.sin(cannonAngleRadians);
            bullet.style.top = topOffset + 'px';
            } else {
            bulletVelocity = 0;
            }
        }
    }, bulletTime);
    setTimeout(function () {
        clearInterval(shootingInterval);
        bulletShot = true;
        bullet.style.display = 'none';
    }, 3000);
}