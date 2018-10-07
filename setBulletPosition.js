function setBulletPosition() {
    const cannon = document.querySelector('.towerCannon');
    const cannonRect = cannon.getBoundingClientRect();
    console.log(cannonRect);
    const cannonLeft = cannon.getBoundingClientRect().left;
    const cannonRight = cannon.getBoundingClientRect().right;
    const cannonDeltaLeft = Math.abs(cannonRight - cannonLeft);
    const cannonTop = cannon.getBoundingClientRect().top;
    const cannonBottom = cannon.getBoundingClientRect().bottom;
    const cannonDeltaTop = Math.abs(cannonBottom - cannonTop);
    const cannonAngleDegree = getDegree(cannon);
    console.log(cannonAngleDegree);
    const cannonAngleRadians = cannonAngleDegree * (Math.PI / 180);

    if (cannonAngleDegree >= 0 && cannonAngleDegree <=90) {
        const bulletLeftTop = [cannonLeft + Math.abs(50 * Math.cos(cannonAngleRadians)), cannonTop + 50 * Math.sin(cannonAngleRadians)];
        return bulletLeftTop;
    }
    if (cannonAngleDegree > 90 && cannonAngleDegree <=180) {
        const bulletLeftTop = [cannonLeft + Math.abs(8.5 * Math.cos(cannonAngleRadians)), cannonTop + 50 * Math.sin(cannonAngleRadians)];
        return bulletLeftTop;
    }
    if (cannonAngleDegree <= -90) {
        const bulletLeftTop = [cannonLeft + Math.abs(8.5 * Math.cos(cannonAngleRadians)), cannonTop + Math.abs(8.5 * Math.sin(cannonAngleRadians))];
        return bulletLeftTop;
    }
    
    
}
