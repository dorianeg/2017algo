var cnv;
var d;
var g;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.mousePressed(changeGray); // attach listener for
                                // canvas click only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}

// this function fires with any click anywhere
function mousePressed() {
  d = d + 10;
}

// this function fires only when cnv is clicked
function changeGray() {
  g = random(0, 255);
}