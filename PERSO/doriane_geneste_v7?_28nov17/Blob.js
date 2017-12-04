var pos0 = 20;
var maListe, current, counter;
var displayText;

function setup() {

  loadStrings('societe_spectacle.txt', maMethode);
  current = "";
    counter = -1;
  displayText = true;
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

function maMethode(result) {
  maListe = result;
  // print(maListe);
  // print(maListe.length);
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
}

function mouseWheel(event) {
  print(event.delta); //move the square according to the vertical scroll amount
  pos0 += event.delta; //uncomment to block page scrolling //return false;
}