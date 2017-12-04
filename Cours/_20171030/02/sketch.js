var myTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(2);
  myTimer = setTimeout(Myfunction3, 2000);

}

function Myfunction3(x, y) {
  rect(random(width), random(height), 20, 20);
}

// function draw(){
//   background (200);
// Myfunction3(random(width), random(height));
// }
// plein de fois
// setInterval(Myfunction3, 200);

// une fois
// setTimeout(Myfunction3, 2000)

function mousePressed() {
  clearInterval(myTimer);
  }