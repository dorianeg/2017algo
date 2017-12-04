var OH;

function preload(){
 OH = loadImage('imag/Untitled-3.gif');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(255);

	OH = loadImage('imag/Untitled-3.gif');
}

function draw(){
	// image (OH, mouseX, mouseY);
if (frameCount % 10 == 0) {
    push();
    translate(width/2, height/2);
    rotate(radians(frameCount * 2  % 360));
    image (OH, width/2, width/2);
    pop();
  }

  if (frameCount % 10 == 0) {
    push();
    translate(mouseX, mouseY);
    rotate(radians(frameCount * 2  % 360));
    image (OH, 0, 0);
    pop();
  }
}