var monsters [];


function setup(){
	createCanvas(1000,1000);
	for (var i=0; i<5; i++){
		monsters[i] = {
			x: random(0,1000),
			y: random(0,1000),
			skin1: color(random(255)),
			skin2: color(random(255)),
			monsterBody : function(){
				smooth();
				curve(width/2 - 100 + this.x, width/2-100 + this.y, width/2 - 50 + this.x, width/2-200 + this.y, width/2 + 10 + this.x, width/2 -100 + this.y, width/2 -20 + this.x, width/2 + 20 + this.y); //left antenna
    			curve(width/2 + 120 + this.x, width/2-80 + this.y, width/2 + 50 + this.x, width/2-200 + this.y, width/2 - 10 + this.x, width/2 - 100 + this.y, width/2 -20 + this.x, width/2 + 40 + this.y); //right antenna
    			fill(this.skin1); //darker green
    			ellipse(width/2 + this.x, width/2 + this.y, 120,160); //body 120, 160
    			fill(wort); // purple
    			noStroke(); 
    			ellipse(width/2 - 20 + this.x, width/2 + 30 + this.y, 20, 10);  //wart
			} ,//end monsterBody function
			head : function(){
			fill(59, 220, 64); // lighter green
    		stroke(0); 
    		ellipse(width/2 + this.x, width/2 - 120 + this.y, 100, 80); //head 100, 80
    		fill(0);
    		rect(width/2 - 25 + this.x, width/2 - 105 + this.y, 60, 1); //mouth
    		fill(255);
    		triangle(width/2 + 15 + this.x, width/2 - 90 + this.y, width/2 + this.x, width/2-105 + this.y, width/2 + 30 + this.x, width/2 - 105 + this.y); //tooth
    		fill(193, 255, 64); //greenish yellow
    		ellipse(width/2 - 15 + this.x, width/2 - 120 + this.y, 15, 15); //left eye
    		ellipse(width/2 + 25 + this.x, width/2 - 120 + this.y, 15, 15); //right eye
    		fill(0);
    		ellipse(width/2 - 15  + this.x, width/2 - 120 + this.y, 5, 5); //left pupil
    		ellipse(width/2 + 25  + this.x, width/2 - 120 + this.y, 5, 5); //right pupil
    		fill(this.skin2); //lighter green
    		ellipse(width/2 - 50 + this.x, width/2 - 200 + this.y, 20, 20); // left antenna point
    		ellipse(width/2 + 50 + this.x, width/2 - 200 + this.y, 20, 20); // right antenna point
    		noFill();
			} // end head function

		} // end monster
	} // end for loop
} // end setup

function draw(){
	background(255);
	for (var i=0; i < monsters.length, i++){
		monsters[i].monsterBody();
		monsters[i].head();
	}

}

/*function Monster(tempX,tempY,sk1,sk2,wort){
	this.x = tempX;
    this.y = tempY;
    this.skin1 =sk1;
    this.skin2 = sk2;
    this.wort= wort;
}

Monster.prototype.monsterBody = function(wide,tall){
	smooth();

    curve(width/2 - 100 + this.x, width/2-100 + this.y, width/2 - 50 + this.x, width/2-200 + this.y, width/2 + 10 + this.x, width/2 -100 + this.y, width/2 -20 + this.x, width/2 + 20 + this.y); //left antenna
    curve(width/2 + 120 + this.x, width/2-80 + this.y, width/2 + 50 + this.x, width/2-200 + this.y, width/2 - 10 + this.x, width/2 - 100 + this.y, width/2 -20 + this.x, width/2 + 40 + this.y); //right antenna
    fill(skin1); //darker green
    ellipse(width/2 + this.x, width/2 + this.y, wide, tall); //body 120, 160
    fill(wort); // purple
    noStroke(); 
    ellipse(width/2 - 20 + this.x, width/2 + 30 + this.y, 20, 10);  //wart
}

Monster.prototype.head = function(){
	fill(59, 220, 64); // lighter green
    stroke(0); 
    ellipse(width/2 + this.x, width/2 - 120 + this.y, wid, hei); //head 100, 80
    fill(0);
    rect(width/2 - 25 + this.x, width/2 - 105 + this.y, 60, 1); //mouth
    fill(255);
    triangle(width/2 + 15 + this.x, width/2 - 90 + this.y, width/2 + this.x, width/2-105 + this.y, width/2 + 30 + this.x, width/2 - 105 + this.y); //tooth
    fill(193, 255, 64); //greenish yellow
    ellipse(width/2 - 15 + this.x, width/2 - 120 + this.y, 15, 15); //left eye
    ellipse(width/2 + 25 + this.x, width/2 - 120 + this.y, 15, 15); //right eye
    fill(0);
    ellipse(width/2 - 15  + this.x, width/2 - 120 + this.y, 5, 5); //left pupil
    ellipse(width/2 + 25  + this.x, width/2 - 120 + this.y, 5, 5); //right pupil
    fill(skin2); //lighter green
    ellipse(width/2 - 50 + this.x, width/2 - 200 + this.y, 20, 20); // left antenna point
    ellipse(width/2 + 50 + this.x, width/2 - 200 + this.y, 20, 20); // right antenna point
    noFill();
} */