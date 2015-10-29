var bunnies = new Bunny [5]; //new array 'bunnies'
var skin, eyes, wid, hei, x, y; //variables

function setup(){
    createCanvas(1000,1000);
    bunnies[0] = new Bunny (100,300, color(20), color(100));
    bunnies[1] = new Bunny(-300, 220, color(190, 200, 50), color(80, 80, 23));
    bunnies[2] = new Bunny(220, 540, color(95), color(0));
    bunnies[3] = new Bunny(530, 80, color(255,80,100), color(29,190,255));
    bunnies[4] = new Bunny(100, 160, color(200, 255, 220), color(200, 240, 255));
}

function draw(){
    background(220,160,160);
    
    for (int i = 0; i < bunnies.length; i++){
        bunnies[i].head(330,280);
    }
}

function Bunny(newX, newY, skin1, eyeColor){    
    this.skin = skin1;
    this.eyes = eyeColor;
    this.x = newX;
    this.y = newY;
    this.w = 300;
    
    
   function head(wid, hei){
    fill(skin); //beige
    ellipse(this.w+x, this.w+100+y, wid, hei); //head
    ellipse(this.w-150+x, this.w-100+y, wid/4, hei/.75); //left ear
    ellipse(this.w+150+x, this.w-100+y, wid/4, hei/.75); //right ear

    fill(255, 242, 241); //pink
    ellipse(this.w-145+x, this.w-150+y, wid/9.8, hei/3); //ear middle L
    ellipse(this.w+145+x, this.w-150+y, wid/9.8, hei/3); //ear middle R

    //facial features
    //eyes
    fill(eyes);
    ellipse(this.w - 100 + x, this.w + 50 + this.y, wid/10, wid/9.5); //left eye
    ellipse(this.w+100+this.x, this.w+50+this.y, wid/10, wid/9.5); //right eye
    stroke(232, 223, 208); //beige stroke
    //nose
    fill(232, 163, 146);
    ellipse(this.w+this.x, this.w+80+this.y, wid/9.6, hei/13.3);
    //mouth
    stroke(178, 129, 85);
    strokeWeight(2);
    fill(255, 155, 137);
    triangle(this.w+this.x, this.w+95+this.y, this.w-20+this.x, this.w+this.y+110, this.w+20+this.x, this.w+110+this.y);
    //cheeks
    noStroke();
    fill(255, 242, 241);
    ellipse(this.w-140+this.x, this.w+100+this.y, wid/8, hei/8);
    ellipse(this.w+140+this.x, this.w+100+this.y, wid/8, hei/8);
   }
}