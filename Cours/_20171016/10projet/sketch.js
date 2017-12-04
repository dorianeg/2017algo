var x;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	x = 0;
}

function draw () {
	background(255);

	x = x + 5;

	if (x < width/2) {
	// rect (x, height/2, 100, 100);
	text("hello", x, height/2);
	textSize(100);
	}
}