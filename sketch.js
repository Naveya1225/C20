var fixedRec,movingRec;
function setup() {
  
  createCanvas(800,400);
  
   fixedRec=createSprite(400,200,40,80);
   movingRec=createSprite(500,100,80,40);
   fixedRec.shapeColor='green';
   movingRec.shapeColor='green';

 

}

function draw() {
  background("black"); 
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;
  if(movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2
    && fixedRec.x-movingRec.x < movingRec.width/2 + fixedRec.width/2
    && movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2
    && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2){
    movingRec.shapeColor='red';
    fixedRec.shapeColor='red';

  } 
  else{
    movingRec.shapeColor='green'
    fixedRec.shapeColor='green'
}
console.log(movingRec.width/2 + fixedRec.width/2)
console.log(movingRec.x - fixedRec.x)

  drawSprites();
}