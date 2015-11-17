var jack;
var w;  //jack width
var h;  //jack height
var xpos, ypos; // starting point

var xspeed;  // Speed of the shape
var yspeed;  // Speed of the shape

var xdirection;  // Left or Right
var ydirection;  // Top to Bottom


function setup(){
  createCanvas(1000,1000);
  background(255);
  frameRate(30);
  xpos= width/2;
  ypos= height/2;
  jack= new Name(120, 50, 5.8, 5.2, 2, 2, "Jack");
}


  
  
  function draw(){
    background(255);
    trampoline(pmouseX-250, 675);
    
    jack();
    loser();
    restart();
   
 
  }
  
  
  
                                                       // prints the loser page
  function loser(){
    if(ypos > height){
      background(0);
      fill(143,29,13);
      text("YOU LOSE", width/2, height/2);
      textSize(48);
      text("Press mouse to restart", width/2, height/2+45);
    }
  }
  
  
  
                                                      //restarts the game
  function restart(){
    if(mouseIsPressed){
      setup();
    }
  }
  
  
                                                                            //class creator
  function Name(wid, hei, sidespeed, upspeed, sidedirection, updirection, name){//for names
      
      this.w = wid;
      this.h = hei;
      this.xspeed = sidespeed;
      this.yspeed = upspeed;
      this.xdirection = sidedirection;
      this.ydirection = updirection;
      
 this.move(){     
    //change possision 
  xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );
    //keeps it in horizontally 
      if (xpos > width-w || xpos < w) {
    xdirection *= -1;
  }
  //keeps it from flying out upwards
  if ( ypos < h) {
    ydirection *= -1;
  }
    
    
  if(pmouseX-250 <xpos  && xpos< pmouseX+250 && ypos > 730 && ypos < 750){
   
        ydirection *= -1;
      
  }
 }
    
   this.text(){ 
  textSize(128);
  fill(143,29,13);
  textAlign(CENTER);
  text(name, xpos,ypos);
}
}

  
 
























//draws the trampoline
  function trampoline(x, y){
    push();
    translate(x,y); 
    legone();
    legtwo();
    legthree();
    body();
    pop();
  }
  
  function legone(){                                   //middle leg
    strokeWeight(3);
    ellipse(340,261,18,5);
    stroke(0);
     rectMode(CENTER);
    fill(180,206,203);
    rect(340,210,15,130);
    stroke(2);
    fill(56,61,65);
    rect(340,269,18,10);
    ellipse(340,280,24,8);
    ellipse(340,288,24,8);
    rect(340,284,24,4);
  }
    function legtwo(){                                  //back left leg
   strokeWeight(3);
    ellipse(30,221,18,5);
    stroke(0);
     rectMode(CENTER);
    fill(180,206,203);
    rect(30,170,15,130);
    stroke(2);
    fill(56,61,65);
    rect(30,229,18,10);
    ellipse(30,240,24,8);
    ellipse(30,248,24,8);
    rect(30,244,24,4);
  }
    function legthree(){                                     //back right leg
    stroke(0);
     rectMode(CENTER);
    fill(180,206,203);
    rect(480,140,15,64);
    stroke(2);
    fill(56,61,65);
     rect(480,163,18,10);
    ellipse(480,174,24,8);
    ellipse(480,182,24,8);
    rect(480,178,24,4);
  }
  
  function body(){                                         //body of the trampoline
    
   fill(49,112,207);
   ellipse(250,90,500,125);
   fill(115,123,126);
   ellipse(250,80,355,75);
  }