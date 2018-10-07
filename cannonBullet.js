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
    const app = document.querySelector('.tankContainer');
    var bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = setBulletPosition()[0] + 'px';
    bullet.style.top = setBulletPosition()[1] + 'px';
    app.appendChild(bullet);
    
    //clearing loadingBar
    var loadingBar = document.querySelector('.loadingBar');
    loadingBar.style.display = 'none';

    //bullet movement
    var bulletVelocity = 0.1;
    var bulletTime = 10;
    var leftOffset = setBulletPosition(bullet)[0];
    var topOffset = setBulletPosition(bullet)[1];
    const tankAngleDegreeStart = getDegree(tank);
    const tankAngleRadiansStart = tankAngleDegreeStart * (Math.PI / 180);
    const bulletAngleDegreeStart = setBulletPosition(bullet)[2];
    const bulletAngleRadiansStart = bulletAngleDegreeStart * (Math.PI / 180);

    shootingInterval = setInterval(function () {
         
        if (bulletAngleDegreeStart <= 90 && bulletAngleDegreeStart >= -90) {
            var velocity = bulletVelocity;
            leftOffset = leftOffset + (velocity * bulletTime) * Math.cos(bulletAngleRadiansStart + tankAngleRadiansStart);
            bullet.style.left = leftOffset + 'px'
            topOffset = topOffset + (velocity * bulletTime) * Math.sin(bulletAngleRadiansStart + tankAngleRadiansStart);
            bullet.style.top = topOffset + 'px'
        } else {
            if (bulletAngleDegreeStart > 90 || bulletAngleDegreeStart < -90) {
            var velocity = bulletVelocity;
            leftOffset = leftOffset + (velocity * bulletTime) * Math.cos(bulletAngleRadiansStart + tankAngleRadiansStart);
            bullet.style.left = leftOffset + 'px';
            topOffset = topOffset + (velocity * bulletTime) * Math.sin(bulletAngleRadiansStart + tankAngleRadiansStart);
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