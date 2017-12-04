var OH, monArray;
var last_key;

function preload(){
 GD = loadImage('image/Debord.gif');
 GE = loadImage('image/Debord_elagage.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  monArray = ['1',
  'Toute la vie des sociétés', 
  'dans lesquelles règnent les conditions modernes de production',
  's’annonce comme une immense accumulation de spectacles.',
  'Tout ce qui était directement vécu',
  's’est éloigné dans une représentation.', 
  ];

}

function monTexte(){
  textFont('Overpass Mono');
  textSize(40);
  textAlign(LEFT);
  text('écris "debord"', 20, 30);
  text('efface "w"', 20, 100);
  text('clique', 20, 170);
}

function guy(){
  image (GD, mouseX+250, height-300);
}

function elagage() {
  image (GE, 260, 0);
}

function draw(){

  monTexte();

  strokeWeight(10);
  line(260, 0, 260, height);

  textSize(25);
  textAlign(LEFT);

  setTimeout(guy, 1000);

}

function keyTyped() {

  if (key === "d") {
    if (last_key === "r")
      text(monArray[5], 270, 150);
    else 
      text(monArray[0], 270, 20);
    textSize(40);
  }

  if (key === "e") {
    text(monArray[1], 270, 50);
  }

  if (key === "b") {
    text(monArray[2], 270, 75);
  }

  if (key === "o") {
    text(monArray[3], 270, 100);
  }

  if (key === "r") {
    text(monArray[4], 270, 125);
  }

  if (key === "w") {
    background(255);
  }

  last_key = key;

}

function mousePressed () {
  elagage();
}

function mouseReleased() {
  background(255);
}