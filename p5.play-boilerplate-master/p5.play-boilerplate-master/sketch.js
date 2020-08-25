var moving
var fixed

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(100,200,20,20)
}




function draw() {
  background(255,255,255); 
 moving.x=mouseX
 moving.y=mouseY
  
if(moving.x-fixed.x<moving.width/2-fixed.width/2&&fixed.x-moving.x<fixed.width/2+moving.width/2&&moving.y-fixed.y<moving.height-fixed.height/2&&fixed.y-moving.y<fixed.height/2+moving.height/2) {
moving.shapeColor="blue"
fixed.shapeColor="red"
}
else {
moving.shapeColor="gray"
fixed.shapeColor="gray"
}



  drawSprites();
}