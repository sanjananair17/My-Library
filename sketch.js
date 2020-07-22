var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 200, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(500, 200, 50, 50);
  gameObject2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1.velocityX = 7;
  gameObject2.velocityX = -7;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1, gameObject2);
  bounceOff(movingRect, fixedRect);

  drawSprites();
}

function bounceOff(obj1, obj2) {
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
  && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
    obj1.velocityX = obj1.velocityX * (-1);
    obj2.velocityX = obj2.velocityX * (-1);
  }
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
  }
}

function isTouching(object1,object2) {
   if (object1.x - object2.x < object2.width/2 + object1.width/2 
   && object2.x - object1.x < object2.width/2 + object1.width/2 
   && object1.y - object2.y < object2.height/2 + object1.height/2 
   && object2.y - object1.y < object2.height/2 + object1.height/2) { 
    return true; 
  } 
  else { 
    return false; 
  } 
}