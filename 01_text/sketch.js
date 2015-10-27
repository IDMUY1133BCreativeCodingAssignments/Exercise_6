
var monsters=[];

function setup(){
createCanvas(800,800);
    background(255);
monsters[0] = new Monster(color(0,255,0), color(255,0,0), color(0,0,255), 50, 450,250);
    monsters[1] = new Monster(color(100,100,0), color(255,0,255), color(0,50,255), 50, 150,250);
    monsters[2] = new Monster(color(40,40,100), color(30,230,90), color(200,40,40), 50, 450,650);
    monsters[3] = new Monster(color(50,60,70), color(100,150,30), color(100,100,255), 50, 150,650);

}

function Monster(tempC,tempC2,tempC3, tempW, tempX, tempY){
    
    this.c = tempC;
     this.c2 = tempC2;
     this.c3 = tempC3;
    this.w=tempW;
    this.x=tempX
    this.y=tempY
	

    
    this.display=function(){
    fill(this.c);
        curve(this.w/2 - 100 + this.x, this.w/2-100 + this.y, this.w/2 - 50 + this.x, this.w/2-200 + this.y, this.w/2 + 10 + this.x, this.w/2 -100 + this.y, this.w/2 -20 + this.x, this.w/2 + 20 + this.y); //left antenna
  curve(this.w/2 + 120 + this.x, this.w/2-80 + this.y, this.w/2 + 50 + this.x, this.w/2-200 + this.y, this.w/2 - 10 + this.x, this.w/2 - 100 + this.y, this.w/2 -20 + this.x, this.w/2 + 40 + this.y); //right antenna
  fill(this.c); //darker green
  ellipse(this.w/2 + this.x, this.w/2 + this.y, 180, 180); //bodthis.y  120, 160
  fill(this.c2); // purple
  noStroke(); 
  ellipse(this.w/2 - 20 + this.x, this.w/2 + 30 + this.y, 20, 10);  //wart
    
        
        
        //head
        fill(this.c3); // lighter green
  stroke(0); 
  ellipse(this.w/2 + this.x, this.w/2 - 120 + this.y, 80, 80); //head  // 100, 80
  fill(0);
  rect(this.w/2 - 25 + this.x, this.w/2 - 105 + this.y, 60, 1); //mouth
  fill(255);
  triangle(this.w/2 + 15 + this.x, this.w/2 - 90 + this.y, this.w/2 + this.x, this.w/2-105 + this.y, this.w/2 + 30 + this.x, this.w/2 - 105 + this.y); //tooth
  
  fill(this.c3); //lighter green
  ellipse(this.w/2 - 50 + this.x, this.w/2 - 200 + this.y, 20, 20); // left antenna point
  ellipse(this.w/2 + 50 + this.x, this.w/2 - 200 + this.y, 20, 20); // right antenna point
 
       
        //eye
        
        fill(255);
         ellipse(this.w/2 - 15 + this.x, this.w/2 - 120 + this.y, 15, 15); //left eye
  ellipse(this.w/2 + 25 + this.x, this.w/2 - 120 + this.y, 15, 15); //right eye
  fill(0);
  ellipse(this.w/2 - 15  + this.x, this.w/2 - 120  + this.y, 5, 5); //left pupil
  ellipse(this.w/2 + 25  + this.x, this.w/2 - 120  + this.y, 5, 5); //right pupil
  noFill();
        
    }


}

function draw(){
for(i=0; i< monsters.length;i++){
monsters[i].display();
}
    
}