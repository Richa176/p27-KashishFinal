
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var chain1,chain2,chain3,chain4,chain5;
var ground;
var engine,world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	bobDiameter=40;

	ground = Bodies.rectangle(width/2,height/4,width/7,20, {isStatic:true} );
	World.add(world, ground);

	//Create the Bodies Here.
	bob1=Bodies.circle(800-40,665,20,{restitution:0.1,friction:0.5,density:1.2});
	World.add(world,bob1);

	bob2=Bodies.circle(800-20,665,20,{restitution:0.1,friction:0.5,density:1.2});
	World.add(world,bob2);

	bob3=Bodies.circle(800,665,20,{restitution:0.1,friction:0.5,density:1.2});
	World.add(world,bob3);
	
	bob4=Bodies.circle(800+40,665,20,{restitution:0.1,friction:0.5,density:1.2});
	World.add(world,bob4);

    bob5=Bodies.circle(800+80,665,20,{restitution:0.5,friction:0.5,density:1.2});
	World.add(world,bob5);

	

	 chain1=new rope(bob1,ground,-80,0);

	chain2=new rope(bob2,ground,-40,0);

	chain3=new rope(bob3,ground,0,0);

	chain4=new rope(bob4,ground,40,0);

	chain5=new rope(bob5,ground,80,0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(225);
  
  //drawSprites();
  //ground.display();

  rectMode(CENTER);
	rect(ground.position.x,ground.position.y,200,20);
	
 chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 

    ellipseMode(RADIUS);
	ellipse(bob1.position.x, bob1.position.y, 20, 20);
	ellipse(bob2.position.x, bob2.position.y, 20, 20);
	ellipse(bob3.position.x, bob3.position.y, 20, 20);
	ellipse(bob4.position.x, bob4.position.y, 20, 20);
	ellipse(bob5.position.x, bob5.position.y, 20, 20);
 

}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-40});
	 
	}
}