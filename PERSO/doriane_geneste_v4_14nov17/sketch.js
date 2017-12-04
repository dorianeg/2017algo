var sound;
var maListe, current, counter;


function preload(){
 GD = loadImage('image/Debord.gif');
 // GE = loadImage('image/Debord_elagage.gif');
 sound = loadSound('son/guitoudebord.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  setInterval(guy, 10);

  loadStrings('societe_spectacle.txt', maMethode);
  current = "";

  counter = -1;

}

function monTexte(){
  textFont('Overpass Mono');
  textSize(20);
  textAlign(LEFT);
  text('clique une fois', 20, 30);
}

function guy(){
  background(255);
  image (GD, mouseX+250, height-300);
}

function texteEntier(){
  counter = counter + 1;

  if (counter >= maListe.length) {
    counter = 0;
  }
  current = maListe[counter];

  background(255);
}

function maMethode(result) {
  maListe = result;
}

function son(){
  loop();
  if (sound.isPlaying()) { 
    sound.stop();
  } else {
    sound.play();
  }
}

function draw(){
  monTexte();

// style texte entier
  textSize(15);
  textAlign(LEFT);
// Texte dans un carré
  text(current, 200, 20, 800, 800);
}

function mousePressed () {
// fait défiler le texte
  if (mouseX >= 200 && mouseX <= 1000 && mouseY>= 20 && mouseY<=1000){
    texteEntier();
  }
// en haut à gauche déclencher le son
  if (mouseX >= 0 && mouseX <= 200 && mouseY>= 0 && mouseY<=800){ 
    son();
  }
}