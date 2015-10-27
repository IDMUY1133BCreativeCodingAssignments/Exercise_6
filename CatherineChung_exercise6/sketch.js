var lines = [];
var line1;

function setup(){
	createCanvas(600,600);
	line1 = new Line();

	for(var i = 0; i < 40; i++){
		lines.push(new Line());
	}

}

function draw(){
background(255);
for (var i = 0; i <lines.length; i++){
	lines[i].display();
}
line1.display();
}

function Line(){
	this.c = color(random(255), random(255), random(255));
	//this.xpos = random(width);
	//this.ypos = random(width);

	this.display = function(){
		fill(this.c);
		stroke(0);

		//line(this.xpos +10,this.ypos -15, this.xpos -15, this.ypos +5);
		//line(this.xpos -10,this.ypos-15,this.ypos +15,this.ypos+5);
		for (var x = 10; x <= width-20; x+=10){
			for(var y = 30; y <= height - 20; y+=35){
				line(x+10,y-15,x-15,y+5);
				line(x-10,y-15,y+15,y+5);
			}
		}
		
	}

//	this.many = function(){


//	}
} //line 