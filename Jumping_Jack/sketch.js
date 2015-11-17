var trampoline; //declares trampoline
var jack1;  // first instance of jack
var jack2; //second instance of jack 
var jack3; // 3rd instance of class jack

function setup() {
	createCanvas(1200,600); //makes the size
	background(255); // white background
	frameRate(30); // sets framerate
		
	trampoline = new Trampoline(color(49,112,207)); //calls trampoline as a new instance of the class Trampoline

	jack1 = new Jack("Bob", color(143,29,13), 4, 5.2); // sets the jacks to new instances of the class Jack with different wording, color, and speeds
	jack2 = new Jack("Jack", color(30, 130, 60), 6, 5);
	jack3 = new Jack("Joe", color(20, 50, 140), 10, 9); //
}

function draw() {
	background(230);
	trampoline.display(pmouseX - 250, height - 250); //calls function display from within the trampoline class

	jack1.move(); //calls function move in th eJack class
	jack1.display(); // calls function display in Jack class

	jack2.move();
	jack2.display();

	jack3.move();
	jack3.display();

	jack1.loser(); // calls function loser for all 3 Jacks
	jack2.loser();
	jack3.loser();

	restart(); // calls the restart function in this code
}

//restarts the game
function restart(){
	if(mouseIsPressed){
		setup();
	}
}