var p = 0;
var q = 0;
var g = 0;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  background(255);
  frameRate(120);
}

function draw() {

  push();

  var k = 50;
  var r = random(120);
  p = p + 1;
  q = q + 2;
  g = g + 3;

  //Originale

  if(frameCount < 100){
    translate(width/2,height/7);
    stroke("black");
    line(k, 0, (k)*cos(frameCount*4), (k)*sin(frameCount*4));
  }

  //Centro Triplo

  pop();

  translate(width/2,height/1.3);
  stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(p));

  stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(q));

  stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(g));

  //Sinistra Triplo

  translate(-width/4,0);
  stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  line(0, k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(p));

  stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  line(0, k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(q));

  stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  line(0, k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(g));

  //Destra Triplo

  translate(width/2,0);
  stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  line(0, -k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(p));

  stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  line(0, -k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(q));

  stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  line(0, -k, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(g));

  if(frameCount == 720) {
    noLoop();
  }
}
