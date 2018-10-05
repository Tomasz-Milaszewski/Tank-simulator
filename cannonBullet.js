var spaceCounter = 0;

function cannonBullet() {
    document.addEventListener("keydown", function (event) {
        if (event.code === 'Space') {
            if (spaceCounter % 2 === 0) {
                bulletLoading();
                spaceCounter +=1;
            }
        }
    });
}
cannonBullet();

var loadingInterval;
function bulletLoading() {
    var loadingBar = document.createElement('div');
    loadingBar.classList.add('loadingBar');
    app.appendChild(loadingBar);

    var leftBorderThickness = 0;
    loadingInterval = setInterval(function() {
        leftBorderThickness += 2;
        loadingBar.style.borderLeftWidth = leftBorderThickness + 'px';
    }, 50);
    setTimeout(function () {
        clearInterval(loadingInterval);
    }, 3000);
}