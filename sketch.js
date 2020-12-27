const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof();

  bobDiameter = 40;
  var posx = width/2;
  var posy = height/2 + 150;

  bob = new Bob(340,480,39.6);
	bob2 = new Bob(420,480,39.6);
	bob3 = new Bob(500,480,39.6);
	bob4 = new Bob(580,480,39.6);
	bob5 = new Bob(660,480,39.6);
	roof = new Roof(500,100,400,20);
	rope1 = new Chain(bob.body,roof.body,-bobDiameter*2,0)
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Chain(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2,0)

  

  Engine.run(engine);
}



function draw() {
  background("yellow");
  Engine.update(engine);

  fill("black");
  textSize(30);
  text("NEWTON'S CRADLE", width/2-140, height-60);
  textSize(20)
  text("Drag the left bob",100,30);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bob.body, {x:mouseX, y:mouseY});
}