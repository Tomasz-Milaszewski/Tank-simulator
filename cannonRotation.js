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
        var deltaY = y - cannonCenterY;
        
        var cannonAngleRadians = Math.atan(deltaY/deltaX);
        var cannonAngleDegrees = cannonAngleRadians * (180 / Math.PI);
        console.log(cannonAngleDegrees);
        cannon.style.transform = 'rotate(' + cannonAngleDegrees + 'deg)';
    }
}
cannonRotation();