const app = document.querySelector('.tankContainer');

const tank = document.createElement('div');
const tankTower = document.createElement('div');
const towerCannon = document.createElement('div');

tank.classList.add('tank');
towerCannon.classList.add('towerCannon');
tank.appendChild(towerCannon);
tankTower.classList.add('tankTower');
tank.appendChild(tankTower);

app.appendChild(tank);
