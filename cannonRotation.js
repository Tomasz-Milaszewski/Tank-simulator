function cannonRotation() {
    document.addEventListener("mousemove", function(event) {
        myFunction(event);
    });
    
    function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        
        var cannon = document.querySelector('.towerCannon');
        var cannonCenterX = (cannon.getBoundingClientRect().left + cannon.getBoundingClientRect().right)/2; 
        
        var cannonCenterY = (cannon.getBoundingClientRect().top + cannon.getBoundingClientRect().bottom)/2;
        var deltaX = x - cannonCenterX;
        // console.log(deltaX);
        var deltaY = y - cannonCenterY;

        var tankAngleDegree = getDegree(tank);
        // console.log(tankAngleDegree);
        // var tankAngleRadians = tankAngleDegree * (Math.PI / 180);

        if (deltaX > 0) {
            var cannonAngleRadians = Math.atan(deltaY/deltaX);
            var cannonAngleDegrees = cannonAngleRadians * (180 / Math.PI) - tankAngleDegree;
            console.log(cannonAngleDegrees);
            cannon.style.transform = 'rotate(' + cannonAngleDegrees + 'deg)';
        } else {
            var cannonAngleRadians = Math.atan(deltaY/deltaX);
            var cannonAngleDegrees = cannonAngleRadians * (180 / Math.PI) + 180 - tankAngleDegree;
            cannon.style.transform = 'rotate(' + cannonAngleDegrees + 'deg)';
        }
    }
}
cannonRotation();