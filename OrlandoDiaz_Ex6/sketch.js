//Happy almost Halloween! We got a pumpkin flower! A magically random flower! and something hiding in the bushes!!! I didn't use any references actually besides your p5.js examples, I essentially brute forced it. But I understood it!
var flower1;
var flower2;
var flower3;
function setup(){
    createCanvas(800, 800);
    flower1 = new Flowey(365,435,color(186,20,15),color(32,135,46), 320,475,400,color(32,135,46), 385,347,280,453,520,color(200),400,390,350,410,450,color(255, 241, 64));
    flower2 = new Flowey(565,635,color(0),color(0), 320,475,400,color(0), 585,547,480,653,720,color(random(0,255),random(0,255),random(0,255)),600,590,550,610,650,color(random(0,255)));
    flower3 = new Flowey(165,235,color(255),color(0,255,0), 320,475,400,color(237,226,60), 185,147,80,253,320,color(237,119,60),200,190,150,210,250,color(32,135,46));
}//setup
function draw(){
    background(255);
    flower1.display();
    flower2.display();
    flower3.display();
}//draw
function Flowey(lpupilx_, rpupilx_, leftpupil_, rightpupil_, petal1y_, petal2y_, petal3y_, stem_, stemx_,petalx1_, petalx2_, petalx3_, petalx4_,headc_,head_,leye1_,leye2_,reye1_,reye2_,petalc_){
    this.lpupilx = lpupilx_;
    this.rpupilx = rpupilx_;
    this.leftpupil = leftpupil_;
    this.rightpupil = rightpupil_;
    this.petal1y = petal1y_;
    this.petal2y = petal2y_;
    this.petal3y = petal3y_;
    this.stem = stem_;
    this.stemx = stemx_;
    this.petalx1 = petalx1_;
    this.petalx2 = petalx2_;
    this.petalx3 = petalx3_;
    this.petalx4 = petalx4_;
    this.headc = headc_;
    this.head = head_;
    this.leye1 = leye1_;
    this.leye2 = leye2_;
    this.reye1 = reye1_;
    this.reye2 = reye2_;
    this.petalc = petalc_;
    this.display = function(){
        strokeWeight(3);
  fill(this.stem); //Stem color
  rect(this.stemx, 450, 30, 180); //Stem
  fill(this.petalc); //Petal color
  ellipse(this.petalx1, this.petal1y, 100, 100); //Top Left Petal
  ellipse(this.petalx1, this.petal2y, 100, 100); //Bottom Left Petal
  ellipse(this.petalx2, this.petal3y, 100, 100); //Left Petal
  ellipse(this.petalx3, this.petal1y, 100, 100); //Top Right Petal
  ellipse(this.petalx3, this.petal2y, 100, 100); //Bottom Right Petal
  ellipse(this.petalx4, this.petal3y, 100, 100); //Right Petal
  fill(this.headc); //Head color
  ellipse(this.head, 400, 200, 170); //Head
  fill(0); //Eye color
  triangle(this.leye1, 400, this.leye2, 370, this.leye2, 410); //Left Eye
  fill(0); //Eye color
  triangle(this.reye1, 400, this.reye2, 370, this.reye2, 410); //Right Eye
  strokeWeight(1);
  fill(this.leftpupil); //Left Pupil Color
  ellipse(this.lpupilx, 395, 15, 15); //Left Pupil
  fill(this.rightpupil); //Right Pupil Color
  ellipse(this.rpupilx, 400, 8, 8); //Right Pupil
  fill(0); //Nose color
  ellipse(400, 415, 5, 10); //Nose
  strokeWeight(4);
  fill(0); //Mouth Color
  line(340, 450, 460, 450); //Mouth Line
  line(400, 460, 400, 440); //Middle Skull Line
  line(370, 460, 370, 440); //Left Skull Line
  line(430, 460, 430, 440); //Right Skull Line
    }//display
}//class Flowey