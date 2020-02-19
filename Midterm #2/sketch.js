//Question 1

var tri_side;	//삼각형 한 변의 길이
function setup() {
  createCanvas(800, 800);
  mouseX=width/2;
  mouseY=height/2;	//마우스 위치 초기화
}

function draw() {
 background(255,100);	//항상 하나의 패턴만 그려짐
 tri_side = 200;
 mouse_draw(mouseX,mouseY);
}

function mouse_draw(x,y)	//마우스로 그리게 되는 패턴 함수
{
  colorMode(RGB);
  stroke(0,0,0);  //외곽선은 검정색으로 그림
  //default value: strokeWeight = 1
  
  var gap=tri_side/3;
  for(var i=0;i<tri_side;i+=gap)	//반복문을 이용
  {
    fill(250,230-i,230-i);	//패턴 안의 도형의 색이 점차적으로 변경
  	triangle(x,y-(tri_side - i)/2*sqrt(3)*(2/3),x-(tri_side - i)/2,y+(tri_side - i)/2*sqrt(3)*(1/3),x+(tri_side - i)/2,y+(tri_side - i)/2*sqrt(3)*(1/3));
  	//정다각형 중 정삼각형을 이용하여 패턴을 그림
  }
  ellipse(x,y,gap/3);
}