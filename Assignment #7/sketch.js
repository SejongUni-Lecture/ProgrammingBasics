var distance=[];
var value=[];

function setup() {
  createCanvas(800, 200);
  background(0);
  
  //형태를 다르게 하고
  bx=[0,50*cos(radians(30)),-50*cos(radians(30))];
  by=[-50,50*sin(radians(30)),50*sin(radians(30))];
  cx=[50*cos(radians(30)),0,-50*cos(radians(30))];
  cy=[-50*sin(radians(30)),50,-50*sin(radians(30))];
  //위치 일차원 배열에 저장
  distance=[100,150,220,310,420,550,700];
  //색상값은 배열에 저장
  for(var j=0;j<7;j++)
  {
    Red=map(j,0,7,3,236);
    Green=map(j,0,7,169,64);
    Blue=map(j,0,7,244,122);
    value[j]=[Red,Green,Blue];
  }
  
} 


function draw() {
 
  for(var j=0;j<7;j++)
  {
    push();
    translate(distance[j]-30,100);//
    rotate(j*PI/12.0);//회전
    scale(((j+1)*16)/100);//크기scale
    
    stroke(value[j][0],value[j][1],value[j][2],50);
    noFill();
    endShape(CLOSE);
    beginShape();
  	for(var k =0;k<6;k++)
  	{
   	 vertex(bx[k],by[k]);
  	}
    endShape(CLOSE);
    beginShape();
  	for(var m =0;m<6;m++)
  	{
   	 vertex(cx[m],cy[m]);
  	}
    endShape(CLOSE);
    pop();
  }
  

}