var snow=[];

function setup() {
  createCanvas(324, 480);
  
  img=loadImage("assets/nordic.jpg");
  for(var i=0;i<250;i++)
  {
    snow.push(new Snow());
  }
}

function draw() {
  background(12,71,103);
  image(img,0,0);
  for(var i=0;i<snow.length;i++)
  {
    snow[i].move();
    snow[i].display();
  }
}

function Snow(){
	this.x=random(width);
  this.y=random(height);
  this.size=random(1,5);
  this.speed=random(1,3);
  this.move=function(){
    this.y+=this.speed;
    if(this.y>500) this.y=0;
  }
  this.display=function(){
    noStroke();
    fill(250,243,235);
    ellipse(this.x,this.y,this.size,this.size);
    
  }
}