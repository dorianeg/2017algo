var counter = 0;
var timer,

function setup(){
  createCanvas(windowWidth, windowHeight);
nostroke();
}

function draw() {
}

function mousePressed() {
  counter = 0;
  fill(counter);
  rect(200, 200, );
  timer= setinterval (fader, 20);
}

function fader() {
  fill (counter);
  rect (200, 200, 200, 200);

  counter = counter +1 ;
  if (counter >= 255){
  	clearTimer(timer);
  	background (255);
}