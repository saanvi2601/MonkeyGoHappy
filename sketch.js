
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  survivalTime = 0; 
  
}


function draw() {
  background("white");
  
  if(ground.x<0) {
     ground.x=ground.width/2;
   }
  
  if(keyDown("space") ) {
       monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  stones();
  
  
  
  drawSprites();
 
  
  
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    
    bananaGroup.setVelocityXEach(0); 
    bananaGroup.setLifetimeEach(-1);
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
}
  



function food(){
  if(frameCount % 80 === 0){
      banana = createSprite(600,250,40,10);
      banana.y = random(120,200);
      banana.velocityX = -6;
      banana.addImage(bananaImage);
     
      banana.lifetime = 350;
      banana.scale = 0.07;
     
      monkey.depth = banana.depth+1;
    
      bananaGroup.add(banana);
     
     }
}
  
function stones(){
  if(frameCount % 200 === 0) {
      obstacle = createSprite(800,320,10,40);
      obstacle.velocityX = -6;
     
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.13;
         
      obstacle.lifetime = 300;
    
      obstacleGroup.add(obstacle);
    }
  
  
  
}
  

 



