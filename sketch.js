var img;
var img2;
let x = 200;
let y = 200;
let speed = 2;

function preload(){
  img = loadImage("img.png");
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  
  background(img);
  circle(mouseX, mouseY, 10);
  text(mouseX+" : "+mouseY,39,20);
  if(mouseX>=45 && mouseY>=35 && mouseX<=360 && mouseY<=140) {
    noFill();
    stroke("black");
    strokeWeight(1);
    rect(30,40,150,120);
    
    if(mouseIsPressed) {
      fill(0,0,180);
      rect(30,40,150,120);
    }
    
  }

  
  if(keyIsDown(LEFT_ARROW) && keyIsDown(32) || keyIsDown(65) && keyIsDown(32)) {
    x -= speed * 2;
  } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x -= speed;
  }
  
  if(keyIsDown(RIGHT_ARROW) && keyIsDown(32) || keyIsDown(68) && keyIsDown(32)) {
    x += speed * 2;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  }
  
  if(keyIsDown(UP_ARROW) && keyIsDown(32) || keyIsDown(87) && keyIsDown(32)) {
    y -= speed * 2;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    y -= speed;
  }
  
  if(keyIsDown(DOWN_ARROW) && keyIsDown(32) || keyIsDown(83) && keyIsDown(32)) {
    y += speed * 2;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    y += speed;
  }
  
  rect(x, y, 30, 30);
}