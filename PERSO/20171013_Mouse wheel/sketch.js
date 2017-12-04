// var monArray;
// var last_key;
// var sound;
var mOntexte, current, counter;

function preload(){

texT = loadStrings('societe_spectacle.txt', mOntexte);
//  GD = loadImage('image/Debord.gif');
//  GE = loadImage('image/Debord_elagage.gif');
//  // sound = loadSound('son/guitoudebord.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  current = "";
  
  // setInterval(guy, 100);
  counter = -1;
}

function maMethode(result) {
  mOntexte = result;
  print(mOntexte);
  print(mOntexte.length);
  
  textSize(20);
  textAlign(CENTER);
  text(current, 0, height/2, 200, 500);
}

// function monTexte(){
//   textFont('Overpass Mono');
//   textSize(20);
//   textAlign(LEFT);
//   text('clique une fois', 20, 30);
// }


// function guy(){
//   image (GD, mouseX+250, height-300);
// }

// function elagage() {
//   image (GE, 260, 0);

//   if (sound.isPlaying()) { 
//     sound.stop();
//   } else {
//     sound.play();
//   }
// }

function draw(){

  textSize(20);
  textAlign(CENTER);
  text(current, 0, height/2, 200, 500);

}

function mousePressed () {
  counter = counter + 1;

  if (counter >= maMethode.length) {
    counter = 0;
  }

  current = maMethode[counter];
}

function mouseReleased() {
  background(255);
}

// function keyTyped() {

//   if (key === "d") {
//     if (last_key === "r"){
//       text(monArray[5], 270, 150);
//     } else {
//       text(monArray[0], 270, 20);
//     }

//     textSize(40);
//   }

//   if (key === "e") {
//     text(monArray[1], 270, 50);
//   }

//   if (key === "b") {
//     text(monArray[2], 270, 75);
//   }

//   if (key === "o") {
//     text(monArray[3], 270, 100);
//   }

//   if (key === "r") {
//     text(monArray[4], 270, 125);
//   }

//   last_key = key;

// }

