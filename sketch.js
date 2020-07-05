var  wall , bullet ,bulletImg,  thickness;
var speed , weight ,damage;

function preload (){
  bulletImg = loadImage("bulletandwalls.jpg");
}

function setup() {
  createCanvas(1200,600);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52); 

  bullet  = createSprite(100, 300,15,5);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  bullet .velocityX = speed;
  bullet .shapeColor = "brown";

  wall = createSprite(1000, 300, thickness , height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background(12);  

 /* rect(50,80,10,10);
  rectMode(CENTER);*/
  

  if (hasCollided (bullet,wall))
{

    bullet.velocityX = 0; 
    damage = (0.5 * weight * speed * speed) /(thickness * thickness * thickness );
  
    if(damage > 10){
      wall.shapeColor = "red";
      
    }
    
    if( damage < 10){
      wall.shapeColor = "green";
     
    }
  }

  drawSprites();

  stroke("green");
  textSize(25);
  text(" Green - Less Damage ", 50,80);
  
  stroke("red");
  text("Red - Dangerous",100,180);
  

}

    