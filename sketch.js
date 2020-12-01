const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions1,diivions2,divisions3,divisions4,divisions5divisions6;
var plinko1,plinko2,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17plinko18;
var plinko19,plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30,plinko31,pinko32,plinko33,plinko34,plinko35,plinko36,plinko37,plinko38;
var plinko39,plinko40,plinko41,plinko42,plinko43,plinko44,plinko45,plinko46,plinko47,plinko48,plinko49,plinko50,plinko51,plinko52,plinko53,plinko54,plinko55,plinko56;
var plinko57,plinko58,plinko59,plinko60,plinko61,plinko62,plinko63,plinko64,plinko65,plinko66,plinko67,plinko68,plinko69,pinko70,plinko71,plinko72,plinko73,plinko74,plinko75,plinko76;
var particles=[];

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
	world = engine.world;  
  ground=new Ground(240,780,700,20) 
  divisions1=new Divisions(5,620,20,300)
  divisions2=new Divisions(80,620,20,300)
  divisions3=new Divisions(160,620,20,300)
  divisions4=new Divisions(240,620,20,300)
  divisions5=new Divisions(320,620,20,300)
  divisions6=new Divisions(400,620,20,300)
  divisions7=new Divisions(473,620,20,300)

  plinko1=new Plinko(25,130,10);
  plinko2=new Plinko(50,130,10);
  plinko3=new Plinko(75,130,10);
  plinko4=new Plinko(100,130,10);
  plinko5=new Plinko(125,130,10);
  plinko6=new Plinko(150,130,10);
  plinko7=new Plinko(175,130,10);
  plinko8=new Plinko(200,130,10);
  plinko9=new Plinko(225,130,10);
  plinko10=new Plinko(250,130,10);
  plinko11=new Plinko(275,130,10);
  plinko12=new Plinko(300,130,10);
  plinko13=new Plinko(325,130,10);
  plinko14=new Plinko(350,130,10);
  plinko15=new Plinko(375,130,10);
  plinko16=new Plinko(400,130,10);
  plinko17=new Plinko(425,130,10);
  plinko18=new Plinko(450,130,10);
  plinko19=new Plinko(10,180,10);
  plinko20=new Plinko(37,180,10);
  plinko21=new Plinko(64,180,10);
  plinko22=new Plinko(91,180,10);
  plinko23=new Plinko(118,180,10);
  plinko24=new Plinko(145,180,10);
  plinko25=new Plinko(172,180,10);
  plinko26=new Plinko(199,180,10);
  plinko27=new Plinko(225,180,10);
  plinko28=new Plinko(250,180,10);
  plinko29=new Plinko(275,180,10);
  plinko30=new Plinko(300,180,10);
  plinko31=new Plinko(325,180,10);
  plinko32=new Plinko(350,180,10);
  plinko33=new Plinko(375,180,10);
  plinko34=new Plinko(400,180,10);
  plinko35=new Plinko(425,180,10);
  plinko36=new Plinko(450,180,10);
  plinko37=new Plinko(475,180,10);
  plinko38=new Plinko(500,180,10);
  plinko39=new Plinko(25,230,10);
  plinko40=new Plinko(50,230,10);
  plinko41=new Plinko(75,230,10);
  plinko42=new Plinko(100,230,10);
  plinko43=new Plinko(125,230,10);
  plinko44=new Plinko(150,230,10);
  plinko45=new Plinko(175,230,10);
  plinko46=new Plinko(200,230,10);
  plinko47=new Plinko(225,230,10);
  plinko48=new Plinko(250,230,10);
  plinko49=new Plinko(275,230,10);
  plinko50=new Plinko(300,230,10);
  plinko51=new Plinko(325,230,10);
  plinko52=new Plinko(350,230,10);
  plinko53=new Plinko(375,230,10);
  plinko54=new Plinko(400,230,10);
  plinko55=new Plinko(425,230,10);
  plinko56=new Plinko(450,230,10);
  plinko57=new Plinko(10,280,10);
  plinko58=new Plinko(37,280,10);
  plinko59=new Plinko(64,280,10);
  plinko60=new Plinko(91,280,10);
  plinko61=new Plinko(118,280,10);
  plinko62=new Plinko(145,280,10);
  plinko63=new Plinko(172,280,10);
  plinko64=new Plinko(199,280,10);
  plinko65=new Plinko(225,280,10);
  plinko66=new Plinko(250,280,10);
  plinko67=new Plinko(275,280,10);
  plinko68=new Plinko(300,280,10);
  plinko69=new Plinko(325,280,10);
  plinko70=new Plinko(350,280,10);
  plinko71=new Plinko(375,280,10);
  plinko72=new Plinko(400,280,10);
  plinko73=new Plinko(425,280,10);
  plinko74=new Plinko(450,280,10);
  plinko75=new Plinko(475,280,10);
  plinko76=new Plinko(500,280,10);

  







  
}

function draw() {
  
  background("black");
  Engine.run(engine);
  Engine.update(engine);
  ground.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();
  divisions7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();
  plinko61.display();
  plinko62.display();
  plinko63.display();
  plinko64.display();
  plinko65.display();
  plinko66.display();
  plinko67.display();
  plinko68.display();
  plinko69.display();
  plinko70.display();
  plinko71.display();
  plinko72.display();
  plinko73.display();
  plinko74.display();
  plinko75.display();
  plinko76.display();

  if(frameCount%60===0){
    particles.push(new Particles(random(120,500),0,10) )
  }

for(var j =0;j<particles.lenghth;j++){
  particles[j].display();
}


}
