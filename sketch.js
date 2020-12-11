
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,backgroundImg;
var score=0;

function preload() {
  getBgImg();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 var spacing=560;
 var plus=37;
 var plus2=18.5;
 
 gr1=new Ground(560,380,260,5);
 box1=new Box(spacing,340,37,80);
 box2=new Box(spacing+plus,340,37,80)
 box3=new Box(spacing+plus*2,340,37,80)
 box4=new Box(spacing-plus,340,37,80)
 box5=new Box(spacing-plus*2,340,37,80)
 box6=new Box(spacing+plus2,270,37,80)
 box7=new Box(spacing-plus2,270,37,80)
 box8=new Box(spacing+plus2*3,270,37,80)
 box9=new Box(spacing-plus2*3,270,37,80)
 box10=new Box(spacing,200,37,80);
 box11=new Box(spacing+plus,200,37,80)
 box12=new Box(spacing-plus,200,37,80)
 box13=new Box(spacing+plus2,130,37,80)
 box14=new Box(spacing-plus2,130,37,80)
 box15=new Box(spacing,60,37,80);

 shooter = new Hex(100,100);
 slin = new Slingshot(shooter.body,{x:200,y:50});
 
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  Engine.update(engine);

  gr1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  shooter.display();
  slin.display(); 
  textSize(35);
  text("score="+score,width-170,50);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
       slin.Fly();
  }

  function keyPressed(){
    if(keyCode===32){
        slin.attach(shooter.body);
    }
}
async function getBgImg(){
  var resp= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var respjson=await resp.json();
  var dateTime=respjson.datetime;
  var hrs=dateTime.slice(11,13);
  console.log(hrs);
  if(hrs>6 && hrs<17){
  bg="DAY.jpg";
  }
  else{
   bg="NIGHT.jpg";
  }
  backgroundImg=loadImage(bg);
  
  }
