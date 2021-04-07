const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ground, iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone= new Stone(700,470,80,100)
    //ground=new Ground(600,height,1200,15)
    iron=new Iron(500,470,80,50)
  //creating rubbers
  rubber=new Rubber(600,300,1)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
   // ground.display();
    iron.display();
    rubber.display(); 
    
 
}