// i refrenced the P5js refrece page on P5js.org the exapmle was called Array of objects  it shows how to make many circles apear using objects and arrays 
var monsters = [];  // Declare object
var x 
function setup() {
  createCanvas(710, 400);
  // Create object
  //bug = new Jitter();
	for(var i = 0; i<100; i++){
    monsters.push(new monster());// this is making 5 new monsters by implementing them with a for loop 
  
    }
}

function draw() {
  background(50, 89, 100);
	for(var i=0; i<monsters.length; i++){//using all the monsters we created before and imputing them into the move and display function to create 5 monsters.
  monsters[i].move(); 
  monsters[i].display();
	

	}
}

// monster class 
function monster() {
  this.xpos = random(-400,500); //this gives a random x position so they seem spread out in a line
  this.ypos = -20 //this allows them to all be in the same y pos 
  
this.c = color (round(random(255)),round(random(255)),round(random(255)));//random color
this.c2 = color(round(random(255)),round(random(255)),round(random(255)));//random color 2
	this.c3 = color(round(random(255)),round(random(255)),round(random(255)));//random color 3
  this.move = function() {
    
  };//end of class needs a ; for it is a class 

  this.display = function() {
	  
	  //this.(...) takies the values created obove and implements them because they are random it spreads out the different objects (monsters) and multiple will apear, this movment is used by xpos and y pos while the color is c2 and c
	    
	  fill(this.c);//head color
  ellipse(250 + this.xpos, 270 + this.ypos, 100, 200);// head
  fill (this.c2);//mouth color
  ellipse (250 + this.xpos, 350 + this.ypos, 50, 75);//mouth 
  ellipse(210 + this.xpos, 220 + this.ypos, 70, 70);// outer eye
  ellipse(290 + this.xpos, 220 + this.Ypos, 70, 70);
  fill (this.c2);
  ellipse(210 + this.xpos, 220 + this.ypos, this.xpos/4, this.ypos/4);//inner eye 
  ellipse(290 + this.xpos, 220 + this.ypos, 20, 20);
  fill(this.c3);//nose color
  triangle(250 + this.xpos, 250 + this.ypos, 220 + this.xpos, 280 + this.ypos, 280 + this.xpos, 280 + this.ypos); // nose
  ellipse (250 + this.xpos, 350 + this.ypos, 50, 75);
  rect(125 + this.xpos , 100 + this.ypos, 250, 50);// hat
  rect(200 + this.xpos, 50 + this.ypos, 100, 100);
    
	  
    
  }
};
