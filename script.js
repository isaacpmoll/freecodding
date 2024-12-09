// Select elements
const bgColorPicker = document.getElementById('bg-color');
const textColorPicker = document.getElementById('text-color');
const drawColorPicker = document.getElementById('draw-color');
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

// Set up canvas
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Variables for drawing
let isDrawing = false;
let drawColor = drawColorPicker.value;
let lineWidth = 5;

// Event listeners for color pickers
bgColorPicker.addEventListener('input', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

textColorPicker.addEventListener('input', (e) => {
  document.body.style.color = e.target.value;
});

drawColorPicker.addEventListener('input', (e) => {
  drawColor = e.target.value;
});

// Drawing logic
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.closePath();
});

canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
});
