var backImg, back, invisibleGround;
var player, player_running, banana, bananaImg, bananaGroup, obstacleImg, obstacleGroup, backImg, score;

function preload()
{
  backImg = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
  
  obstacleGroup = new Group();
  
  bananaGroup = new Group();
}

function setup() 
{
  createCanvas(400, 400);
  
  back = createSprite(200, 200, 400, 400);
  back.addImage(backImg);
  back.x = back.width/2
  back.velocityX = -6;
  
  player = createSprite(50, 350, 20, 20);
  player.addAnimation("running", player_running);
  player.scale = 0.2;
  
  score = 0;
  
  invisibleGround = createSprite(0, 390, 900, 10);
  invisibleGround.visible = false;
}

function draw() 
{
  background(0);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 300, 50);
  
  if (back.x < 0)
  {
    back.x = back.width/2;
  }
  
  if (keyDown("space"))
  {
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.8;
  
  if (obstacleGroup.isTouching(player))
  {
     player.scale = 0.15;  
  }
  
  if (bananaGroup .isTouching(player))
  {
    bananaGroup.destroyEach();
    score = score + 2;
  }
  
  
  player.collide(invisibleGround);
  food();
  obstacles();
  drawSprites();
}

function food()
{
  if(frameCount % 80 === 0)
  {
      var rand = Math.round(random(120,200));
      banana = createSprite(350, rand, 20, 20);
      banana.addImage(bananaImg);
      banana.scale = 0.05;
      banana.velocityX = -5
      banana.lifetime = 70;
      bananaGroup.add(banana);
      switch(rand) {
        case 1: banana.y = 120
                break;
        case 2: banana.y = 140;
                break;
        case 3: banana.y = 160;
                break;
        case 4: banana.y = 175;
                break;
        case 5: banana.y = 190;
                break;
        case 6: banana.y = 200;
                break;
        default: break;
        
    
    }
  }   
}

function obstacles()
{
  if (frameCount % 300 === 0)
  {
    var obstacle = createSprite(380, 360);
    obstacle.addImage(obstacleImg);
    obstacle.velocityX = -6;
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
    
    obstacleGroup.add(obstacle);
  }
}