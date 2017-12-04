var bg1 = false;
var bg2 = false;

function setup() {
		createCanvas(windowWidth, windowHeight);
}

function draw () {
		if (bg1 ===true){
				fill(0);
				stroke(20);
				ellipse (mouseX, mouseY, 50, 50);
		}

		if (bg2 === true) {
				rect (mouseX, mouseY, 20, 20);
			}
}

function keyTyped () {
		if (key === "a") {
			bg1 = !bg1;
		}
		
		if (key ==="z") {
			bg2 = !bg2;
		}
}