function getDegree(item) {
    var itemStyle = window.getComputedStyle(item);
    var transformMatrix = itemStyle.getPropertyValue("transform");
    // console.log(transformMatrix);

    var values = transformMatrix.split('(')[1],
    values = values.split(')')[0],
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    
    var angleDegree = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angleDegree;
}