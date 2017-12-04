var monArray;
var last_key;
// var sound;
var maListe, current, counter;


function preload(){

 GD = loadImage('image/Debord.gif');
 GE = loadImage('image/Debord_elagage.gif');
 // sound = loadSound('son/guitoudebord.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // monArray = ['1',
  // 'Toute la vie des sociétés', 
  // 'dans lesquelles règnent les conditions modernes de production',
  // 's’annonce comme une immense accumulation de spectacles.',
  // 'Tout ce qui était directement vécu',
  // 's’est éloigné dans une représentation.', 
  // ];
  
  setInterval(guy, 100);
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
  image (GD, mouseX+250, height-300);
}

// function elagage() {
//   image (GE, 260, 0);

//   if (sound.isPlaying()) { 
//     sound.stop();
//   } else {
//     sound.play();
//   }
// }
function maMethode(result) {
  maListe = result;
  print(maListe);
  print(maListe.length);
}

function draw(){
  monTexte();

  textSize(15);
  textAlign(LEFT);
  text(current, 200, height/2-300, 800, 800);

}

function mousePressed () {
  counter = counter + 1;

  if (counter >= maListe.length) {
    counter = 0;
  }

  current = maListe[counter];
   background(255);

}