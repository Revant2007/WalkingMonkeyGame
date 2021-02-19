
var gameState = "PLAY";

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score, ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,500) 
  
  monkey = createSprite(60,380,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(250,400,500,15);
  
  obstaclesGroup = new Group()
  FoodGroup = new Group()
  

}

function spawnObstacles(){
  
  if(frameCount % 80 === 0){
  
   obstacle = createSprite(500,365,20,20);
   obstacle.velocityX = -8;
   obstacle.addImage(obstacleImage); 
   obstacle.scale = 0.15;
   obstacle.lifetime = 550;
    
   obstaclesGroup.add(obstacle);
 
  }
}
 

  
function spawnBananas(){
  
  if (frameCount % 60 === 0){
  
    banana = createSprite(500,150,20,20);
    banana.y = Math.round(random(100,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 550
    FoodGroup.add(banana);
    
  }
  
  
}

function draw() {
  
  
  background("lightblue")
    
  if(gameState === "PLAY"){
    
   
    monkey.velocityY = monkey.velocityY + 0.8
    
    if(keyDown("space") && monkey.y >= 320) {
  
    monkey.velocityY = -15;           
    }  
     spawnObstacles();
     spawnBananas();
      
     if(monkey.isTouching(obstaclesGroup)) {  
      
       gameState = "END";
       
      
    }

}
     if (gameState === "END"){
       
       textSize(20);
       text("GAME OVER",200,200);
       
      monkey.destroy();
      FoodGroup.destroyEach(); 
      obstaclesGroup.destroyEach(); 

       
       
       
     }

     monkey.collide(ground);

 

     drawSprites();

}


 
   
  
   
  
   
  
  








