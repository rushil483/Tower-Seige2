const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot;
var polygon;
var polygonimg;

function preload(){
  // imageMode(CENTER)
   polygonimg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400)
    engine = Engine.create();
    world = engine.world;
   

   ground = new Ground(400,580,1000,10);

    block1 = new Box(300,275,30,40);
    block11 = new Box(330,275,30,40);
    block12 = new Box(360,275,30,40);
    block13 = new Box(390,275,30,40);
    block14 = new Box(420,275,30,40);
    block15 = new Box(450,275,30,40);
    block16 = new Box(480,275,30,40);
   // block17 = new Box(300,235,30,40);
    stand1 = new Stand(390,300,250,10); 
    stand2 = new Stand(700,200,200,10);
    block2 = new Box(330,235,30,40);
    block3 = new Box(360,235,30,40);
    block4 = new Box(390,235,30,40);
    block5 = new Box(420,235,30,40);
    block6 = new Box(450,235,30,40);
    block7 = new Box(360,195,30,40);
    block8 = new Box(390,195,30,40);
    block9 = new Box(420,195,30,40);
    block10 = new Box(390,155,30,40);

    polygon = Bodies.circle(150,200,20);
    World.add(world,polygon);

     slingShot = new SlingShot(this.polygon,{x:100,y:200});
}


function draw(){
    background(56,44,44);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    stand1.display();
    stand2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
   // polygon.display();
    slingShot.display();
    ground.display();

    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);
    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX , y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(polygon)
    }
}
