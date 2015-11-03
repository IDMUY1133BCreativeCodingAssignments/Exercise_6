var body1, body2, body3;



function setup(){
	createCanvas(700,700);
	body1 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),200,300,3);
    body2 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),250,500,5);
    body3 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,1);
    body4 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,8);
    body5 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,6);
    body6 = new Body(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),50,30,1);
}


function draw(){
	background(255);
	body1.move();
	body1.display(300);
	body2.move();
	body2.display(150);
	body3.move();
	body3.display(60);
    body4.move();
	body4.display(234);
    body5.move();
	body5.display(500);
}


function Body(color1,color2,color3, x, y, sp){ // the constructor
	this.sk1 = color1;
    this.sk2 = color2;
	this.xloc = x;
	this.yloc = y;
	this.speed = sp;
    
	this.display = function(h){
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

	this.move = function(){
		this.xloc = this.xloc + this.speed;
			if (this.xloc > width){
				this.xloc= 0;
			}
	}
} 