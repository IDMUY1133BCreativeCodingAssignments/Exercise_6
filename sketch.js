
var eye1, eye2;
var e;
var cockroach;

function setup() {

  createCanvas(700, 700);
  smooth();
  noStroke();

  eye1 = new Eye(width/2-140, height/2-160, 70);
  eye2 = new Eye(width/2-40, height/2-160, 70);
  cockroach = loadImage("cockroach.png");
}

function draw() {

  createCanvas(0);
  e = map(mouseX, 0, 700, 100, -100);

  //cockroach as mouse
  image(cockroach, mouseX-50, mouseY-50, cockroach.width/4, cockroach.height/4);

  translate(random(-8, 8), random(-8, 8));
  translate(e, 0);
  translate(0, e);

  if (mouseX<350 && mouseY<350) {
    translate(175, 175);
  } else if (mouseX<350 && mouseY>350) {
    translate(175, -175);
  } else if (mouseX>350 && mouseY<350) {
    translate(-175, 175);
  } else if (mouseX>350 && mouseY>350) {
    translate(-175, -175);
  } 

  if (mouseIsPressed) {
    translate(random(-300, 300), random(-300, 300));
  }

  body();

  eye1.update(mouseX, mouseY);
  eye2.update(mouseX, mouseY);

  eye1.display();
  eye2.display();
}

function body() {
  //fill(250, 0, 60);
  //ellipse(width/2, height/2, 200, 200);
  noStroke();
  fill(82, 68, 48);
  ellipse(390, 180, 100, 150);
  ellipse(280, 120, 250, 180);
  fill(242, 201, 178);
  ellipse(270, 250, 260, 250);
  ellipse(280, 160, 255, 140);
  fill(82, 68, 48);
  ellipse(168, 180, 100, 150);
  fill(242, 201, 178);
  ellipse(208, 180, 100, 150);
  ellipse(160, 225, 70, 80);
  ellipse(380, 225, 70, 80);
  stroke(0);
  ellipse(240, 280, 45, 40);
  ellipse(280, 280, 45, 40);
  ellipse(260, 290, 45, 39);
  noStroke();
  rect(220, 259, 80, 19);
  rect(235, 277.5, 49, 21);
  fill(82, 68, 48);
  ellipse(210, 160, 50, 40);
  ellipse(310, 160, 50, 40);
  fill(242, 201, 178);
  ellipse(210, 167, 60, 40);
  ellipse(310, 167, 60, 40);
  stroke(0);
  fill(0);
  ellipse(210, 190, 35, 40);
  ellipse(310, 190, 35, 40);
  fill(242, 201, 178);
  ellipse(210, 185, 35, 40);
  ellipse(310, 185, 35, 40);
  line(260, 185, 260, 260);
  noStroke();
  fill(240, 181, 160);
  //mouth
  fill(255);
  stroke(0);
  rect(220, 320, 85, 30);
  //teeth
  line(220, 335, 305, 335);
  line(237, 320, 237, 350);
  line(254, 320, 254, 350);
  line(271, 320, 271, 350);
  line(288, 320, 288, 350);
  line(305, 320, 305, 350);
}

//Eye class
function Eye() {
    var x, y,s;

    this.eyeX = x;
    this.eyeY = y;
    this.size = s;
    this.angle = 0.0;

    this.update = function( mx,  my) {
        this.angle = atan2(my-y, mx-x);  
    }
    
    this.display() {
        push();
        translate(this.eyeX, this.eyeY);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill(153);
        ellipse(this.size/4, 0, this.size/3, this.size/3);
        pop();
      }
    
  }

