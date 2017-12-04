
// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background("#180d26");
// 	fill("#d1db94");

// }

// function draw() {

//   	rotate(90*Math.PI/180)
// 	rect(10, 10, 52, 52);
// }

// var x;

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background("#180d26");
// 	fill("#d1db94");
	
// 	x = 0;
// }


// function draw() {
//   background("#180d26");
  
//   x = x + 1;
//   rect(x, 100, 15, 15);
// }

var img, x;

function setup() {
	img = loadImage("img/Untitled-2.gif");

	x = 0;
}

function draw() {
	x = x + 1;
	image(img, x, 100, 0, 0);
}

function keyTyped() {
	// a= efface tout
	if (key === "a") {
		background(255);
	}
}




