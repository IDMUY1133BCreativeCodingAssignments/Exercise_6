var monsters = [];
var colors = [];
function setup(){
    //var colors = [];

    var grey = color(175);
    var berry = color(178, 33, 84);
    var green = color(147, 255, 156);
    var white = color(255, 255, 255);
    var norm = 10;
    
    frameRate(10);
    createCanvas(800, 800);
    colors.push(grey);
    colors.push(berry);
    colors.push(green);
    colors.push(white);
     monsters.push(new Monster(10, 300, .5, colors[0], colors[1], colors[2], true, false));
    monsters.push(new Monster(300, 450, .8, colors[3], colors[1], colors[0], false, false));
    monsters.push(new Monster(350, 40, 1.2, colors[3], colors[0], colors[2], true, true));
    monsters.push(new Monster(100, 30, .5, colors[1], colors[2], colors[3], true, true));
}


function draw(){
    background(0);
    monsters[0].monstDraw(); //draws each monster within the index of the array
    monsters[1].monstDraw();
    monsters[2].monstDraw();
    monsters[3].monstDraw();
  }

//constructor 
function Monster(translateByX, translateByY, scaleBy, feet, ear, body, wideEye, openMouth){
    this.tbx = translateByX; //defines values for the variables for "this"                              specific monster
    this.tby = translateByY;
    this.scale = scaleBy;
    this.feet = feet;
    this.ear = ear;
    this.body = body;
    this.wideEye = wideEye;
    this.openMouth = openMouth;
}

Monster.prototype.monstDraw = function(){ //makes a method of the Monster class
    push();
    translate(this.tbx, this.tby); //accepts what we made in the constructor as parameters
    scale(this.scale);
    feet(this.feet); //will take feet color variable as a parameter 
    //calls  all the individual body part functions
    ears(this.ear);
    horn();
    arms();
    body(this.body);
    brows();
    eyes(this.wideEye); //if wideEye is true, the pupil widens
    mouth(); //if openMouth is true, the mouth opens when a key is pressed
    pop();
}
   
function feet(feet){
    fill(feet);
    ellipse(140, 310, 40, 30);
    ellipse(260, 310, 40, 30);
}

function ears(ear){
    fill(ear);
    triangle(90, 100, 150, 140, 100, 150);
    triangle(310, 100, 250, 140, 300, 150);
}

function horn() { //little horn on top
  fill(255, 70, 58);
  ellipse(200, 150, 30, 100);
}

function arms() { //arms 
  fill(255, 146, 106);
  rect(50, 225, 300, 30);
}
function body(_body) { //fills body with color parameter
  fill(_body);
  rect(100, 125, 200, 175);
}
function brows() { //draws the brows
  strokeWeight(3);
  line(110, 175, 160, 175);
  line(240, 175, 290, 175);
}
function eyes(chosenOne) { //draws eyes, chosenOne is supposed to determine if the eyes widen
  fill(170, 252, 255);
  ellipse(135, 210, 30, 30);
  ellipse(265, 210, 30, 30);
  if(chosenOne){
    widenEyes();
  }
  }

function mouth() { //mouth is open if chosenMouth is true 
  if(mouseIsPressed){
  fill(255, 99, 97);
  rect(135, 240, 130, 30);
  fill(255);
  rect(170, 240, 60, 10);
  }
  else{
      line(135, 265, 265, 265);
  }
}

function widenEyes(){
 norm++; //increases pupil size 
 console.log(norm); //prints out NaN ? (not a number)
 norm = constrain(norm, 10, 30);
 if(norm == 30){
   norm = 10;
 }
  fill(0);
  ellipse(135, 210, norm, norm);
  ellipse(265, 210, norm, norm);
}