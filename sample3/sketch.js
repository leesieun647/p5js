let blinkTimer = 0;
let smileSize = 0;
let blushAlpha = 90;
let starOn = false;
let starX = 100, starY = 100, starCount = 0;
let trailX = 300, trailY = 200;
let bgR = 210, bgG = 225, bgB = 235;
let cloud1X = 50, cloud2X = 350;
let ribbonOn = false;
let winkLeft = false;
let clickCount = 0;
let shakeAmount = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}
function draw() {
  background(bgR, bgG, bgB);
  noStroke();
  blinkTimer++;
  if (blinkTimer > 90) blinkTimer = 0;
  if (smileSize > 0) smileSize -= 0.5;
  if (blushAlpha > 90) blushAlpha -= 2;
  if (shakeAmount > 0) shakeAmount -= 0.3;
  // 구름
  cloud1X += 0.3;
  cloud2X += 0.5;
  if (cloud1X > 650) cloud1X = -80;
  if (cloud2X > 650) cloud2X = -80;
  fill(255, 255, 255, 150);
  ellipse(cloud1X, 40, 70, 30);
  ellipse(cloud1X + 25, 35, 50, 25);
  fill(255, 255, 255, 120);
  ellipse(cloud2X, 65, 60, 25);
  ellipse(cloud2X + 20, 60, 45, 22);
  // 하트
  for (let i = 0; i < 4; i++) {
    let hx = 80 + i * 150 + sin(frameCount * 0.03 + i) * 20;
    let hy = 400 - (frameCount + i * 100) % 450;
    fill(230, 120, 140, 180);
    ellipse(hx - 4, hy - 3, 10, 10);
    ellipse(hx + 4, hy - 3, 10, 10);
    triangle(hx - 9, hy, hx + 9, hy, hx, hy + 10);
  }
  // 드래그 자취
  fill(255, 220, 100, 160);
  ellipse(trailX, trailY, 10, 10);
  // 클릭하면 나오는 별
  if (starOn) {
    starCount++;
    fill(255, 210, 80, 255 - starCount * 6);
    push();
    translate(starX, starY);
    rotate(frameCount * 0.05);
    for (let a = 0; a < 5; a++) {
      triangle(-3, -12, 3, -12, 0, -24);
      rotate(TWO_PI / 5);
    }
    pop();
    if (starCount > 40) starOn = false;
  }
  // 캐릭터 흔들림
  push();
  translate(shakeAmount * sin(frameCount * 0.8), 0);
  // 머리
  fill(30, 20, 20);
  ellipse(277.5, 114.5, 135, 150); ellipse(322.5, 114.5, 135, 150);
  ellipse(270, 185, 150, 270); ellipse(330, 185, 150, 270);
  // 목, 얼굴, 귀
  fill(245, 220, 205); rect(274, 230, 52, 60, 12);
  fill(248, 225, 210); ellipse(300, 155, 150, 187);
  ellipse(217, 164, 21, 39); ellipse(382, 164, 21, 39);
  // 귀걸이
  let swing = sin(frameCount * 0.06) * 2;
  fill(235);
  ellipse(217, 183 + swing, 10, 10); ellipse(382, 183 - swing, 10, 10);
  // 앞머리
  fill(30, 20, 20); ellipse(300, 59, 120, 15);
  push(); translate(240, 95); rotate(0.5); ellipse(0, 0, 45, 97.5); pop();
  push(); translate(360, 95); rotate(-0.5); ellipse(0, 0, 45, 97.5); pop();
  // 리본
  if (ribbonOn) {
    fill(255, 80, 100);
    triangle(340, 55, 365, 40, 365, 70);
    triangle(340, 55, 315, 40, 315, 70);
    fill(255, 100, 120);
    ellipse(340, 55, 12, 12);
  }
  // 가디건
  fill(25, 35, 80);
  push(); translate(199, 372); rotate(0.07); rect(-24, -75, 48, 195, 21); pop();
  push(); translate(400, 372); rotate(-0.07); rect(-24, -75, 48, 195, 21); pop();
  rect(180, 282, 240, 270, 60);
  fill(248, 225, 210); triangle(262, 281, 300, 335, 337, 282);
  fill(255); ellipse(300, 357.5, 9, 9); ellipse(300, 387.5, 9, 9);
  // 팔
  stroke(12, 18, 45); strokeWeight(3);
  line(217, 305, 217, 462); line(382, 305, 382, 462);
  // 눈썹
  noFill(); stroke(70, 50, 50); strokeWeight(3);
  arc(267, 137, 42, 12, PI, TWO_PI); arc(333, 137, 42, 12, PI, TWO_PI);
  // 눈
  noStroke();
  let ex = constrain((mouseX - 300) * 0.03, -4, 4);
  let ey = constrain((mouseY - 155) * 0.02, -2, 2);
  if (blinkTimer > 85 && blinkTimer < 90) {
    stroke(50, 30, 30); strokeWeight(2);
    line(251, 155, 283, 155); line(317, 155, 349, 155);
  } else {
    if (winkLeft) {
      stroke(50, 30, 30); strokeWeight(2);
      line(251, 155, 283, 155);
    } else {
      fill(255); ellipse(267, 155, 33, 18);
      fill(30); ellipse(267+ex, 155+ey, 15, 18);
      fill(255); ellipse(262+ex, 150+ey, 6, 6);
      noFill(); stroke(50, 30, 30); strokeWeight(3);
      arc(267, 152, 33, 21, PI, TWO_PI);
      stroke(0); strokeWeight(1.5);
      line(252,144.5,247.5,141.5); line(262.5,143,259.5,135.5);
      line(273,143,274.5,135.5); line(283.5,146,286.5,141.5);
    }
    noStroke(); fill(255); ellipse(333, 155, 33, 18);
    fill(30); ellipse(333+ex, 155+ey, 15, 18);
    fill(255); ellipse(328+ex, 150+ey, 6, 6);
    noFill(); stroke(50, 30, 30); strokeWeight(3);
    arc(333, 152, 33, 21, PI, TWO_PI);
    stroke(0); strokeWeight(1.5);
    line(348,144.5,352.5,141.5); line(337.5,143,340.5,135.5);
    line(327,143,325.5,135.5); line(316.5,146,313.5,141.5);
  }
  // 코
  stroke(175, 125, 115); strokeWeight(2.25);
  line(300, 173, 295.5, 191); line(295.5, 191, 306, 194);
  // 입
  noStroke(); fill(200, 110, 120);
  arc(300, 215, 39 + smileSize, 21 + smileSize * 0.5, 0, PI);
  // 볼, 점
  fill(235, 170, 180, blushAlpha);
  ellipse(243, 191, 27, 15); ellipse(357, 191, 27, 15);
  fill(90, 70, 70); ellipse(255, 170, 3, 3);
  pop();
}
function mouseClicked() {
  starOn = true; starCount = 0;
  starX = mouseX; starY = mouseY;
  clickCount++;
  if (clickCount % 5 === 0) shakeAmount = 6;
}
function mouseDragged() {
  trailX = mouseX; trailY = mouseY;
}
function mousePressed() {
  blushAlpha = 200;
}
function keyPressed() {
  if (key === 'a') smileSize = 12;
  if (key === 'w') winkLeft = !winkLeft;
  if (key === 'b') ribbonOn = !ribbonOn;
  let pick = int(random(6));
  if (pick === 0) { bgR=255; bgG=210; bgB=210; }
  else if (pick === 1) { bgR=255; bgG=255; bgB=200; }
  else if (pick === 2) { bgR=200; bgG=255; bgB=200; }
  else if (pick === 3) { bgR=200; bgG=220; bgB=255; }
  else if (pick === 4) { bgR=240; bgG=200; bgB=255; }
  else { bgR=255; bgG=225; bgB=200; }
  if (key === 's'){
    saveGif('mySketch', 10);
  }
}
