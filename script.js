function changeFloor(fileName, button) {
  document.getElementById('floor-image').data = `images/${fileName}`;
  document.querySelectorAll('.floor-buttons button').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}