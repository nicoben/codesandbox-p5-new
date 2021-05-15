/* eslint-disable no-undef, no-unused-vars */

const SIZE = 250;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// Put setup code here
	drawP5(50, 50);
}

function draw() {
	// Put drawings here
	// if (mouseMoved) {
	//   fill(155, 25);
	//   stroke(5);
	//   circle(mouseX, mouseY, 100);
	// }
}

// This Redraws the Canvas when resized
windowResized = function () {
	resizeCanvas(windowWidth, windowHeight);
};

function mouseMoved() {
	// background(255);
	translate(mouseX, mouseY);
	angleMode(DEGREES);
	rotate(mouseX / 3);
	scale(map(mouseX, 0, windowWidth, 0.25, 2));
	drawP5(-SIZE / 2, -SIZE / 2);
}

function drawP5(startX, startY) {
	fill(234, 31, 81, 125);
	// noStroke();
	strokeWeight(5);
	rect(startX, startY, SIZE, SIZE);
	fill(255);
	textStyle(BOLD);
	textSize(140);
	text("p5*", startX + 10, startY + 200);
}
