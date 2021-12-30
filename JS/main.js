var car = document.querySelector('.car');
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
});
