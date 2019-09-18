function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  background(255);
  frameRate(60);
}

function draw() {
  var k = 100;
  var r = random(120);
  translate(width/2,height/2);
  stroke(lerpColor(color("blue"), color("red"), r/120));
  line(k, 0, k*cos(frameCount*3), k*sin(frameCount*3));
  if(frameCount == 120) {
    noLoop();
  }
}
