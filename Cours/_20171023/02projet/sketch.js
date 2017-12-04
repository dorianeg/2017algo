var monTexte; 

function setup(){
	createCanvas(windowWidth, windowHeight);

	monTexte = "The Utopia of Rules, Why We Really Love Bureaucracy After All";

	textAlign(CENTER, CENTER);

	fill('#62b7cb');
	stroke ('#2b7681');
	strokeWeight (5);
	toggle = false;
}

function draw (){
	background ('#222765');
	textSize(mouseX/10);
	
	text(monTexte, width/2, height/2);
}

function mousePressed() {
	toggle = !toggle;

	if (toggle){
		textFont('Fredoka One');
	} else {
		textFont('Archivo Black');
	}
}