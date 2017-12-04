var x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#180d26");
  noStroke();

}

function draw(){

  if (millis() > 2000) {
  // au centre une rotation couleur saumon
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(width/2, height/2);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 40);
    pop();
  }
  }

// rotation jaune + rotation saumon en haut à gauche
  if (millis() > 2000) {
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(100, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
  }

  if (millis() > 2000) {
  if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(width/2, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
  }

  if (millis() > 2000) {
// rotation jaune + rotation saumon en haut au milieu
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(width/2, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
}
  if (millis() > 2000) {
 if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(100, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
  }

    if (millis() > 2000) {
  // rotation jaune + rotation saumon en haut au droite
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(width-100, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
}

if (millis() > 2000) {
 if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(width-100, 100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
 }

 if (millis() > 2000) {
  // rotation jaune + rotation saumon en bas à gauche
if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(100, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
  }


if (millis() > 2000) {

 if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(width/2, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
  }

  if (millis() > 2000) {
// rotation jaune + rotation saumon en bas au milieu
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(width/2, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
  }

if (millis() > 2000) {
 if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(100, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
}

  if (millis() > 2000) {
  // rotation jaune + rotation saumon en bas au droite
  if (frameCount % 10 == 0) {
    fill("#e9cabe");
    push();
    translate(width-100, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(30,30, 60, 20);
    pop();
  }
}

if (millis() > 2000) {
 if (frameCount % 10 == 0) {
    fill("#d1db94");
    push();
    translate(width-100, height-100);
    rotate(radians(frameCount * 2  % 360));
    rect(0, 0, 40, 20);
    pop();
  }
}

}

function keyTyped() {
	// a= efface tout
	if (key === "a") {
		background("#180d26");
}
}
 