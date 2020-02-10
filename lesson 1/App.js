let button
let greeting
function setup() {
  createCanvas(windowWidth, windowHeight)
  button = createButton('BRUH');
  button.position(random(10, width-10), random(10, height-10))
  button.mousePressed(greet)
  greeting = createElement('h2', 'Say Bruh!')
  greeting.position(width / 2, height / 3)
  textAlign(CENTER)
  textSize(50)
}
function greet() {
  greeting.html('BRUH!')
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('BRUH', 0, 0);
    button.position(random(10, width-10), random(10, height-10))
    pop();
  }
}