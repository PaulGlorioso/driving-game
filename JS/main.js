var car = document.querySelector('.car');
var xCounter = 1;
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
  vehicle.style.left = xCounter + 'px';
  gps.x = xCounter;
  xCounter++;
}
