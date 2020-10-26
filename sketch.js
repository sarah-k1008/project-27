
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof (width/2,height/4,width/7,20);
	bob1 = new ball (550,600);
	bob2 = new ball (570,600);
	bob3 = new ball (590,600);
	bob4 = new ball (610,600);
	bob5 = new ball (630,600); 
	rope1 =new chain (bob1.body,roof.body - bobDiameter*2,0);
	rope2 =new chain (bob2.body,roof.body - bobDiameter*2,0);
	rope3 =new chain (bob3.body,roof.body - bobDiameter*2,0);
	rope4 =new chain (bob4.body,roof.body - bobDiameter*2,0);
	rope5 =new chain (bob5.body,roof.body - bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display(); 
  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85})
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85})
	}
  }

