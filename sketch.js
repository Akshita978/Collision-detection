var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "Blue";
  fixedRect.debug = true;
  
  movingRect = createSprite (400, 200, 80, 30);
  movingRect.shapeColor= "Blue";
  movingRect.debug =true;

}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor ="blue";
    fixedRect.shapeColor ="blue";
  }



  drawSprites();
}