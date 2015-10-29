//Class is based upon monster from exercise 1

var monster; 
var monsters=[]; //new array monsters

function setup(){
    createCanvas(800,800); 
   // monster = new Monster();
    for(var i = 0; i <30; i++){ //for every index i, making new monster
        monsters.push(new Monster());
    }
    
//literal
}

function draw(){

    background(255); 
    for(var i =0; i < monsters.length; i++){
        monsters[i].face();
        monsters[i].innerEar();
        monsters[i].everythingElse();
        // for every number 1-29, calling functions inside monster class
    }
    /*
    monster.face();
    monster.innerEar();
    monster.everythingElse();
    */
}
function Monster(){
    this.c1 = color(160); 
    this.c2 = color (170,100,50);
    this.c3 = color (200,40,20);
    this.x = 10;
    this.y = 10; 
    

    this.face = function(){
        stroke(0);
        fill(this.c);
            ellipse(this.x+300,200+this.y,350,290); //head
            ellipse(150+this.x,80+this.y,90,65);//left ear brown
            ellipse(450+this.x,80+this.y,90,65);//right ear brown
            triangle(290+this.x, 255+this.y, 320+this.x, 255+this.y, 307+this.x, 270+this.y);
    
    }
    this.innerEar = function(){
    fill(this.c);
    ellipse(150+this.x,80+this.y,60,45);// left ear
    ellipse(450+this.x,80+this.y, 60, 45);// right ear
    ellipse(310+this.x, 295+this.y, 140, 100);//mouth 
    }//innerEar

    this.everythingElse = function(){
        stroke(0); 
        fill(this.c2); 
        ellipse(220+this.x, 180+this.y, 65, 105); 
        ellipse(400+this.x, 180+this.y, 65, 105);
        fill(this.c);
        //fill(#FA4CF7);
        ellipse(220+this.x, 180+this.y, 45, 90);
            fill(this.c);
        //fill(#3483FF);
        ellipse(400+this.x, 180+this.y, 45, 90);
        fill(this.c);
        ellipse(220+this.x, 180+this.y, 38, 75);
        fill(this.c3);
        ellipse(400+this.x, 180+this.y, 38, 75);
        fill(255);
        ellipse(390+this.x, 165+this.y, 12, 24);
        ellipse(210+this.x, 165+this.y, 12, 24);
        stroke(50); 
        fill(this.c);
        //rect(260, 275, 100, 50); 
        fill(255, 0, 0);
        ellipse(310+this.x, 300+this.y, 90, 45);
        fill(255); 
        triangle(280+this.x, 290+this.y, 290+this.x, 290+this.y, 285+this.x, 310+this.y);
        triangle(330+this.x, 290+this.y, 340+this.x, 290+this.y, 335+this.x, 310+this.y);
        fill(255, 0, 0);
        ellipse(335+this.x, 325+this.y, 5, 15); 
        ellipse(320+this.x, 335+this.y, 15, 5);
        stroke(255,0,0); 
        line(300+this.x,100+this.y,300+this.x,175+this.y);
        line(275+this.x, 130+this.y, 325+this.x, 130+this.y);
        stroke(0);
        fill(this.c2);
        line(128+this.x,230+this.y, 115+this.x,230+this.y); 
        rect(108+this.x,220+this.y, 10,20); 
        line(485+this.x,230+this.y, 472+this.x,230+this.y); 
        rect(480+this.x,220+this.y, 10,20);
        } //everythingElse

        }