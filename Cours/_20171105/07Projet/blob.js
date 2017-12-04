class Blob {
	constructor(c){
		this.x = width/2;
		this.y = height/2;

		this.dx =-2;
		this.dy = 2;

		this.col = random(250);

		stroke(255);
	}

	move() {
		this.x = this.x +random(-10, 10);
		this.y = this.y +random(-10, 10);
	}

	display(){
		fill(this.col);
		ellipse(this.x, this.y, 50, 50);		
	}
}
