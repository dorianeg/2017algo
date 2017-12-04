var pos = 20;

function draw() {
 createCanvas (windowWidth, windowHeight);
  background(255);
  fill(0);
  rect(500, pos, 100, 100);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}