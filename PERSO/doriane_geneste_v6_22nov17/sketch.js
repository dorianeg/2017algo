var sound;
var maListe, current, counter;
var displayText;
var alert;
var pos0 = 20;
var pos1 = 600;

function preload(){

 GD = loadImage('image/Debord.gif');
 GE = loadImage('image/symbole_volume.gif');
 sound = loadSound('son/guitoudebord.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  loadStrings('societe_spectacle.txt', maMethode);
  loadStrings('etudiant.txt', maMethode1);

  current = "";
  current1 = "";

  counter = -1;
  counter1 = -1;

  displayText = true;

  alert = 0;
}

function draw(){
  background(255);

  if(displayText) {
    monTexte();
  }else {
    image_son();
  }

  alertFunction();
  texteEntier();
  texteEntier1();
  guy();

}

function texteEntier () {
  textSize(15);
  textAlign(LEFT);
  noStroke();
  fill(200);
  rect(200, pos0, 800, 400);
  fill(0);
  text(current, 200, pos0, 800, 400);
}
function texteEntier1 () {
  textSize(15);
  textAlign(LEFT);
  noStroke();
  fill(200);
  rect(200, pos1, 800, 600);
  fill(0);
  text(current1, 200, pos1, 800, 600);
}
// pour avoir un flash noir en arrière plan
function alertFunction() { 
  fill(0, alert);
  rect(0,0, width, height);
  fill(0);
  if(alert > 0) alert -= 50; //alert = alert - 5 // 0<50 variable de la vitesse du flash
}

function monTexte(){
  textFont('Overpass Mono');
  textSize(20);
  textAlign(LEFT);
  text('clique une fois', 20, 30);
}

function guy(){ 
  image (GD, mouseX+10, height-300);
}

function image_son(){
  image (GE, 10, 10);
}

function maMethode(result) {
  maListe = result;
  // print(maListe);
  // print(maListe.length);
}
function maMethode1(result) {
  maListe1 = result;
}

function mousePressed () {
  // en haut au milieu 
  if (mouseX >= 200 && mouseX <= 800 && mouseY>= height/2-300 && mouseY<=800){
    counter = counter + 1;
    alert = 255;   // arrière plan 
    if (counter >= maListe.length) {
      counter = 0;
    }
    current = maListe[counter]; // texte société du spectacle en entier
  }

// hors-page en bas
  if (mouseX >= 200 && mouseX <= 800 && mouseY>= pos1 && mouseY<=800){
    counter1 = counter1 + 1;
    alert = 255;   // arrière plan 
    if (counter1 >= maListe1.length) {
      counter1 = 0;
    }
    current1 = maListe1[counter1]; // texte etudiant en entier
  }

  // en haut à gauche 
  if (mouseX >= 0 && mouseX <= 200 && mouseY>= 0 && mouseY<=200){
    loop();   // son en boucle si on clique
    if (sound.isPlaying()) { 
      sound.stop();
      displayText = true;   // si son off, le texte revient
    } else {
      sound.play();
      displayText = false;   // si son on, image_son apparait
    }
  }
}


function mouseWheel(event) {
  print(event.delta); //move the square according to the vertical scroll amount
  pos0 += event.delta; //uncomment to block page scrolling //return false;
  pos1 += event.delta;
}