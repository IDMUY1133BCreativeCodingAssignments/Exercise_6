var myMonster;
//var color1=[];
//var color2=[];
//var color3=[];
var headSize=[];

function setup() {
    background(255);
    createCanvas(1200, 600);
    //color1=[color(170, 12, 14),color(60, 189, 64),color(70, 112, 164),color(70, 242, 104),color(255, 202, 244)];
    //color2=[color(189, 110, 14),color(59, 220, 64),color(89, 0, 124),color(19, 10, 124),color(0, 255, 0)];
    //color3=[color(111, 235, 23),color(181, 35, 203), color(11, 135, 253),color(101, 255, 100),color(1, 245, 250)];
}

function draw() {
    for (var i=-800; i<width; i+=250) {
        
            myMonster=new Monster(i, 0, color(170, 12, 14), color(59, 220, 64), color(181, 35, 203));
            myMonster.monsterBody(100,100);
            myMonster.head(100,100);
            myMonster.eyes();
        
    }
}

function Monster(tempX,tempY,sk1,sk2,wort_) {
    var skin1;
    var skin2;
    var blink;
    var wort;
    var x;
    var y;
    var wanderX;
    var wanderY;
    var percentScale;
    var w;
    this.skin1 = sk1;
    this.skin2 = sk2;
    this.blink = sk1;
    this.wort = wort_;
    this.x = tempX;
    this.y = tempY;
    this.w = 800;
}

  // all the methods go below the constructor
Monster.prototype.monsterBody=function( wide,  tall) {
    smooth();
    curve(this.w/2 - 100 + this.x, this.w/2-100 + this.y, this.w/2 - 50 + this.x, this.w/  2-200 + this.y, this.w/2 + 10 + this.x, this.w/2 -100 + this.y, this.w/2 -20 + this.x, this.w/2 + 20 + this.y);
    curve(this.w/2 + 120 + this.x, this.w/2-80 + this.y, this.w/2 + 50 + this.x, this.w/2-200 + this.y, this.w/2 - 10 + this.x, this.w/2 - 100 + this.y, this.w/2 -20 + this.x, this.w/2 + 40 + this.y); 
    fill(this.skin1);
    ellipse(this.w/2 + this.x, this.w/2 + this.y, 100, 100); 
    fill(this.wort);
    noStroke(); 
    ellipse(this.w/2 - 20 + this.x, this.w/2 + 30 + this.y, 20, 10);
}

Monster.prototype.head=function( wid,  hei) {
    fill(this.skin2);
    stroke(0); 
    ellipse(this.w/2 + this.x, this.w/2 - 120 + this.y, 120, 160);
    fill(0);
    rect(this.w/2 - 25 + this.x, this.w/2 - 105 + this.y, 60, 1);
    fill(255);
    triangle(this.w/2 + 15 + this.x, this.w/2 - 90 + this.y, this.w/2 + this.x, this.w/2-105 + this.y, this.w/2 + 30 + this.x, this.w/2 - 105 + this.y);
    fill(60, 189, 64);
    ellipse(this.w/2 - 50 + this.x, this.w/2 - 200 + this.y, 20, 20); 
    ellipse(this.w/2 + 50 + this.x, this.w/2 - 200 + this.y, 20, 20); 
    noFill();
}

Monster.prototype.eyes=function(){
    wanderX=map(mouseX, 0, width, -5, 5);
    wanderY=map(mouseY, 0, height, -5, 5); //Creates the variable that controls the eyes
    fill(193, 255, 64);
    ellipse(this.w/2 - 15 + this.x, this.w/2 - 120 + this.y, 15, 15); //left eye
    ellipse(this.w/2 + 25 + this.x, this.w/2 - 120 + this.y, 15, 15); //right eye
    fill(0);
    ellipse(this.w/2 - 15 + wanderX + this.x, this.w/2 - 120 + wanderY + this.y, 5, 5); //left pupil
    ellipse(this.w/2 + 25 + wanderX + this.x, this.w/2 - 120 + wanderY + this.y, 5, 5); //right pupil
    noFill();
}