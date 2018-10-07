function setBulletPosition() {
    const cannon = document.querySelector('.towerCannon');
    const tank = document.querySelector('.tank');
    const tankAngleDegree = getDegree(tank);
    
    const cannonLeft = cannon.getBoundingClientRect().left;
    const cannonTop = cannon.getBoundingClientRect().top;
    const cannonAngleDegree = getDegree(cannon);
    const cannonAngleRadians = (cannonAngleDegree + tankAngleDegree) * (Math.PI / 180);

    if (cannonAngleDegree >= 0 && cannonAngleDegree <=90) {
        const bulletLeftTopAngle = [cannonLeft + Math.abs(50 * Math.cos(cannonAngleRadians)), cannonTop + 50 * Math.sin(cannonAngleRadians), cannonAngleDegree];
        return bulletLeftTopAngle;
    }
    if (cannonAngleDegree > 90 && cannonAngleDegree <=180) {
        const bulletLeftTopAngle = [cannonLeft + Math.abs(8.5 * Math.cos(cannonAngleRadians)), cannonTop + 50 * Math.sin(cannonAngleRadians), cannonAngleDegree];
        return bulletLeftTopAngle;
    }
    if (cannonAngleDegree <= -90) {
        const bulletLeftTopAngle = [cannonLeft + Math.abs(8.5 * Math.cos(cannonAngleRadians)), cannonTop + Math.abs(8.5 * Math.sin(cannonAngleRadians)), cannonAngleDegree];
        return bulletLeftTopAngle;
    }
    if (cannonAngleDegree > -90 && cannonAngleDegree < 0) {
        const bulletLeftTopAngle = [cannonLeft + Math.abs(50 * Math.cos(cannonAngleRadians)), cannonTop + Math.abs(8.5 * Math.sin(cannonAngleRadians)), cannonAngleDegree];
        return bulletLeftTopAngle;
    }
}
