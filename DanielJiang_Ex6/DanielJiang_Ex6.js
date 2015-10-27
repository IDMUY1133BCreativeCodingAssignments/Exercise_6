var squad=[];
var monsterParameters=[];
var wanderX,wanderY,c,x,y;

function setup(){
    createCanvas(1200,600);
    /*squad[0]=Monster(0, 0, color(170, 12, 14), color(189, 110, 14), color(111, 235, 23));
    squad[1]=Monster(100, 0, color(60, 189, 64), color(59, 220, 64), color(181, 35, 203));
    squad[2]=Monster(200, 0, color(70, 112, 164), color(89, 0, 124), color(11, 135, 253));
    squad[3]=Monster(300, 0, color(70, 242, 104), color(19, 10, 124), color(101, 255, 100));
    squad[4]=Monster(400, 0, color(255, 202, 244), color(0, 255, 0), color(1, 245, 250));*/ //this stuff works in processing but not in here
    monsterParameters[0]=new Monster(0, 0, color(170, 12, 14), color(189, 110, 14), color(111, 235, 23));
    monsterParameters[1]=new Monster(100, 0, color(60, 189, 64), color(59, 220, 64), color(181, 35, 203));
    monsterParameters[2]=new Monster(200, 0, color(70, 112, 164), color(89, 0, 124), color(11, 135, 253));
    monsterParameters[3]=new Monster(300, 0, color(70, 242, 104), color(19, 10, 124), color(101, 255, 100));
    monsterParameters[4]=new Monster(400, 0, color(255, 202, 244), color(0, 255, 0), color(1, 245, 250));
    for(var i=0; i<5;i++){
        squad.push(monsterParameters[i]);
    }
}

function draw(){
    background(255);
    /*Monster.monsterBody(100,100);
    Monster.head(100,100);    
    Monster.eyes(wanderX, wanderY);*/ //never again
    for(var i=0;i<squad.length;i++){
        squad[i].monsterBody(100,100);
        squad[i].head(120,160);
        squad[i].eyes(wanderX,wanderY);
    }
}

function Monster(tempX,tempY,sk1,sk2,wort){
    this.skin1=sk1;
    this.skin2=sk2;
    this.wort=wort;
    this.tempX=tempX;
    this.tempX=tempY;
    this.w=800;

    Monster.prototype.monsterBody=function(wide, tall){
        smooth();
        curve(this.w/2 - 100 + this.tempX, this.w/2-100 + this.tempY, this.w/2 - 50 + this.tempX, this.w/  2-200 + y, this.w/2 + 10 + this.tempX, this.w/2 -100 + this.tempY, this.w/2 -20 + x, this.w/2 + 20 + this.tempY);
        curve(this.w/2 + 120 + x, this.w/2-80 + y, this.w/2 + 50 + x, this.w/2-200 + y, this.w/2 - 10 + x, this.w/2 - 100 + y, this.w/2 -20 + x, this.w/2 + 40 + y); 
        fill(this.skin1);
        ellipse(this.w/2 + x, this.w/2 + y, wide, tall); 
        fill(this.wort);
        noStroke(); 
        ellipse(this.w/2 - 20 + x, this.w/2 + 30 + y, 20, 10);
    };
  
    Monster.prototype.head=function(wid,hei){
        fill(this.skin2);
        stroke(0); 
        ellipse(this.w/2 + x, this.w/2 - 120 + y, wid, hei);
        fill(0);
        rect(this.w/2 - 25 + x, this.w/2 - 105 + y, 60, 1);
        fill(255);
        triangle(this.w/2 + 15 + x, this.w/2 - 90 + y, this.w/2 + x, this.w/2-105 + y, this.w/2 + 30 + x, this.w/2 - 105 + y);
        //eyes(wanderX, wanderY);
        fill(60, 189, 64);
        ellipse(this.w/2 - 50 + x, this.w/2 - 200 + y, 20, 20); 
        ellipse(this.w/2 + 50 + x, this.w/2 - 200 + y, 20, 20); 
        noFill();
    };

    Monster.prototype.eyes=function(wX,wY){
        wanderX=map(mouseX, 0, width, -5, 5);
        wanderY=map(mouseY, 0, height, -5, 5); //Creates the variable that controls the eyes
        fill(193, 255, 64);
        ellipse(this.w/2 - 15 + x, this.w/2 - 120 + y, 15, 15); //left eye
        ellipse(this.w/2 + 25 + x, this.w/2 - 120 + y, 15, 15); //right eye
        fill(0);
        ellipse(this.w/2 - 15 + wX + x, this.w/2 - 120 + wY + y, 5, 5); //left pupil
        ellipse(this.w/2 + 25 + wX + x, this.w/2 - 120 + wY + y, 5, 5); //right pupil
        noFill();
    };
}