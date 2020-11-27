var fixedrectangle, movingrectangle,g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  fixedrectangle=createSprite(200, 200, 50, 80);
  movingrectangle=createSprite(400, 200, 80, 30);
  g1=createSprite(100, 100, 50, 50);
  g2=createSprite(200, 100, 50, 50);
  g3=createSprite(300, 100, 50, 50);
  g4=createSprite(400, 100, 50, 50);
  movingrectangle.shapeColor = "green";
  fixedrectangle.shapeColor = "green";
  g1.shapeColor = "green";
  g2.shapeColor = "green";
  g3.shapeColor = "green";
  g4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingrectangle.x=mouseX;
  movingrectangle.y=mouseY;
  console.log("Pranika");
  if(isTouching(movingrectangle,g2))
  {
    movingrectangle.shapeColor = "blue";
    g2.shapeColor = "blue";
  }

 else{
  movingrectangle.shapeColor = "green";
  g2.shapeColor = "green";
 }
  drawSprites();
}

function isTouching(object1,object2)
{
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