// function cannonRotationKeys() {
//     window.addEventListener('keydown', function (event) {
//         if (event.code === 'KeyQ') {
//             isQPressed = true;
//         }
//     })
//     window.addEventListener('keyup', function () {
//         if (event.code === 'KeyQ') {
//             isQPressed = false;
//         }
//     })
//     window.addEventListener('keydown', function (event) {
//         if (event.code === 'KeyE') {
//             isEPressed = true;
//         }
//     })
//     window.addEventListener('keyup', function () {
//         if (event.code === 'KeyE') {
//             isEPressed = false;
//         }
//     })
// }

var rCounter = 0;
function cannonControlManager() {
    window.addEventListener('keydown', function (event) {
        if (event.code === 'KeyR') {
            console.log('r pressed');
            rCounter === 0 ? rCounter +=1 : rCounter = 0;
            console.log(rCounter);
        }
    })
}
cannonControlManager();

function cannonRotationMouse() {
    
    document.addEventListener("mousemove", function (event) {
        if (rCounter === 1) {return;}
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


