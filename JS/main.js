var car = document.querySelector('.car');
var xCounter = 1;
var gps = {
  facing: car.className,
  x: 0,
  y: 0
};
var vehicle = document.querySelector('.vehicle');

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
    setInterval(moveCar, 16);
  }
});

function moveCar() {
  vehicle.style.left = xCounter + 'px';
  gps.x = xCounter;
  xCounter++;
}
