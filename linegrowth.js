let line1

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360);
  background(0);
  line1 = new Line();
}


function draw() {
  line1.show();
  line1.move();
}

function mousePressed() {
  line1 = new Line();
}
