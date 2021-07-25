
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;

var btn
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  btn=createImg("up.png")
  btn.position(20,30)
  btn.size(50,50)
  btn.mouseClicked(vforce)


var ball_options={
  restitution:0.8}
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

