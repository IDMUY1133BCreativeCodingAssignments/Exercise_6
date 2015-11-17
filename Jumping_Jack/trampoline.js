// should only ever make one trampoline, but you can make more to make the game interesting
function Trampoline(color){
	this.color = color;

	//draws the image of the trampoline
	this.display = function(x, y) {
		push();
		translate(x,y); 
		scale(0.8);
		this.legone();
		this.legtwo();
		this.legthree();
		this.body(this.color);
		pop();
	}
    // middle leg of the trampoline 
	this.legone = function() {
		strokeWeight(3);
		ellipse(340,261,18,5);
		stroke(0);
		rectMode(CENTER);
		fill(180,206,203);
		rect(340,210,15,130);
		stroke(2);
		fill(56,61,65);
		rect(340,269,18,10);
		ellipse(340,280,24,8);
		ellipse(340,288,24,8);
		rect(340,284,24,4);
	}

	//back left leg
	this.legtwo = function(){
		strokeWeight(3);
		ellipse(30,221,18,5);
		stroke(0);
		rectMode(CENTER);
		fill(180,206,203);
		rect(30,170,15,130);
		stroke(2);
		fill(56,61,65);
		rect(30,229,18,10);
		ellipse(30,240,24,8);
		ellipse(30,248,24,8);
		rect(30,244,24,4);
	}

	//back right leg
	this.legthree = function(){
		stroke(0);
		rectMode(CENTER);
		fill(180,206,203);
		rect(480,140,15,64);
		stroke(2);
		fill(56,61,65);
		rect(480,163,18,10);
		ellipse(480,174,24,8);
		ellipse(480,182,24,8);
		rect(480,178,24,4);
	}

	//body of the trampoline
	this.body = function(color){
		fill(color);
		ellipse(250,90,500,125);
		fill(115,123,126);
		ellipse(250,80,355,75);
	}
}