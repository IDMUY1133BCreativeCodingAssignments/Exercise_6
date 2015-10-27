
// customA is an array;
// nothing in the brackets

var customA = [];

function setup(){
    createCanvas(800,800);
    // this first unit of the array is one new thing
    customA[0] = new thing();
    }
    // this second unit of the array is another new thing
    customA[1] = new thing();
    // doesn't need any variable, just calls the class constructor
      
}


function draw(){
    // Should Display all the methods
    
    customA[0].head();
    customA[0].eyes();
    customA[0].mouth();
    customA[0].tongue();
    
    customA[1].head();
    customA[1].eyes();
    customA[1].mouth();
    customA[1].tongue();   
   
}


// class constructor
function thing(){
        
    // all of thing1's data/variables
    var sk1.c = color(random(255), random(255), random(255));
    xloc = x;
    yloc = y; 
    // x = 250
    // y = 250
    
    
}

// prototype = methods
thing.prototype.head = function (x,y){
    noStroke();
    fill(sk1.c);
    ellipseMode(CENTER);
    ellipse(x + 50, y, x + 50, y + 50);
}


thing.prototype.eyes = function (x,y){
    // Eyes1
    fill(sk1.c);
    noStroke();
    ellipse(x + 10, y - 20, 70, 90); //(x, y, w, h)
    ellipse(x + 110, y- 20, 70, 90);
    //Eyes2
    fill(0);
    ellipse(x + 10, y - 40, 45, 45);
    ellipse(x + 110, y - 40, 45, 45);
    
}

thing.prototype.mouth = function (){
    //Mouth
    stroke(.5);
    //fill(50, 150, 0);
    fill(sk1.c);
    rectMode(CORNER);
    rect(254, 300, 118, 11); //( x, y, w, h)
}

thing.prototype.tongue = function (){
    //Tongue
    noStroke();
    fill(sk1.c);
    arc(315, 310, 90, 105, 0, PI, PIE); // (x, y, w, h, angle start, angle stop,)
  }
}

