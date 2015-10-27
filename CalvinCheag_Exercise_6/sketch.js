
var p,q,r,s,t,u,v,w,x,y;
var mon = [];


function setup(){
    createCanvas(800,800);
    mon[0] = new Monster();
    mon[1] = new Monster();
    mon[2] = new Monster();
    mon[3] = new Monster();
    mon[4] = new Monster();
    frameRate(2);
}

function draw(){
    background(255);
    var p = random(width);
    var q = random(height);
    var r = random(width);
    var s = random(height);
    var t = random(width);
    var u = random(height);
    var v = random(width);
    var w = random(height);
    var x = random(width);
    var y = random(height);
    mon[0].display(p,q);
    mon[1].display(r,s);
    mon[2].display(t,u);
    mon[3].display(v,w);
    mon[4].display(x,y);
}

function Monster(x,y){
    this.x = x;
    this.y = y;
    this.skin = color(random(255), random(255), random(255));
    this.shirt = color(random(255), random(255), random(255));
    this.pants = color(random(255), random(255), random(255));
    this.eye = color(random(255), random(255), random(255));
}

Monster.prototype.display = function(x,y){
  noStroke();
  fill(0);
  triangle(x,y-50,x-100,y-150,x-50,y+50);
  triangle(x,y-50,x+100,y-150,x+50,y+50);
  fill(this.skin);  //skin color
  quad(x-25,y+250,x-75,y+350,x-150,y+350,x-100,y+275);
  quad(x+25,y+250,x+75,y+350,x+150,y+350,x+100,y+275);
  quad(x-25,y+150,x-25,y+200,x-150,y+187,x-150,y+162);
  quad(x+25,y+150,x+25,y+200,x+150,y+187,x+150,y+162);
  fill(this.shirt);  //shirt color
  rect(x-50,y+100,100,200);
  fill(this.pants);  //pants color
  rect(x-50,y+100,100,125);
  ellipse(x,y+225,100,50);
  fill(this.skin);    //skin color
  ellipse(x,y,225,275);
  
  fill(this.eye);    //eye color
  arc(x-30,y-35,60,60,QUARTER_PI,PI+QUARTER_PI, PIE);
  arc(x+30,y-35,60,60,0-QUARTER_PI,HALF_PI+QUARTER_PI,PIE);
  ellipse(x,y+50,100,50);
  fill(this.skin);    //skin color
  ellipse(x,y+35,200,50);
}