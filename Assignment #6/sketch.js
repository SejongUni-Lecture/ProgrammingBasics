
var X;
var Y;
var side=40; 

function setup() {

  createCanvas(800, 800);
  X=width/2;
  Y=0;
  
  //background(220);
  var r_val=0;
  var g_val=0;
  var b_val=0;
  var i,j;
  var save_x, save_y;

  for(var i=0;i<height;i++)
  {
   	var r = map(r_val,0,height,0,57);
    var g = map(g_val,0,height,0,20);
    var b = map(b_val,0,height,0,11);
   	stroke(129+r_val,214+g_val,243+b_val);
   	//translate(width/2,height/2);
    line(0,i,width,i);
    r_val+=0.1;
    g_val+=0.1;
    b_val+=0.1;
  }
}

function draw() {
  if(mouseIsPressed){
 		if(mouseX>X) X+=(side*sin(radians(60))-1);
 	 	else X-=(side*sin(radians(60))-1);
    if(mouseY>Y) Y+=side/2-1;
    else Y-=side/2-1;
	}
  translate(X,Y);
  cube(0,0,side,196,244,255);
}

function cube(x1,y1,t_side,cr,cg,cb)
{
	top_side(x1,y1,t_side,cr,cg,cb);
	left_side(x1,y1,t_side,cr,cg,cb);
	right_side(x1,y1,t_side,cr,cg,cb);
}

function top_side(x1,y1,t_side,cr,cg,cb)
{
  noStroke();
  fill(cr+65,cg+65,cb+65);
  var x2 = x1 - t_side*cos(PI/6.0), y2 = y1 - t_side*sin(PI/6.0);
  var x3 = x1 + t_side*cos(PI/6.0), y3 = y2;
  var x4 = x1, y4 = y1-t_side;
  quad(x2,y2,x1,y1,x3,y3,x4,y4); 
}

function left_side(x1,y1,t_side,cr,cg,cb)
{
  noStroke();
  fill(cr-32,cg-32,cb-32);
  var x2 = x1 - t_side*cos(PI/6.0), y2 = y1 - t_side*sin(PI/6.0);
  var x3 = x2, y3 = y2 + t_side;
  var x4 = x1, y4 = y1+t_side;
  quad(x1,y1,x2,y2,x3,y3,x4,y4);
}

function right_side(x1,y1,t_side,cr,cg,cb)
{
  noStroke();
  fill(cr-70,cg-70,cb-70);
  var x2 = x1 + t_side*cos(PI/6.0), y2 = y1 + t_side*sin(PI/6.0);
  var x3 = x2, y3 = y2-t_side;
  var x4 = x1, y4 = y1+t_side;
  quad(x1,y1,x4,y4,x2,y2,x3,y3);
}