var radius=300;
var pos_y;
var save_scale=1.0;
var color_set=0;
function setup() {
  createCanvas(600, 600);
  backGround();
  
  pos_y=height;
}

function draw() {
  backGround();
  noStroke();
  fill(255-color_set, 102-color_set, 102-color_set);
  if(pos_y>height*1/3){
  	if(mouseIsPressed){
 			if(mouseY>300) {
        pos_y+=3;
        color_set-=2;
      }
 	 		else {
        pos_y-=3;
        color_set+=2;
      }
     
		}
  	translate(width/2,pos_y);
 	  scale(pos_y/height);
    ellipse(0,0,radius);
  }
  else{
    if(mouseIsPressed){
 			pos_y+=3;
      color_set-=2;
		}
  	translate(width/2,pos_y);
 	  scale(pos_y/height);
    ellipse(0,0,radius);
  }
}

function backGround()
{
  rectMode(CENTER);
  for(var i=0;i<255;i++)
  {
    push();
    var m=map(i,0,255,0,800);
    stroke(256-i);
    fill(256-i);
    translate(width/2,height*1/3);
    rect(0,0,900-m,900-m);
    pop();
  }
  fill(0);
  rectMode(CORNER);
  rect(width*5/12, height*1/4,width*1/6,width*1/6);
}

