var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
console.log(canvas.width);

//c.rotate(5 * Math.PI / 180);

var waveLength = 0.01;
var waveFrequency = 0.01;
var waveAmplitude = 100;
let increment = waveFrequency;

function animate() {
  requestAnimationFrame(animate)

  c.fillStyle = 'rgba(255, 255, 255, 0.04)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, canvas.height * 0.65 + Math.sin(i * waveLength + increment) * waveAmplitude * Math.sin(increment));
  }

  c.strokeStyle = 'rgba(194, 148, 138, 0.2)';
  c.stroke();
  increment += waveFrequency;
}

animate();


//is there a way to resize the sine wave to fit various screens? make it responsive?
//right now my solution is multiplying the canvas.width by 3 (see lines 4 and 5)
//can i make the canvas element responsive? resize wiht the screen?
