var backgroundImg;
var background;
var carrot;
var carrotImg;

function preload(){
  backgroundImg = loadImage('images/bg4.jpg');
  carrotImg = loadImage('images/carrot.png');
  
  
}

function setup() {
  createCanvas(800, 400);
  
  background = createSprite(0,0,800,400);
  background.addImage(backgroundImg);
  background.scale = 1;
  background.x = width/2;
  
  function spawnCarrots(){}
  
}
function draw() {
    background.velocityX = -2;  
    
    if (background.x < 0){
      background.x = background.width/2;
    }

    spawnCarrot();
   
    drawSprites();
  
}

function spawnCarrot(){
  if( frameCount% 60 === 0){
    carrot = createSprite(800,120,30,10);
    carrot.y = Math.round(random(80,120));
    carrot.addImage(carrotImg);
    carrot.scale = 0.10;
    carrot.velocityX = -3;
}

}

