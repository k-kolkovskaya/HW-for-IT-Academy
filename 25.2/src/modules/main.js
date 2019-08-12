const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: undefined,
  y: undefined
}

addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
})

addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  initCircles();
  initRectangles();
})

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: Math.random(0.3),
    y: Math.random(0.3)
  }
}

//c.arc(x, y, radius, startAngle, endAngle, drawClockwise);
Circle.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
}

function Rectangle(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.velocity = {
    x: Math.random(0.3),
    y: Math.random(0.3)
  }
}

//c.fillRect(x, y, width, height)
Rectangle.prototype.draw = function() {
  c.beginPath();
  c.fillRect(this.x, this.y, this.width, this.height);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
}

function update() {
  this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.y;
}

let circles = [];
function initCircles() {
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 5;
    const color = 'black';
    circles.push(new Circle(x, y, radius, color));
  }
}

let rectangles = [];
function initRectangles() {
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const width = 8;
    const height = 8;
    const color = 'red';
    rectangles.push(new Rectangle(x, y, width, height, color));
  }
}

function animate() {
  requestAnimationFrame(animate); 
  c.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(circle => {
    update.call(circle);
  });
  rectangles.forEach(rectangle => {
    update.call(rectangle);
  })
}

initCircles();
initRectangles();
animate();