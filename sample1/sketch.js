function setup() {
  createCanvas(600, 400);
  background(8, 8, 35);

  // 보름달
  noStroke();
  fill(255, 204, 0);
  ellipse(500, 90, 90, 90);

  // 별
  noStroke();
  fill(255, 255, 180);
  ellipse(50, 50, 10, 10);
  ellipse(130, 30, 10, 10);
  ellipse(210, 60, 8, 8);
  ellipse(290, 25, 12, 12);
  ellipse(370, 50, 12, 12);
  ellipse(440, 30, 10, 10);
  ellipse(170, 90, 8, 8);
  ellipse(250, 130, 6, 6);
  ellipse(340, 100, 10, 10);
  ellipse(430, 100, 8, 8);
  ellipse(55, 160, 6, 6);
  ellipse(310, 160, 12, 12);
  ellipse(480, 200, 12, 12);
  ellipse(550, 140, 8, 8);

  // 별똥별 
  stroke(255, 255, 200, 180); strokeWeight(2);
  line(200, 170, 230, 130);
  noStroke(); fill(255, 255, 200);
  ellipse(200, 170, 9, 9);

  // 별똥별 
  stroke(255, 255, 200, 180); strokeWeight(2);
  line(380, 200, 420, 150);
  noStroke(); fill(255, 240, 160);
  ellipse(380, 200, 10, 10);
  
  // 별똥별
  stroke(255, 255, 200, 180); strokeWeight(2);
  line(80, 110, 110, 70);
  noStroke(); fill(255, 240, 160);
  ellipse(80, 110, 12, 12);
  
  // 구름 
  noStroke();
  fill(60, 60, 90);
  arc(100, 220, 80, 40, PI, TWO_PI);
  arc(130, 215, 60, 40, PI, TWO_PI);
  arc(70, 218, 50, 35, PI, TWO_PI);

  // 언덕
  noStroke();
  fill(18, 55, 25);
  ellipse(150, 400, 500, 250);
  fill(12, 42, 18);
  ellipse(480, 420, 500, 220);

  // 집 
  fill(50, 35, 70);
  rect(240, 300, 120, 80);
  fill(90, 45, 55);
  triangle(225, 300, 300, 245, 375, 300);
  
  // 문
  fill(30, 18, 45);
  rect(286, 340, 28, 40);

  // 창문 (왼쪽)
  fill(255, 220, 100, 180);
  rect(252, 312, 24, 20);

  // 창문 (오른쪽)
  fill(255, 220, 100, 180);
  rect(324, 312, 24, 20);
  
  // 길 
  fill(210, 180, 140);
  quad(270, 400, 330, 400, 310, 380, 290, 380);
  
  //나무 (왼쪽)
  fill(40, 25, 15); rect(155, 250, 10, 50);
  fill(20, 80, 30);
  triangle(130, 255, 160, 205, 190, 255);
  triangle(135, 235, 160, 190, 185, 235);

  // 나무 (오른쪽)
  fill(40, 25, 15); rect(420, 285, 10, 45);
  fill(15, 70, 25);
  triangle(398, 290, 425, 245, 452, 290);
  triangle(402, 270, 425, 228, 448, 270);
}
