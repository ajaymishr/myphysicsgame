const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1,ball,generator,dustbin,generatori,dustbini;
var game="first";
var score=1;
function preload(){
    dustbini=loadImage("Dustbin.png")
    generatori=loadImage("Generator.png")
}
function setup(){
   createCanvas(1300,550);
   engine = Engine.create();
   world = engine.world;
   dustbin=createSprite(1250,500,20,20);
   dustbin.addImage(dustbini);
   dustbin.scale=0.45;
generator=createSprite(40,40,20,20);
generator.addImage(generatori)
generator.scale=0.15;
dustbin1=new Ground(dustbin.x,dustbin.y+45,100,5)
   g1=new Ground(650,550,1300,5);
   g2=new Ground(0,275,5,550);
   g3=new Ground(650,0,1300,5);
   g4=new Ground(1300,275,5,550);
   maze1=new Ground(159,275,310,5)
   maze2=new Ground(80,38,5,72)
   maze3=new Ground(407,72,660,5)
   maze4=new Ground(307,110,5,72);
   maze5=new Ground(273,145,72,5);
   maze6=new Ground(365,375,310,5)
   maze7=new Ground(517,338,5,72)
   maze8=new Ground(407,410,5,72);
   maze9=new Ground(373,445,72,5);
   maze10=new Ground(600,510,1210,5)
   maze11=new Ground(659,355,5,310)
   maze12=new Ground(807,200,660,5)
   maze13=new Ground(1080,165,5,72)
   maze14=new Ground(1109,385,330,5)
   maze15=new Ground(1180,380,5,72)
   ball=new balls(40,40,25);
   ball2=new balls(4000,40,25);
   ball3=new balls(4000,40,25);
   ball4=new balls(4000,40,25);
   ball5=new balls(4000,40,25);
   ball6=new balls(4000,40,25);
rope=new SlingShot(ball2.body,ball3.body,ball4.body,ball5.body,ball6.body,ball2.body)
}
function draw(){
background("white");
g1.display();
g2.display();
g3.display();
g4.display();
maze1.display();
maze2.display();
maze3.display();
maze4.display();
maze5.display();
maze6.display();
maze7.display();
maze8.display();
maze9.display();
maze10.display();
maze11.display();
maze12.display();
maze13.display();
maze14.display();
maze15.display();
rope.display();
dustbin1.display();
ball.display();
ball2.display();
ball3.display();
ball4.display();
ball6.display();
ball5.display();
if(game==="first"){
    textSize(25)
    fill("blue")
    text("solve the maze by arrow keys and get a surprize",690,110)
}
if(keyWentDown("up")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-50})
}if(keyWentDown("right")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:0})
}if(keyWentDown("left")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-50})
}
if(ball.body.position.y>dustbin.y&&ball.body.position.x>dustbin.x-60){
    Matter.Body.setPosition(maze1.body,{x:1800,y:700});
    Matter.Body.setPosition(maze2.body,{x:1800,y:700});
    Matter.Body.setPosition(maze3.body,{x:1800,y:700});
    Matter.Body.setPosition(maze4.body,{x:1800,y:700});
    Matter.Body.setPosition(maze5.body,{x:1800,y:700});
    Matter.Body.setPosition(maze6.body,{x:1800,y:700});
    Matter.Body.setPosition(maze7.body,{x:1800,y:700});
    Matter.Body.setPosition(maze8.body,{x:1800,y:700});
    Matter.Body.setPosition(maze9.body,{x:1800,y:700});
    Matter.Body.setPosition(maze10.body,{x:1800,y:700});
    Matter.Body.setPosition(maze11.body,{x:1800,y:700});
    Matter.Body.setPosition(maze12.body,{x:1800,y:700});
    Matter.Body.setPosition(maze13.body,{x:1800,y:700});
    Matter.Body.setPosition(maze15.body,{x:1800,y:700});
    Matter.Body.setPosition(ball2.body,{x:800,y:70});
    Matter.Body.setPosition(ball3.body,{x:700,y:500});
    Matter.Body.setPosition(ball4.body,{x:600,y:50});
    Matter.Body.setPosition(ball5.body,{x:500,y:100});
    Matter.Body.setPosition(ball6.body,{x:400,y:300});
    text("close the game",60,60);
    generator.destroy();
    dustbin.x=1800;
    game="second"
    Matter.Body.setPosition(ball.body,{x:40,y:40});
}

if(keyWentDown("space")){
    Matter.Body.setStatic(ball.body,false)
}

Engine.update(engine);

    drawSprites();
}   