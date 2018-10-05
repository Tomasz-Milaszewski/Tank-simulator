function getPosition(item) {
    var itemStyle = window.getComputedStyle(item);
    var itemTop = parseInt(itemStyle.getPropertyValue("top"));
    var itemLeft = parseInt(itemStyle.getPropertyValue("left"));
    var topLeft = [itemTop, itemLeft];
    return topLeft;
}