var OH;

function preload(){
 OH = loadImage('imag/Untitled-3.gif');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	OH = loadImage('imag/Untitled-3.gif');
}

// function draw(){
//     background(255);
    
//     // move the origin to the pivot point
//     translate(width/2, height/2); 

//     // then rotate the grid around the pivot point by a
//     // number of degrees equal to the frame count of the sketch
//     rotate(radians(frameCount));

//     // and draw the square at the origin
//     fill(0);
//     image(OH, 100, 100);
// }

function draw(){
    background(255);
    
    // move the origin to the pivot point
    translate(mouseX, mouseY); 

    // then rotate the grid around the pivot point by a
    // number of degrees equal to the frame count of the sketch
    rotate(radians(frameCount));

    // and draw the square at the origin
    fill(0);
    image(OH, 0, 0);
}