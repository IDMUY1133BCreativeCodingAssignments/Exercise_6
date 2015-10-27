var bunnies = new Bunny [5];

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
    var skin, eyes, wid, hei, x, y;
    var w = 300;
    
    this.skin = skin1;
    this.eyes = eyeColor;
    this.x = newX;
    this.y = newY;
    
    
   function head(wid, hei){
    fill(skin); //beige
    ellipse(w+x, w+100+y, wid, hei); //head
    ellipse(w-150+x, w-100+y, wid/4, hei/.75); //left ear
    ellipse(w+150+x, w-100+y, wid/4, hei/.75); //right ear

    fill(255, 242, 241); //pink
    ellipse(w-145+x, w-150+y, wid/9.8, hei/3); //ear middle L
    ellipse(w+145+x, w-150+y, wid/9.8, hei/3); //ear middle R

    //facial features
    //eyes
    fill(eyes);
    ellipse(w-100+x, w+50+y, wid/10, wid/9.5); //left eye
    ellipse(w+100+x, w+50+y, wid/10, wid/9.5); //right eye
    stroke(232, 223, 208); //beige stroke
    //nose
    fill(232, 163, 146);
    ellipse(w+x, w+80+y, wid/9.6, hei/13.3);
    //mouth
    stroke(178, 129, 85);
    strokeWeight(2);
    fill(255, 155, 137);
    triangle(w+x, w+95+y, w-20+x, w+y+110, w+20+x, w+110+y);
    //cheeks
    noStroke();
    fill(255, 242, 241);
    ellipse(w-140+x, w+100+y, wid/8, hei/8);
    ellipse(w+140+x, w+100+y, wid/8, hei/8);
   }
}