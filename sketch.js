const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var object, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


var ground_options ={
    isStatic: true
}
   ground=Bodies.rectangle(200,390,400,10,ground_options)
   World.add(world,ground)

   var object_options ={
    restitution: 1.0
}

 object= Bodies.circle(200,300,50,object_options);
World.add(world,object);
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("red")
    ellipseMode(RADIUS )
    ellipse(object.position.x,object.position.y,50,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    
    
}
