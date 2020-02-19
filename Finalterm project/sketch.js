var idxPen;
var idxPenStroke;
var idxErase;
var idxEraseStroke;
var MAX;
var penX=[];
var penY=[];
var sprayY=[];
var eraseX=[];
var eraseY=[];
var penRadius;
var sprayRadius;
var eraseRadius;
var currentColor;
var penSlider;
var spraySlider;
var eraserSlider;
var paletteBox=false;
var penBox=false;
var sprayBox=false;
var eraserBox=false;
var penButton=false;
var sprayButton=false;
var eraserButton=false;
var iconSize=30;
var paletteSize=38;
var Color;
var img;
var sketch;
var saveBox=false;
var saveButton=false;
var colorJudge=0;


function setup() {
 	sketch=createCanvas(1200, 650);
  idxPen=-1;
  idxPenStroke=0;
  idxErase=0;
  idxEraseStroke=0;
  MAX=10000;
  for(var i=0;i<MAX;i++)
  {
    penX[i]=[];
    penY[i]=[];
    eraseX[i]=[];
    eraseY[i]=[];
  }
  //sketch space
  noStroke();
  img=createImage(width,height);
  for (var x = 0; x < img.width; x++) {
    for (var j = 0; j < img.height; j++) {
    	img.set(x, j, color(255));
  	}
	}
	img.updatePixels();
  fill(255);
	rect(200,0,width,height);
  //spray image
  sprayImg=loadImage("assets/sprayStroke.png");
  //icon
	sprayIcon=loadImage("assets/spray.png");
  penIcon=loadImage("assets/brush.png");
  eraserIcon=loadImage("assets/eraser.png");
  pencilLogo=loadImage("assets/pencil.png");
  
  penSlider=createSlider(1,100,5);
  spraySlider=createSlider(1,10,5);
  eraserSlider=createSlider(1,100,5);
  
  Color=color(0);
  imageMode(CENTER);
}

function draw() {
  drawUI();
  menuUI();
  image(pencilLogo,width-50,50,pencilLogo.width/10,pencilLogo.height/10);
	
  if (mouseX > 50-iconSize && mouseX < 50+iconSize && mouseY > 473-iconSize && mouseY < 473+iconSize) 
  {
    penBox = true;
    sprayBox = false;
    eraserBox = false;
  }
  else if (mouseX > 50-iconSize && mouseX < 50+iconSize && mouseY > 533-iconSize && mouseY < 533+iconSize) 
  {
    penBox = false;
    sprayBox = true;
    eraserBox = false;
  }
  else if (mouseX > 50-iconSize && mouseX < 50+iconSize && mouseY > 593-iconSize && mouseY < 593+iconSize) 
  {
    penBox = false;
    sprayBox = false;
    eraserBox = true;
  }
  if (mouseX > width-50-iconSize && mouseX < width-50+iconSize && mouseY > 50-iconSize && mouseY < 50+iconSize) 
  {
    saveBox=true;
  }
  if(penButton)
  {
  	noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(50,473,50,50);	
  }
  if(sprayButton)
  {
  	noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(50,533,50,50);	
  }
  if(eraserButton)
  {
  	noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(50,593,50,50);	
  }
  penRadius = penSlider.value();
	sprayRadius = spraySlider.value();
  eraseRadius = eraserSlider.value();
}

function drawUI()
{
  if(penButton)
  {
    Pen();
  }
  else if(sprayButton)
  {
    Spray();
  }
  else if(eraserButton)
  {
    Erase();
  }
  drawPalette();
}

function menuUI()
{
  noStroke();
  fill(80,80,80);
 	rect(0,0,200,650); 
	Palette();
  image(penIcon,50,473,50,50);
  image(sprayIcon,50,533,50,50);
  image(eraserIcon,50,593,50,50);
  penSlider.position(90,462);
  penSlider.style('width','80px');
  spraySlider.position(90,522);
  spraySlider.style('width','80px');
  eraserSlider.position(90,582);
  eraserSlider.style('width','80px');
}

function Pen()
{
  noFill();
  stroke(Color);
  strokeWeight(penRadius);
  if(mouseIsPressed){
    penX[idxPen][idxPenStroke]=mouseX;
 	  penY[idxPen][idxPenStroke]=mouseY;
 	  idxPenStroke++;    
 	 
    beginShape(); 
  	for(var i=0;i<idxPenStroke;i++)
  	{
   		curveVertex(penX[idxPen][i],penY[idxPen][i]);
  	}
    endShape();
  }
}

function Spray()
{
  if(mouseIsPressed)
  {
    tint(Color);
  	sprayImg.blend(20,20,450,450,mouseX,mouseY,sprayRadius,sprayRadius,BLEND);
  	image(sprayImg,mouseX,mouseY,sprayImg.width/sprayRadius, sprayImg.height/sprayRadius);
  }
  tint(255,255,255);
}

function Erase()
{
  stroke(255);
  noFill();
  strokeWeight(eraseRadius);
  if(mouseIsPressed){
    eraseX[idxErase][idxEraseStroke]=mouseX;
 	  eraseY[idxErase][idxEraseStroke]=mouseY;
 	  idxEraseStroke++;    
 	 
    beginShape(); 
  	for(var i=0;i<idxEraseStroke;i++)
  	{
   		curveVertex(eraseX[idxErase][i],eraseY[idxErase][i]);
  	}
    endShape();
  }
}

function Palette()
{
  noStroke();
 	fill(0);
  ellipse(50,50,38,38);
  fill(110,108,109);
  ellipse(100,50,38,38);
  fill(250);
  ellipse(150,50,38,38);
  //
 	fill(77,36,0);
  ellipse(50,100,38,38);
  fill(161,106,75);
  ellipse(100,100,38,38);
  fill(239,228,176);
  ellipse(150,100,38,38);
  //
  fill(136,0,21);
  ellipse(50,150,38,38);
  fill(237,28,26);
  ellipse(100,150,38,38);
  fill(255,174,201);
  ellipse(150,150,38,38);
  //
  fill(255,127,39);
  ellipse(50,200,38,38);
  fill(255,150,14);
  ellipse(100,200,38,38);
  fill(255,242,30);
  ellipse(150,200,38,38);
  //
  fill(20,64,20);
  ellipse(50,250,38,38);
  fill(34,171,50);
  ellipse(100,250,38,38);
  fill(181,220,29);
  ellipse(150,250,38,38);
  //
  fill(63,72,220);
  ellipse(50,300,38,38);
  fill(0,162,232);
  ellipse(100,300,38,38);
  fill(153,217,234);
  ellipse(150,300,38,38);
  //
  fill(0,64,128);
  ellipse(50,350,38,38);
  fill(0,100,160);
  ellipse(100,350,38,38);
  fill(112,146,190);
  ellipse(150,350,38,38);
  //
  fill(123,55,123);
  ellipse(50,400,38,38);
  fill(187,104,187);
  ellipse(100,400,38,38);
  fill(200,150,231);
  ellipse(150,400,38,38);
}

function drawPalette()
{
  if(mouseIsPressed)
  {
  	if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 50-paletteSize && mouseY < 50+paletteSize) 
  	{	
   	 Color=color(0,0,0);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 50-paletteSize && mouseY < 50+paletteSize) 
  	{	
   	 Color = color(110,108,109);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 50-paletteSize && mouseY < 50+paletteSize) 
  	{	
   	 Color = color(250);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 100-paletteSize && mouseY < 100+paletteSize) 
  	{	
   	 Color=color(77,36,0);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 100-paletteSize && mouseY < 100+paletteSize) 
  	{	
   	 Color = color(161,106,75);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 100-paletteSize && mouseY < 100+paletteSize) 
  	{	
   	 Color = color(239,228,176);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY >150-paletteSize && mouseY < 150+paletteSize) 
  	{	
   	 Color=color(136,0,21);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY >150-paletteSize && mouseY < 150+paletteSize) 
  	{	
   	 Color = color(237,28,26);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 150-paletteSize && mouseY < 150+paletteSize) 
  	{	
   	 Color = color(255,174,201);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 200-paletteSize && mouseY < 200+paletteSize) 
  	{	
   	 Color=color(255,127,39);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 200-paletteSize && mouseY < 200+paletteSize) 
  	{	
   	 Color = color(255,150,14);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 200-paletteSize && mouseY < 200+paletteSize) 
  	{	
   	 Color = color(255,242,30);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 250-paletteSize && mouseY < 250+paletteSize) 
  	{	
   	 Color=color(20,64,20);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 250-paletteSize && mouseY < 250+paletteSize) 
  	{	
   	 Color = color(34,171,50);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 250-paletteSize && mouseY < 250+paletteSize) 
  	{	
   	 Color = color(181,220,29);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 300-paletteSize && mouseY < 300+paletteSize) 
  	{	
   	 Color=color(63,72,220);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 300-paletteSize && mouseY < 300+paletteSize) 
  	{	
   	 Color = color(0,162,232);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 300-paletteSize && mouseY < 300+paletteSize) 
  	{	
   	 Color = color(153,217,234);
  	}
    /////
  	if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 350-paletteSize && mouseY < 350+paletteSize) 
  	{	
   	 Color=color(0,64,128);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 350-paletteSize && mouseY < 350+paletteSize) 
  	{	
   	 Color = color(0,100,160);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 350-paletteSize && mouseY < 350+paletteSize) 
  	{	
   	 Color = color(112,146,190);
  	}
    /////
    if (mouseX > 50-paletteSize && mouseX < 50+paletteSize && mouseY > 400-paletteSize && mouseY < 400+paletteSize) 
  	{	
   	 Color=color(123,55,123);
  	}
  	if (mouseX > 100-paletteSize && mouseX < 100+paletteSize && mouseY > 400-paletteSize && mouseY < 400+paletteSize) 
  	{	
   	 Color = color(187,104,187);
  	}
  	if (mouseX > 150-paletteSize && mouseX < 150+paletteSize && mouseY > 400-paletteSize && mouseY < 400+paletteSize) 
  	{	
   	 Color = color(200,150,231);
  	}
  }
}

function drawUpdate()
{
  loadPixels();
  for (var x = 200; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var c = get(x,y);
    	img.set(x, y, c);
  	}
	}
	img.updatePixels();
}
///////////////////////////////////////////////////

function mousePressed()
{
  if(!penButton)
  {	
    if(penBox)
  	{
  		penButton=true;
			sprayButton=false;
			eraserButton=false;
  	}
  }
  if(!sprayButton)
  {
    if(sprayBox)
  	{
  		penButton=false;
			sprayButton=true;
			eraserButton=false;
  	}
  }
 	if(!eraserButton)
  {
  	if(eraserBox)
  	{
  		penButton=false;
			sprayButton=false;
			eraserButton=true;
  	}
  }
  if(!saveButton)
  {
    if(saveBox)
    {
      saveButton=true;
    }
  }
  if(penButton)
  {
  	idxPen++;
  }
  else if(eraserButton)
  {
  	idxErase++;
  }
}

function mouseReleased()
{
  if(saveButton)
  {
    drawUpdate();
    img.save('sketch', 'png');
    saveButton=false;
    saveBox=false;
  }
}