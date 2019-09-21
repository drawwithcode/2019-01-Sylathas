var p = 0;
var q = 0;
var g = 0;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  background("peachpuff");
  frameRate(120);
}

function draw() {

  push();

  var k = 50;
  p = p + 1;
  q = q + 2;
  g = g + 3;

  //Originale

  if(frameCount < 100){
    translate(width/2,height/6.4);
    stroke("black");
    line(k, 0, (k)*cos(frameCount*4), (k)*sin(frameCount*4));
  }

  //Sinistra Cerchio Colore

  if(frameCount > 100){

    //Testo

    textSize(20);
    text("move mouse to change active color", width/1.5, height/6.4);

    //Originale Colore
    translate(width/4,height/2.5);
    Color1();
    line(k, 0, (k)*cos(frameCount*4), (k)*sin(frameCount*4));

    //Centro Sin()

    translate(width/4,0);
    Color2();
    line(k, 0, k*cos(frameCount*2), k*sin(frameCount*2) + 30*sin(g));

    //Destra Doppio

    translate(width/4,0);
    Color2();
    line(k, 0, k*cos(frameCount), k*sin(frameCount) + 30*sin(q));

    Color3();
    line(k, 0, k*cos(frameCount), k*sin(frameCount) + 30*sin(g));
  }

  pop();

  //Sinistra Triplo
  if(frameCount > 260){
    translate(width/4,height/1.4);
    Color1();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 50*sin(p));

    Color2();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 50*sin(q));

    Color3();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 50*sin(g));

    //Centro Triplo

    translate(width/4,0);
    Color2();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(p));

    Color3();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(q));

    Color1();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 30*sin(g));

    //Destra Triplo

    translate(width/4,0);
    Color3();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 60*sin(p));

    Color1();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 60*sin(q));

    Color2();
    line(k, 0, k*cos(frameCount/2), k*sin(frameCount/2) + 60*sin(g));
  }
}

function Color1(){
  var r = random(120);
  if(mouseX > 0 && mouseX < width/3){
    stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  } else if(mouseX > width/3 && mouseX < width/(3/2)){
      stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  } else if(mouseX > width/(3/2) && mouseX < width){
    stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  }
}

function Color2(){
  var r = random(120);
  if(mouseX > 0 && mouseX < width/3){
    stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  } else if(mouseX > width/3 && mouseX < width/(3/2)){
    stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  } else if(mouseX > width/(3/2) && mouseX < width){
    stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  }
}

function Color3(){
  var r = random(120);
  if(mouseX > 0 && mouseX < width/3){
      stroke(lerpColor(color(random(255), random(255), 0), color(random(255), random(255), 0), r/120));
  } else if(mouseX > width/3 && mouseX < width/(3/2)){
      stroke(lerpColor(color(0, random(255), random(255)), color(0, random(255), random(255)), r/120));
  } else if(mouseX > width/(3/2) && mouseX < width){
      stroke(lerpColor(color(random(255), 0, random(255)), color(random(255), 0, random(255)), r/120));
  }
}
