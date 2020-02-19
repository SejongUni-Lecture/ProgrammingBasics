//Question 2

var radius;
function setup() {
  createCanvas(800, 800);
  background(215,239,255);
  mouseX=width/2;	//마우스 위치 초기화
  mouseY=height/2;
}

function draw() {
  radius=150;	//새의 크기
  background(215,239,255,1); 
  //가장 최근 패턴이 선명하게 보이게 하기 위해 alpha 값을 1로 설정
  push();
  translate(mouseX,mouseY);
  rotate(-PI/12.0);
  scale(width/(mouseX+mouseY));	//멀고 가까움 표현
  //새가 좌측 상단으로 이동 했을 때 날아가는 것처럼 크기 확대
  draw_bird(0,0);
  pop();
  
}

function draw_bird(x,y)
{
  //noStroke();
  fill(255,255,189);
  //새의 부리
  arc(x+radius/2+radius/8,y-radius/8,radius/2,radius/2,PI-QUARTER_PI,PI,PIE);
	fill(97,192,255);
  ellipse(x+radius/4,y,radius/2);	//새의 머리
  arc(x,y,radius,radius,0,PI);	  //새의 몸통
  fill(215,239,255);
  arc(x-radius/4,y,radius/2,radius/2,0,PI);	//새 꼬리를 위해 배경색과 동일 처리
  
  //마우스의 위치에 따라서 새의 날개 색이 변한다.
  fill(0+(mouseX+mouseY)/10,172+(mouseX+mouseY)/10,237+(mouseX+mouseY)/10);
  
  //새의 날개
  push();	//translate과 rotate 활용을 위해 이전 설정 저장
  translate(x-radius/4,y);
  rotate(PI/12.0);
  arc(0,0,radius/2, radius/3, 0, PI, CHORD);	//아래 날개
  pop();	//이전 내용 불러오기
	push();
  translate(x-radius/4,y-radius/8);
  rotate(PI/6.0);
  arc(0,0,radius/1.5, radius/3, 0, PI, CHORD);	//윗 날개
  pop();
  
  //새의 눈
  fill(0);
  ellipse(x+radius*3/8,y-radius/10,radius/16);
}