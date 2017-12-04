var maListe, temp, last;

function setup() {
	createCanvas(windowWidth, windowHeight);

	maListe = ["Coq", "licot", "coqcoq", "coquelicot"];
	last ="";
}

function mousePressed(){
	temp = random(maListe);

	while (temp === last){
		temp = random(maListe);
}
	last = temp;
	print(temp);
}