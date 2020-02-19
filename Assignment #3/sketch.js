function setup() {
  createCanvas(500, 500);
  draw_background();
}

var dis=5;

function draw() {
  draw_background();
  if(mouseY>=120) {
     scale(mouseY/120);
    draw_pattern(mouseX,mouseY);
  }
	
} 

function draw_pattern(x,y)
{
  noStroke();
  centerX=x-50;
  centerY=y-50;
  //car
  //wheel

  fill(color(10,10,10));
  rect(centerX,centerY+65,20,30,5);
  rect(centerX+80,centerY+65,20,30,5);
  //body
  fill(color(252,212,49));
  rect(centerX,centerY,100,80,50);
  fill(color(240,178,33));
  rect(centerX-10,centerY+35,120,45,30,30,10,10);
  
  //headlight
  var from = color(220, 200, 176);
	var to = color(255, 255, 255);
  colorMode(RGB);
  var inter;
  
  for(var i = 0;i < 255; i++)
  {
    inter = lerpColor(from,to,i/255);
    fill(inter);
   	ellipse(centerX+10,centerY+60,(255-i)/12);
    ellipse(centerX+90,centerY+60,(255-i)/12);
  }
  
}

function draw_background()
{
	background(130,200,150,50);
  noStroke();
  fill(color(50,50,50),50);
  quad(150,150,50,500,450,500,350,150);
  fill(color(134,193,253),50);
  rect(0,0,500,150);
}