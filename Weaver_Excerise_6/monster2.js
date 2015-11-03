var mon1;
var mon2;
var mon3;


function setup(){
	createCanvas(1000,1000);
	mon1 = new Monster(color(random(255),random(255),random(255)),200,300,3,color(224,12,242),color(93,40,138));
	mon2 = new Monster(color(random(255),random(255),random(255)),400,500,2,color(18,27,138),color(138,21,30));
	mon3 = new Monster(color(random(255),random(255),random(255)),600,600,5,color(43,138,0),color(255,121,24));
}

function draw(){
	background(255);
	mon1.move();
	mon1.display(300);
	mon2.move();
	mon2.display(150);
	mon3.move();
	mon3.display(400);
}


function Monster(monCol, monXpos, monYpos, monXspeed,monEyeCol,monEyeColo){ // the constructor
	this.sk1 = monCol;
	this.xpos = monXpos;
	this.ypos = monYpos;
	this.speed = monXspeed;
	this.eye1 = monEyeCol;
	this.eye2 = monEyeColo;
	this.display = function(w){
		stroke(0);
		fill(this.sk1);
		ellipse(this.xpos, this.ypos, w,w);
		fill(this.eye1);
		rect(this.xpos - 30, this.ypos - 40 , 10,10);
		fill(this.eye2);
		rect(this.xpos + 50, this.ypos - 30, 30,40);


	} 

	this.move = function(){
		this.xpos = this.xpos + this.speed;
			if (this.xpos > width){
				this.xpos= 0;
			} // if
	}// move
} // car