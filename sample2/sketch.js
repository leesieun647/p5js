function setup() {
  createCanvas(600, 400);
  background(210, 225, 235);
  noStroke();

  // 머리
  fill(30, 20, 20);
  ellipse(277.5, 114.5, 135, 150); ellipse(322.5, 114.5, 135, 150);
  ellipse(270, 185, 150, 270); ellipse(330, 185, 150, 270);

  // 목, 얼굴, 귀
  fill(245, 220, 205); rect(274, 230, 52, 60, 12);
  fill(248, 225, 210); ellipse(300, 155, 150, 187);
  ellipse(217, 164, 21, 39); ellipse(382, 164, 21, 39);

  // 귀걸이
  fill(235);
  ellipse(382, 183, 10, 10); ellipse(217, 183, 10, 10);

  // 앞머리
  fill(30, 20, 20);
  ellipse(300, 59, 120, 15);
  push();
  translate(240, 95);
  rotate(0.5);
  ellipse(0, 0, 45, 97.5);
  pop();
  push();
  translate(360, 95);
  rotate(-0.5);
  ellipse(0, 0, 45, 97.5);
  pop();

  // 가디건 
  fill(25, 35, 80);
  push();
  translate(199, 372);
  rotate(0.07);
  rect(-24, -75, 48, 195, 21);
  pop();
  push();
  translate(400, 372);
  rotate(-0.07);
  rect(-24, -75, 48, 195, 21);
  pop();
  rect(180, 282, 240, 270, 60);
  
  fill(248, 225, 210);
  triangle(262, 281, 300, 335, 337, 282);
  // 단추
  fill(255);
  ellipse(300, 357.5, 9, 9); ellipse(300, 387.5, 9, 9);
  fill(230, 150, 170);

  // 팔
  stroke(12, 18, 45);
  strokeWeight(3);
  line(217, 305, 217, 462); line(382, 305, 382, 462);

  // 눈썹
  noFill();
  stroke(70, 50, 50);
  strokeWeight(3);
  arc(267, 137, 42, 12, PI, TWO_PI); arc(333, 137, 42, 12, PI, TWO_PI);

  // 눈
  noStroke();
  fill(255);
  ellipse(267, 155, 33, 18); ellipse(333, 155, 33, 18);
  fill(30);
  ellipse(267, 155, 15, 18); ellipse(333, 155, 15, 18);
  fill(255);
  ellipse(262, 150, 6, 6); ellipse(328, 150, 6, 6);

  noFill();
  stroke(50, 30, 30);
  strokeWeight(3);
  arc(267, 152, 33, 21, PI, TWO_PI); arc(333, 152, 33, 21, PI, TWO_PI);

  // 속눈썹
  stroke(0);
  strokeWeight(1.5);
  line(252, 144.5, 247.5, 141.5); line(262.5, 143, 259.5, 135.5); line(273, 143, 274.5, 135.5); line(283.5, 146, 286.5, 141.5); line(348, 144.5, 352.5, 141.5); line(337.5, 143, 340.5, 135.5); line(327, 143, 325.5, 135.5); line(316.5, 146, 313.5, 141.5);

  // 코
  stroke(175, 125, 115);
  strokeWeight(2.25);
  line(300, 173, 295.5, 191); line(295.5, 191, 306, 194);

  // 입
  noStroke();
  fill(200, 110, 120);
  arc(300, 215, 39, 21, 0, PI);

  // 볼이랑 점
  fill(235, 170, 180, 90);
  ellipse(243, 191, 27, 15); ellipse(357, 191, 27, 15);
  fill(90, 70, 70);
  ellipse(255, 170, 3, 3);
}