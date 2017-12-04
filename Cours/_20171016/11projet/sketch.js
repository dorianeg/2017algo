var img;

function preload (){
		img = loadImage("img/branc.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(255);

	img = loadImage("img/branc.jpg");
}

function draw () {
	tint(255,0,0);
	image(img, 0,0,);
}
