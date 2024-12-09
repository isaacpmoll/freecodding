// Select elements
const bgColorPicker = document.getElementById('bg-color');
const textColorPicker = document.getElementById('text-color');

// Add event listeners
bgColorPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

textColorPicker.addEventListener('input', (e) => {
  document.body.style.color = e.target.value;
});
