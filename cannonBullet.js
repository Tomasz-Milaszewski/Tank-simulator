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
    // var canonAngleDegree = getDegree(tank);
    // var canonAngleRadians = canonAngleDegree * (Math.PI / 180);

    // loadingInterval = setInterval(function () {
    //     leftBorderThickness += 2;
    //     loadingBar.style.borderLeftWidth = leftBorderThickness + 'px';
    // }, 50);
    // setTimeout(function () {
    //     clearInterval(loadingInterval);
    //     bulletLoaded = true;
    // }, 3000);
}