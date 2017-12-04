var OH, monArray;

function preload(){
 OH = loadImage('imag/Untitled-3.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

//     monTexte1 = 'Toute la vie des sociétés' ;
//     monTexte2 = 'dans lesquelles règnent les conditions modernes de production';
//     monTexte3 = 's’annonce comme une immense accumulation de spectacles.'; 
//     monTexte4 = 'Tout ce qui était directement vécu';
//     monTexte5 = 's’est éloigné dans une représentation.';
// }
    monArray = ['1',
                'Toute la vie des sociétés', 
                'dans lesquelles règnent les conditions modernes de production',
                's’annonce comme une immense accumulation de spectacles.',
                'Tout ce qui était directement vécu',
                's’est éloigné dans une représentation.', 
                ];

    textSize(25);
    textAlign(CENTER);
}
  
// function rotation1(){

// if (frameCount % 10 === 0) {
//     push();
//     translate();
//     rotate(radians(frameCount * 2  % 360));
//     image (OH, 0, 0);
//     pop();
//   }
// }

function draw(){

    if (millis() > 1000) {
    image (OH, mouseX, mouseY);
}
}
//     rotation1(width/2, height/2);
// }

var last_key;

function keyTyped() {
    background (255);

if (key === "d") {
    if (last_key === "r")
    text(monArray[5], width/2, 150);
    else 
    text(monArray[0], width/2, 20);
}

if (key === "e") {
    text(monArray[1], width/2, 50);
}

if (key === "b") {
    text(monArray[2], width/2, 75);
}

if (key === "o") {
    text(monArray[3], width/2, 100);
}

if (key === "r") {
    text(monArray[4], width/2, 125);
}
    last_key = key;

// if (key === "g") {
//     text(monArray[5], width/2, 150);
// }

}