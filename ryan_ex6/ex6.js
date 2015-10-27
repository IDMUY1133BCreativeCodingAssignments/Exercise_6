var monsta;
var speeds;


function setup(){
	
	frameRate(60);
	createCanvas(800,600);
	speeds = [-2, -4, -8, -10, -12];
	monsta = new Monsta(color(random(255),random(255),random(255)),400,height+200,0,speeds[floor(random(4.8))]);
	monsta2 = new Monsta(color(77,255,34),100,height+200,0,speeds[floor(random(4.8))]);
	monsta3 = new Monsta(color(random(255),random(255),random(255)),250,height+40,0,speeds[floor(random(4.8))]);
	monsta4 = new Monsta(color(random(255),random(255),random(255)),650,height+70,0,speeds[floor(random(4.8))]);
	monsta5 = new Monsta(color(255,235,34),300,320,0,speeds[floor(random(4.8))]);
	monsta6 = new Monsta(color(255,235,34),700,320,0,speeds[floor(random(4.8))]);

}

function draw(){

	background(43);
	monsta5.move();
	monsta5.display(500);
	monsta.move();
	monsta.display(300);
	monsta2.move();
	monsta2.display(250);
	monsta3.move();
	monsta3.display(100);
	monsta4.move();
	monsta4.display(225);
	monsta6.move();
	monsta6.display(120);

}

function Monsta(surface, tempXpos, tempYpos, tempXspeed, tempYspeed){

	this.col = surface;
	this.xpos = tempXpos;
	this.ypos = tempYpos;
	this.xspeed = tempXspeed;
	this.yspeed = tempYspeed;

	this.display = function(x){
		stroke(this.col);
		strokeWeight(4);
		fill(255);
		ellipse(this.xpos, this.ypos, x+20, x+20);
		fill(0,0,0,220);
		ellipse(this.xpos, this.ypos, x, x);
		fill(255);
		stroke(255);
		ellipse(this.xpos+x/5, this.ypos-x/4, x/3, x/6);
		ellipse(this.xpos-x/5, this.ypos-x/4, x/3, x/6);
		fill(0);
		stroke(0);
		ellipse(this.xpos+x/5, this.ypos-x/4, x/6, x/6);
		ellipse(this.xpos-x/5, this.ypos-x/4, x/8, x/8);


	}

	this.move = function(){
		this.xpos = this.xpos + this.xspeed;
		if(this.xpos > width){
			this.xpos = 0;
		}
		this.ypos = this.ypos + this.yspeed - random(-5,5);
		if(this.ypos > height+200 || this.ypos < -200){
			this.ypos = height+200;
		}

	}
}