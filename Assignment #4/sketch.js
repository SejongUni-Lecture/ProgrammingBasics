
function setup() {
  createCanvas(800, 800);
   background(255);
}

function draw() 
{
	var trial=1;
	var t_side=20;
	var gap_y=3*t_side;
	var gap_x=4*cos(PI/6.0)*t_side;
	
	
	for(var i = 0;i<=width*2;i+=gap_x)
	{
		for(var j = 0;j<=height;j+=gap_y)
		{
			push();
			translate(i,j);
		  tessell_cube(0,0,t_side,148,141,245);
			cube(2*cos(PI/6.0)*t_side,t_side,t_side,178,140,230);
			pop();
		}
		trial++;
	}
	
	
}

function tessell_cube(x1,y1,t_side,cr,cg,cb)
{
	var x2 = x1-t_side*cos(PI/6.0), y2 = y1-t_side*sin(PI/6.0);
  var x3 = x1+t_side*cos(PI/6.0), y3 = y2;
  top_side(x1,y1,t_side,cr,cg,cb);
  top_side(x2,y2,t_side,cr,cg,cb);
  top_side(x3,y3,t_side,cr,cg,cb);
  
  var x4 = t_side*cos(PI/6.0), y4 = t_side*sin(PI/6.0);
  var x5 = 0, y5 = t_side;
  left_side(x1,y1,t_side,cr,cg,cb);
	push();
	translate(-x4,-y4);
  left_side(x1,y1,t_side,cr,cg,cb);
	translate(x4+x5,y4+y5);
  left_side(x1,y1,t_side,cr,cg,cb);
	pop();
	
	var x6=x1+t_side*cos(PI/6.0), y6=t_side*sin(PI/6.0);
	var x7=0, y7=t_side;
	
	right_side(x1,y1,t_side,cr,cg,cb);
	push();
	translate(x6,-y6);
  right_side(x1,y1,t_side,cr,cg,cb);
	translate(-x6+x7,y6+y7);
  right_side(x1,y1,t_side,cr,cg,cb);
	pop();
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