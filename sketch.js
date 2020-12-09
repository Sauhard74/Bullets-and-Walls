var bullet ,wall,speed;

function setup() {
  createCanvas(1700,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness =random(22,83)

  bullet=createSprite(200,200,20,20)
  bullet.shapeColor=color(255)
  bullet.velocityX=speed;

  wall=createSprite(1100,200,60,height/2)
  wall.shapeColor=color(80,80,80)
}
function draw(){
  background(0);  
  

  if(wall.x-bullet.x  < (wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);

    if(damage<10){
     // Text("Safe!!", 200,200)
      wall.shapeColor="green"
    }
  
  
  if(damage>10){
  //Text("Lethal!!",200,200)
  wall.shapeColor="red"
}
  }
  
  drawSprites();
}
