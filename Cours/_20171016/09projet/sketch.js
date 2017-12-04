var nombreEntier;

function setup() {
	createCanvas (windowWidth, windowHeight) ;

	background(255,0,0 );

	nombreEntier = 10;
	ahaha = "coucou";

	print (nombreEntier + 30);
}

function draw (){
	background(255,0,0 );

	nombreEntier = nombreEntier +  random(0,10);

	rectMode (CENTER);
	print(nombreEntier);
	rect (nombreEntier, 100, 100, 100);
	rect (nombreEntier, 200, 50, 50);
	rect (nombreEntier, 300, 50, 50);
	rect (nombreEntier, 400, 50, 50);

}
