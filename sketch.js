const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;

function preload() {}

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,400);

    elastic = new Elastic(polygon.body,{x:200,y:350})

    ground = new Ground(700,height,1410,20);
    platform1 = new Ground(750, 551, 470, 15);
    platform2 = new Ground(1160, 301, 300, 15);

    box1 = new Box(570,500)
    box2 = new Box(630,500)
    box3 = new Box(690,500)
    box4 = new Box(750,500)
    box5 = new Box(810,500)
    box6 = new Box(870,500)
    box7 = new Box(930,500)
   
    box8 = new Box(630,417)
    box9 = new Box(690,417)
    box10 = new Box(750,417)
    box11 = new Box(810,417)
    box12 = new Box(870,417)
   
    box13 = new Box(690,334)
    box14 = new Box(750,334)
    box15 = new Box(810,334)
    
    box16 = new Box(750,251)
   
    box17 = new Box(1040,250)
    box18 = new Box(1100,250)
    box19 = new Box(1160,250)
    box20 = new Box(1220,250)
    box21 = new Box(1280,250)

    box22 = new Box(1100,167)
    box23 = new Box(1160,167)
    box24 = new Box(1220,167)

    box25 = new Box(1160,84)

    
}    

function draw(){
    background(93,187,215)
    Engine.update(engine);

    
    fill("white")
    textSize(20)
    text("SCORE : "+score,20,20)

    textSize(50)
    text("Press 'Space' to get one more chance",20,70)
    
    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();

    elastic.display()
    
    strokeWeight(1);
    stroke("grey")
    fill(255, 179, 186)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill(255, 223, 186)
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill(255, 255, 186)
    box13.display();
    box14.display();
    box15.display();
    fill(186, 255, 201)
    box16.display();

    fill(214, 170, 255)
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill(254, 202, 248)
    box22.display();
    box23.display();
    box24.display();
    fill(174, 232, 254)
    box25.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
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
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    elastic.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body,{x:200,y:400});
		elastic.attach(polygon.body);
	}
}