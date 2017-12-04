var monArray;
var last_key;
var sound, myTimer;

function preload(){

 GD = loadImage('image/Debord.gif');
 GE = loadImage('image/Debord_elagage.gif');
 sound = loadSound('son/guitoudebord.mp3');
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
  
  setInterval(guy, 1000);

}

function monTexte(){
  textFont('Overpass Mono');
  textSize(20);
  textAlign(LEFT);
  text('écris "debord"' + "\n" + 'efface "w"'+ "\n" + 'clique une fois', 20, 30);
  // text('efface "w"', 20, 100);
  // text('clique', 20, 170);
  // text('une fois', 20, 210);
}

function guy(){
  image (GD, mouseX+250, height-300);
}

function elagage() {
  image (GE, 260, 0);

  if (sound.isPlaying()) { 
    sound.stop();
  } else {
    sound.play();
  }
}

function draw(){

  monTexte();

  textSize(25);
  textAlign(LEFT);

}

function keyTyped() {

  if (key === "d") {
    if (last_key === "r"){
      text(monArray[5], 270, 150);
    } else {
      text(monArray[0], 270, 20);
    }

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
