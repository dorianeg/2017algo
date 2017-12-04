var maListe, current, counter;

function setup() {
	createCanvas(windowWidth, windowHeight);

	loadStrings('test.txt', maMethode);
	current = "";

	textAlign(CENTER, CENTER);
	textSize(20);
	fill(255, 0, 0);

	counter = -1;
}

function maMethode(result) {
	maListe = result;
	print(maListe);
	print(maListe.length);
}

function draw() {
	background(255);
	text(current, width/2, height/2);
}

function mousePressed() {
	// current = random(maListe);

	counter = counter + 1;

	if (counter >= maListe.length) {
		counter = 0;
	}

	current = maListe[counter];
}