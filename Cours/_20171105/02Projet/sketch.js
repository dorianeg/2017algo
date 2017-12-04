var x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);

	x = width/2;
	y = height/2;

	fill(125);
	stroke(255);
}

function draw(){
	background (50, 1);
	
	x = x +random(-10, 10);
	y = y +random(-10, 10);

	ellipse(x, y, 50, 50);	
}

// itération dans des array, 


