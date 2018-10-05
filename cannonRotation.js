var rCounter = 0;
function cannonControlManager() {
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyR') {
            rCounter === 0 ? rCounter += 1 : rCounter = 0;
        }
    })
}
cannonControlManager();

function cannonRotationMouse() {
    document.addEventListener("mousemove", function (event) {
        if (rCounter === 1) { return; }
        calculatesRotation(event);
    });

    function calculatesRotation(e) {
        var x = e.clientX;
        var y = e.clientY;

        var cannon = document.querySelector('.towerCannon');
        var cannonCenterX = (cannon.getBoundingClientRect().left + cannon.getBoundingClientRect().right) / 2;

        var cannonCenterY = (cannon.getBoundingClientRect().top + cannon.getBoundingClientRect().bottom) / 2;
        var deltaX = x - cannonCenterX;
        var deltaY = y - cannonCenterY;

        var tankAngleDegree = getDegree(tank);

        if (deltaX > 0) {
            var cannonAngleRadians = Math.atan(deltaY / deltaX);
            var cannonAngleDegrees = cannonAngleRadians * (180 / Math.PI) - tankAngleDegree;
            cannon.style.transform = 'rotate(' + cannonAngleDegrees + 'deg)';
        } else {
            var cannonAngleRadians = Math.atan(deltaY / deltaX);
            var cannonAngleDegrees = cannonAngleRadians * (180 / Math.PI) + 180 - tankAngleDegree;
            cannon.style.transform = 'rotate(' + cannonAngleDegrees + 'deg)';
        }
    }
}

var isQPressed = false;
var isEPressed = false;

function cannonRotationKeys() {
    window.addEventListener('keydown', function (event) {
        if (rCounter === 0) { return; }
        if (event.code === 'KeyQ') {
            isQPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (rCounter === 0) { return; }
        if (event.code === 'KeyQ') {
            isQPressed = false;
        }
    })
    window.addEventListener('keydown', function (event) {
        if (rCounter === 0) { return; }
        if (event.code === 'KeyE') {
            isEPressed = true;
        }
    })
    window.addEventListener('keyup', function () {
        if (rCounter === 0) { return; }
        if (event.code === 'KeyE') {
            isEPressed = false;
        }
    })

    var cannonTime = 10;
    
    setInterval(function () {
        var cannon = document.querySelector('.towerCannon');
        var cannonRotationVelocity = 0.06;
        var cannonAngleDegree = getDegree(cannon);

        if (isQPressed) {
            cannonAngleDegree = cannonAngleDegree - (cannonRotationVelocity * cannonTime);
            cannon.style.transform = 'rotate(' + cannonAngleDegree + 'deg)';
        }
        if (isEPressed) {
            cannonAngleDegree = cannonAngleDegree + (cannonRotationVelocity * cannonTime);
            cannon.style.transform = 'rotate(' + cannonAngleDegree + 'deg)';
        } else {
            cannonRotationVelocity = 0;
        }
    }, cannonTime)
}


