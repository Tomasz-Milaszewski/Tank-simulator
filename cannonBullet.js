var spaceCounter = 0;

function cannonBullet() {
    console.log('cannonBullet welcome');
    document.addEventListener("keyDown", function (event) {
        if (event.code === 'Space') {
            console.log('space pressed');
            if (spaceCounter % 2 === 0) {
                console.log('spaceCounter even');
                bulletLoading();
                console.log(spaceCounter);
                spaceCounter +=1;
                console.log(spaceCounter);
            }
        }
    });
}
cannonBullet();

var loadingInterval;
function bulletLoading() {
    var loadingBar = document.createElement('div');
    loadingBar.classList.add('loadingBar');
    loadingBar.innerText = 'Bullet loading';
    app.appendChild(loadingBar);

    loadingInterval = setInterval(function() {
        var leftBorderThickness = 0;
        leftBorderThickness += 1;
        loadingBar.style.borderLeftWidth = leftBorderThickness + 'px';
    }, 50);
    setTimeout(function () {
        clearInterval(loadingInterval)
    }, 3000);
}