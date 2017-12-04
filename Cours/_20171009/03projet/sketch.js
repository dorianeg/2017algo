
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
 }

 function draw() {
 	strokeWeight(10);
 	fill (random(255), random(255), random(255));
 	ellipse(mouseX, mouseY, 50, 50);
 	}


 