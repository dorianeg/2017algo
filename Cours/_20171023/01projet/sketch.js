var monTexte; 

function setup(){
	createCanvas(windowWidth, windowHeight);

	monTexte = "The Utopia of Rules, Why We Really Love Bureaucracy After All";

	textFont('Helvetica');
}

function draw (){
	background (255);
	textSize(mouseX/10);

	fill(255,0,0);
	stroke (0,0, 255);
	strokeWeight (5);
	text(monTexte, width/2, height/2);
	
}