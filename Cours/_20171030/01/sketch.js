function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}
  // Myfunction();
  // Myfunction();
  // Myfunction();
  // Myfunction();

  // Myfunction2();
  // Myfunction3(100, 100);
  // Myfunction3(600, 600);

// }

// function Myfunction() {
//   rect(random(width), random(height), 200, 200);
// }

// function Myfunction2() {
//   text("bonjour", 300,300);
// }

// function Myfunction3(var1, var2) {
//   rect(var1, var2, 200, 200);
// }

function Myfunction3(x, y) {
  rect(x, y, 20, 20);
}

function draw(){
  background (200);
Myfunction3(random(width), random(height));
}