function setup() {
  createCanvas(100, 100);
  createDiv('this is some text');
  createP('this is a paragraph'); 
}
function mousePressed() {
  removeElements(); // this will remove the div and p, not canvas
}