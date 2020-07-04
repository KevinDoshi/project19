var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudi,cloudg;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,
    obstacle5,obstacle6,obsatcleg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudi=loadImage("cloud.png");
obstacle1=loadImage("obstacle1.png");
obstacle2=loadImage("obstacle2.png");
obstacle3=loadImage("obstacle3.png");
obstacle4=loadImage("obstacle4.png");
obstacle5=loadImage("obstacle5.png");
obstacle6=loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles(); 
  drawSprites();
}
function spawnClouds(){
  if(frameCount%80===0){
    cloud=createSprite(600,120,10,10);
    cloud.addImage("cloudl",cloudi);
    cloud.velocityX=-3;
    cloud.lifetime=200;
    cloud.scale=0.6;
  }
}
function spawnObstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(600,165,10,10);
    obstacle.velocityX=-6;
    obstacle.scale=0.6;        
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1:obstacle.addImage("obstaclel",obstacle1)
        break;
         case 2:obstacle.addImage("abcd",obstacle2)
        break;  
        case 3:obstacle.addImage("abcde",obstacle3)
        break;
         case 4:obstacle.addImage("ac",obstacle4)
        break;
         case 5:obstacle.addImage("ab",obstacle5)
        break;
         case 6:obstacle.addImage("a",obstacle6)
        break;
    }   
  }   
}