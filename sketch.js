
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinO, papere,grounde
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
background("black")
	engine = Engine.create();
	world = engine.world;
	
	papere=new paper(200,450,70);
	grounde=new ground(width/2,670,width,20);
	dustbinO=new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
   grounde.display();
 dustbinO.display(); 
 papere.display(); 
 
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(papere.body,papere.body.position,{x:130,y:-145});

    
  	}
}





