function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
}

// Checks to see whether 1 second has passed, if so execute code within 
function draw() {
	if (millis() > 1000) {
		strokeWeight(30);
 	fill (random(255), random(255), random(255));
 	ellipse(mouseX, mouseY, 200, 200);
 	}
}

// "a" clears everything 
function keyTyped() {
	if (key === "a") {
		background(255);
	}
}