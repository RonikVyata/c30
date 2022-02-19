const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit,rabbitImage;
var cutButton;


function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitImage = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-20,width,20);

  rabbit = createSprite(width/2, height-140);
  rabbit.addImage(rabbitImage);
  rabbit.scale=0.4

  cutButton = createImg("cut_button.png");
  cutButton.position(width/2,30);
  cutButton.size(50,50);
  cutButton.mouseClicked(drop);

  rope = new Rope(8,{x:width/2+20,y:30});
  fruit = Bodies.circle(width/2,350,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,width,height);

  image(food,fruit.position.x,fruit.position.y,100,100);
  rope.show();
  Engine.update(engine);
  ground.show();

 
   drawSprites();
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con= null;
}