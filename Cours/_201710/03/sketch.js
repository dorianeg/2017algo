var image;

function preload() {
	image = loadImage("img/Untitled-3.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);

  translate(200, 200);
  image(("img/Untitled-3.gif"), 0, 0);
}