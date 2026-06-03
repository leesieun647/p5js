let cloudX = 100;

function setup() {
  createCanvas(600, 400);
  saveGif('과제4', 10);
}

function draw() {
  let t = millis() / 1000;

  // 배경
  background(8, 8, 35);

  // 별 (크기 변화 - sin으로 반짝임)
  noStroke();
  let starData = [
    [50,50,10],[130,30,10],[210,60,8],[290,25,12],[370,50,12],
    [440,30,10],[170,90,8],[250,130,6],[340,100,10],[430,100,8],
    [55,160,6],[310,160,12],[480,200,12],[550,140,8]
  ];
  for (let i = 0; i < starData.length; i++) {
    let sx = starData[i][0];
    let sy = starData[i][1];
    let ss = starData[i][2];
    let newSize = ss + sin(frameCount * 0.05 + i) * 3;
    fill(255, 255, 180);
    ellipse(sx, sy, newSize, newSize);
  }

  // 보름달 (색상 변화 - lerpColor)
  let c1 = color(255, 204, 0);
  let c2 = color(255, 240, 180);
  let amt = map(sin(t), -1, 1, 0, 1);
  let moonCol = lerpColor(c1, c2, amt);
  let moonSize = 90 + sin(t * 1.5) * 4;
  noStroke();
  fill(moonCol);
  ellipse(500, 90, moonSize, moonSize);

  // 별똥별 (기본 애니메이션 - sin/cos로 이동)
  let s1x = 200 + sin(t) * 20;
  let s1y = 170 + cos(t) * 15;
  stroke(255, 255, 200, 180);
  strokeWeight(2);
  line(s1x, s1y, s1x + 30, s1y - 40);
  noStroke();
  fill(255, 255, 200);
  ellipse(s1x, s1y, 9, 9);

  let s2x = 380 + sin(t + 1) * 25;
  let s2y = 200 + cos(t + 1) * 15;
  stroke(255, 255, 200, 180);
  strokeWeight(2);
  line(s2x, s2y, s2x + 40, s2y - 50);
  noStroke();
  fill(255, 240, 160);
  ellipse(s2x, s2y, 10, 10);

  let s3x = 80 + sin(t + 2) * 20;
  let s3y = 110 + cos(t + 2) * 15;
  stroke(255, 255, 200, 180);
  strokeWeight(2);
  line(s3x, s3y, s3x + 30, s3y - 40);
  noStroke();
  fill(255, 240, 160);
  ellipse(s3x, s3y, 12, 12);

  // 구름 (좌우 이동)
  cloudX = 100 + sin(t * 0.5) * 30;
  noStroke();
  fill(60, 60, 90);
  arc(cloudX, 220, 80, 40, PI, TWO_PI);
  arc(cloudX + 30, 215, 60, 40, PI, TWO_PI);
  arc(cloudX - 30, 218, 50, 35, PI, TWO_PI);

  // 언덕
  noStroke();
  fill(18, 55, 25);
  ellipse(150, 400, 500, 250);
  fill(12, 42, 18);
  ellipse(480, 420, 500, 220);

  // 나무 (왼쪽) - 바람에 흔들림
  let sway = sin(t * 2) * 4;
  fill(40, 25, 15);
  rect(155, 250, 10, 50);
  fill(20, 80, 30);
  triangle(130, 255, 160 + sway, 205, 190, 255);
  triangle(135, 235, 160 + sway, 190, 185, 235);

  // 집
  fill(50, 35, 70);
  rect(240, 300, 120, 80);
  fill(90, 45, 55);
  triangle(225, 300, 300, 245, 375, 300);

  // 문
  fill(30, 18, 45);
  rect(286, 340, 28, 40);

  // 창문 (색상 변화 - lerpColor로 깜빡임)
  let w1 = color(255, 220, 100);
  let w2 = color(200, 160, 50);
  let wAmt = map(sin(t * 3), -1, 1, 0, 1);
  let wCol = lerpColor(w1, w2, wAmt);
  fill(wCol);
  rect(252, 312, 24, 20);
  rect(324, 312, 24, 20);

  // 길
  fill(210, 180, 140);
  quad(270, 400, 330, 400, 310, 380, 290, 380);

  // 나무 (오른쪽)
  fill(40, 25, 15);
  rect(420, 285, 10, 45);
  fill(15, 70, 25);
  triangle(398, 290, 425 + sway, 245, 452, 290);
  triangle(402, 270, 425 + sway, 228, 448, 270);
}
