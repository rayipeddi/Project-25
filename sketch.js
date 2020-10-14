
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxside1, boxside2,boxbase;
var dustbin, dustbinImg;
var ball;
var ground;
function preload()
{
dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball = new Paper(100,200,45,45)
	ground = new Ground(400,height,800,20)
	boxside1 = new Dustbin(550,653,15,75)
	boxside2 = new Dustbin(650,653,15,75)
  boxbase = new Dustbin(600,683,100,15)
  dustbin = createSprite(600,627,10,10)
  dustbin.addImage(dustbinImg)
  dustbin.scale = 0.4
	Engine.run(engine);
  if(ball.y < ground.y){
	  ball.setStatic = true
  }
}

function draw() {
  background("white")
  rectMode(CENTER);
  ball.display()
  ground.display()
  //boxside1.display()
  //boxside2.display()
 // boxbase.display()
  console.log(ball.x)
  drawSprites();

}
function keyPressed( ) {
  if (keyCode -UP_ARROW) {
  Matter . Body . applyForce(ball. body, ball. body . position, {x:95,y: -100});
  }
}
