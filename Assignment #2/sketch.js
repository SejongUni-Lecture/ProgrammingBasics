function setup() {
  createCanvas(400, 400);	
	background(0);
}

function draw() {

	noStroke();

	var from = color(164,53,158);
	var to = color(252,186,89);
	colorMode(RGB);
	var inter = lerpColor(from,to,(mouseX+mouseY)/800);

	fill(inter);
	ellipse(mouseX,mouseY,30,30);

	noFill();
	stroke(255);
	strokeWeight(8);
	rect(100,100,200,200,50,50,50,50);
	strokeWeight(10);
	ellipse(200,200,100,100);
	fill(255);
	ellipse(260,140,22,22);
}