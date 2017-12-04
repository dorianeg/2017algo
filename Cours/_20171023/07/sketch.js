var imge, imageList;

function setup() {
	createCanvas(windowWidth, windowHeight);

	imageListe = ["img.jpg", "imag.jpg"];
}

function draw(){
	if (img !=null){
		image(img, width/2, height/2);
	}
}

function mousePressed(){
	img = loadImage(random(imageList));
}