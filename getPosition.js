function getPosition(item) {
    var itemStyle = window.getComputedStyle(item);
    var itemTop = itemStyle.getPropertyValue("top");
    var itemLeft = itemStyle.getPropertyValue("left");
    var topLeft = [itemTop, itemLeft];
    return topLeft;
}