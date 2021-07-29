const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var snow;
var snowFlake1=[];



function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snow=loadImage("snow3.jpg");
  if(frameCount%50===0){
    for(var i=1; i<300; i=i+1){
    snowFlake1.push(new Snow(random(10, 750), random(20, 100), 50, 50));
    }
}
  }


function draw() {
  background(snow);  
  Engine.update(engine);
  for(var i=1; i<300; i=i+1){
    snowFlake1[i].display();
  }
 
  
}


