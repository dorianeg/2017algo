function setup() {
	createCanvas(windowWidth, windowHeight);
}

// Checks to see whether 1 second has passed, if so execute code within 
function draw() {
	if (millis() > 1000) {
		fill(random(255), random(255), random(255));
		ellipse(mouseX, mouseY, random(50, 100), random(50, 100));
	}
}

// "a" clears everything 
function keyTyped() {
	if (key === "a") {
		background(255);
	}
}