//object from assign 3 

var pacmans=[];//declare object array list
var lanes=[25,125,225,325,425];//declare array of lanes

function setup(){
    createCanvas(500,500);

    for (i=0;i<5;i++){
        pacmans[i]=new Pacman(random(width),lanes[i],random(3),color(random(225,255),random(200,250),random(0,100)));//create an array of 5 pacman objects for each lane
        //only shades of yellow
    }
}

function draw(){
    background(0);
    stroke(22,52,255);
    strokeWeight(3);
    for (i=0;i<=height;i=i+100){//drawing lanes
        line(0,i,width,i);
    }
    for (i=0;i<pacmans.length;i++){//run through array of pacmans by for loop
        pacmans[i].display();
        pacmans[i].eat();
        pacmans[i].move();
    }
    
}


function Pacman(locX,locY,speedX,pcolor){//pass variables of x location, y location, and speed
    this.xpos=locX;
    this.ypos=locY;
    this.xspeed=speedX;
    this.angle = 15;
    this.angle2 = 345;
    this.close = true;
    this.c=pcolor;


}

Pacman.prototype.move=function(){
    this.xpos=this.xpos+this.xspeed;//move pacman across the screen
    
    if (this.xpos>width){//bring back to when pacman moves off screen
        this.xpos=-50;
    }
}

Pacman.prototype.eat=function(){
    //angle adjusts to close and then open again the mouth
    
    if ((this.angle==15)&&(this.angle2==345)){
        this.close=true;
    }
    if ((this.angle==1)&&(this.angle2==359)){
        this.close=false;
    }
    if (this.close==true){
        this.angle=this.angle-1;//bottom lip goes up
        this.angle2=this.angle2+1;//top lip goes down
    }
    if (this.close==false){
        this.angle=this.angle+1;//bottom lip goes down
        this.angle2=this.angle2-1;//top lip goes up
    }
}

Pacman.prototype.display=function(){
    stroke(0);
    strokeWeight(2);
    fill(this.c);//any color circle
    
    arc(this.xpos+25,this.ypos+25,50,50,radians(this.angle),radians(this.angle2),PIE);//"eating"
    fill(0);
    ellipse(this.xpos+30,this.ypos+15,3,3);//eyes
    
}


