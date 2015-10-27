//Creative Coding: Exercise 06
//translating Processing code to p5.js and in OOP
//I am using my monsters from Exercise05 to complete this exercise

var purple, red, blue, yellow, green;

monsters [];

//setting up the colors, putting the colors into an array

function setup() {
  
    createCanvas(1000, 1000);
    
  }
} //function setup


function draw() {
  
    background(255);
    
    for (var i=0; i<monsters.length; i++) {
    monsters.push(new Monster()); //How do you pass parameters through an array?
    
    
} //function draw


function Monster(tempXpos, tempYpos, color1, color2) //declaring variables
    //constructor of Monster class
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.col1 = color1;
    this.col2 = color2;
  
    this.display = function(var w, var h){
        stroke(0);
        strokeWeight(4);

        //Monster's arms
        ellipse(175 + this.xpos, 325 + this.ypos, 100 + w, 50 + h);
        ellipse(425 + this.xpos, 325 + this.ypos, 100 + w, 50 + h);

        //Monster's body
        fill(col1);
        ellipse(300 + this.xpos, 380 + this.ypos, 330 + w, 230 + h);

        //Monster's legs
        fill(col1);
        ellipse(150 + this.xpos, 445 + this.ypos, 150 + w, 75 + h);
        ellipse(450 + this.xpos, 445 + this.ypos, 150 + w, 75 + h);

        //Monster's mouth
        fill(171, 25, 60);
        triangle(300 + this.xpos, 215 + this.ypos, 310 + this.xpos, 230 + this.ypos, 290 + this.xpos, 230 + this.ypos);
    } //this.display  monster body
  
    this.display_ = function(var wid, var hei){ //monster head
        stroke(0);
        strokeWeight(4);


        //Monster's horns
        fill(171, 117, 42);
        triangle(270 + this.xpos, 255 + this.ypos, 214 + this.xpos, 255 + this.ypos, 215 + this.xpos, 220 + this.ypos);
        triangle(330 + this.xpos, 255 + this.ypos, 386 + this.xpos, 255 + this.ypos, 385 + this.xpos, 220 + this.ypos);

        //Monster's ears
        fill(232, 161, 57);
        ellipse(240 + this.xpos, 260 + this.ypos, 80 + wid, 50 + hei);
        ellipse(360 + this.xpos, 260 + this.ypos, 80 + wid, 50 + hei);

        //Monster's head
        fill(col2);
        ellipse(300 + this.xpos, 290 + this.ypos, 160 + wid, 175 + hei);
  
        //monster's eyes
        fill(0);
        ellipse(350 + this.xpos, 300 + this.ypos, 5, 10);
        ellipse(250 + this.xpos, 300 + this.ypos, 5, 10);
  
    } // this.display_   monster head
  
  
} //end of class Monster