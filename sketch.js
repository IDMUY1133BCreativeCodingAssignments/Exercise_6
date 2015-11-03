var body= [body1, body2, body3, body4, body5, body6];  //declaring body variables in array; 6 monsters



function setup(){
	createCanvas(700,700);  //size(700,700)
	body1 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),200,300,3);  //first body, random colors, location, speed
    body2 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),250,500,5);  //second body, random colors, location, speed
    body3 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,1);  //third body, random colors, location, speed
    body4 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,8);  //fourth body, random colors, location, speed
    body5 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,6);  //fifth body, random colors, location, speed
    body6 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,1);  //sixth body, random colors, location, speed
}


function draw(){
	background(255); //white background
	body1.move();  //calls move function
	body1.display(300); //display(size)
	body2.move();
	body2.display(150);
	body3.move();
	body3.display(60);
    body4.move();
	body4.display(234);
    body5.move();
	body5.display(500);
    body6.move();
	body6.display(340);
}


function Body(color1,color2,color3, x, y, sp){ // the constructor
	this.sk1 = color1;  //random
    this.sk2 = color2;  //random
	this.xloc = x;
	this.yloc = y;
	this.speed = sp;
    
	this.display = function(h){  //variable h changes location and dimensions
		stroke(0);
		fill(this.sk1);
		ellipse(this.xloc, this.yloc, h,h);
		fill(this.sk2);
		ellipse(this.xloc - h/3, this.yloc, h/2,h/2);
        ellipse(this.xloc + h/3, this.yloc, h/2,h/2);
		fill(this.sk3);
		rect(this.xloc - 7, this.yloc, h/13,h/4);
        fill(255);
        ellipse(this.xloc - h/3, this.yloc, h/4,h/4);
        ellipse(this.xloc + h/3, this.yloc, h/4,h/4);
        fill(this.sk2);
        triangle(this.xloc,this.yloc +50, this.xloc +70, this.yloc +50, this.xloc/2 -50, this.yloc +100);


	} 

	this.move = function(){  //moves body by changing speed
		this.xloc = this.xloc + this.speed;
			if (this.xloc > width){
				this.xloc= 0;
			}
	}
} 