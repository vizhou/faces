/*
Vicky Zhou
Section E 
vzhou@andrew.cmu.edu
Project_02
*/ 

var eyeSize = 50;
var faceWidth = 250;
var faceHeight = 250; 
var noseWidth = 23;
var noseHeight = 40;
var noseColor = 155;
var faceColor = 320;
var lefteyeColor = 190;
var righteyeColor = 190; 
var mouthColor = 50;
var mouthWidth = 150;
var mouthHeight = 10;
var earWidth = 31;
var earHeight = 42;


function setup() {
    createCanvas(640, 480);
}

function draw() {
	noStroke();
	background(165, 221, 208);
	//face color 
	fill(248, 206, faceColor);
	//face size
	ellipse(width / 2, height / 2, faceWidth, faceHeight);
	//variables for eye location 
	var eyeLX = width / 2 - faceWidth * 0.25; //variable for left eye location
	var eyeRX = width / 2 + faceWidth * 0.25; //variable for right eye location 
	//left eye color
	fill(55, lefteyeColor, 58);
	//left eye size
	ellipse(eyeLX, height / 2, eyeSize, eyeSize);
	//right eye color
	fill(48, 123, righteyeColor);
	//right eye size
	ellipse(eyeRX, height / 2, eyeSize, eyeSize); 
	//nose color;
	fill(216, 173, noseColor);
	//nose size
	rect(width / 2 - noseWidth / 2, height / 2, noseWidth, noseHeight);
	//variables for mouth location
	var mouthLY = height / 2 + faceHeight*0.25 //variable for keeping mouth in center
	//mouth color 
	fill(239, 136, 120);
	//mouth size
	rect(width / 2 - mouthWidth / 2, mouthLY, mouthWidth, mouthHeight);
	
	//variables for ear location
	var earLY = height / 2;
	var earRY = height /2;
	//left ear color
	fill(248, 206, faceColor)
	//right ear color
	fill(248, 206, faceColor);
	//left ear size
	ellipse(width / 2 - faceWidth*0.53, earLY, earWidth, earHeight); 
	//right ear size 
	ellipse(width / 2 + faceWidth*0.53, earRY, earWidth, earHeight);
}

function mousePressed() {
	// changes face when user clicks
	faceWidth = random(100, 200);
	faceHeight = random(100, 250);
	eyeSize = random(10, 30);
	faceColor = random(0, 320);
	lefteyeColor = random(0, 190);
	righteyeColor = random(0, 190);
	noseColor = random(0, 155);
	noseWidth = random(10, 23);
	noseHeight = random(20, 40);
	mouthWidth = random(45, 65);
	mouthHeight = random(5, 10);
	earWidth = random(30, 31);
	earHeight = random(36, 42);
}
