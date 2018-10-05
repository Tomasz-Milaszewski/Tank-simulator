function getDegree(item) {
    var itemStyle = window.getComputedStyle(item);
    var transformMatrix = itemStyle.getPropertyValue("transform");
    console.log(transformMatrix);

    var values = transformMatrix.split('(')[1],
    values = values.split(')')[0],
    values = values.split(',');
    // var values = transformMatrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    console.log('Rotate: ' + angle + 'deg');
}