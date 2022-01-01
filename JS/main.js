var car = document.querySelector('.car');
var xCounter = 1;
var yCounter = 0;
var gps = {
  facing: car.className,
  engine: 'off',
  x: 0,
  y: 0
};
var vehicle = document.querySelector('.vehicle');
var move;
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    car.className = 'car up';
  } else if (event.key === 'ArrowRight') {
    car.className = 'car right';
  } else if (event.key === 'ArrowLeft') {
    car.className = 'car left';
  } else if (event.key === 'ArrowDown') {
    car.className = 'car down';
  }
  if (event.key === ' ') {
    if (gps.engine === 'off') {
      move = setInterval(moveCar, 16);
      gps.engine = 'on';
    } else if (gps.engine === 'on') {
      clearInterval(move);
      gps.engine = 'off';
    }
  }
});

function moveCar() {
  if (car.className === 'car right') {
    vehicle.style.left = xCounter + 'px';
    gps.x = xCounter;
    xCounter++;
  } else if (car.className === 'car down') {
    vehicle.style.top = yCounter + 'px';
    gps.y = yCounter;
    yCounter++;
  } else if (car.className === 'car left') {
    vehicle.style.left = xCounter + 'px';
    gps.x = xCounter;
    xCounter--;
  } else if (car.className === 'car up') {
    vehicle.style.top = yCounter + 'px';
    gps.y = yCounter;
    yCounter--;
  }
}
