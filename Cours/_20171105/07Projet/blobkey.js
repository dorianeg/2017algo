class Blobkey {
	constructor(k){
		this.key = k;
		
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
