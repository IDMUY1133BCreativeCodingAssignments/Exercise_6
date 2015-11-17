function Jack(name, color, xspeed, yspeed) { // creates the class jack and gives it 4 variables to pass it 
	this.name = name;  // the variable that changes the name that bounces around
	this.color = color; // changes th ecolor of the names

	this.w = 120; //jack width
	this.h = 50; //jack height
	this.xpos = width/2;
	this.ypos = 50; // starting point

	this.xspeed = xspeed;  // Speed of the name
	this.yspeed = yspeed;  // Speed of the name

	this.xdirection = 2;  // Left or Right
	this.ydirection = 2;  // Top to Bottom

	this.move = function() { // this function moves the names and has them bounce off the walls 
		// performs the movement
		this.xpos = this.xpos + ( this.xspeed * this.xdirection );
		this.ypos = this.ypos + ( this.yspeed * this.ydirection );
		
		if (this.xpos > width-this.w || this.xpos < this.w) { // keeps the names in the boundaries horizontally
			this.xdirection *= -1;
		}
		//keeps it from flying out vertically
		if (this.ypos < this.h) {
			this.ydirection *= -1;
		}

		if(pmouseX - 250 < this.xpos  && this.xpos < pmouseX+250 && this.ypos > height - 190 && this.ypos < height - 170){
			this.ydirection *= -1; // creates the box that the names will bounce off ie the trampoline
		}
	}

	this.display = function() { // this function draws the actual name 
		textSize(128);
		fill(this.color); //fills the entered color
		textAlign(CENTER);
		text(this.name, this.xpos, this.ypos);
	}

	this.loser = function() { // paints the losing screen when a name falls off screen
		if(this.ypos > height) {
			background(0);
			fill(143,29,13);
			textSize(128);
			text("YOU LOSE", width/2, height/2);
			textSize(48);
			text("Press mouse to restart", width/2, height/2+45);
		}
	}
}


