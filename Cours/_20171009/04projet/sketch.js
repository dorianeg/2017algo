var bg1 = false;
var bg2 = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (bg1 === true) {
		fill(random(255), random(255), random(255));
		ellipse(mouseX, mouseY, 50, 50);
	}

	if (bg2 === true) {
		fill(50);
		rect(mouseX, mouseY, 10, 10);
	}
}


// ! toggles the boolean !bg1 = the opposite of original value
// if bg1 = false then !bg1 = true

function keyTyped() {
	if (key === "a") {
		bg1 = !bg1;
	}

	if (key === "b") {
		bg2 = !bg2;
	}
}










/*function draw() {
	if (millis() > 1000) {
		fill(random(255));
		ellipse(mouseX, mouseY, random(50, 100), random(50, 100));
	}
}
function keyTyped() {
	if (key === "a") {
		background(200);
	}
}*/