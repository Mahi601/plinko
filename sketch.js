var e= Matter.Engine
var w= Matter.World
var b= Matter.Bodies
var p1,p2,p3
var en,wo,a,score=0
var d
var g1
var div=[]
var p=[]
var pa=[]
function setup() {
  createCanvas(800,800);
en=e.create()
console.log(en)
wo=en.world
for(var i=50;i<750;i=i+40){
  p1=new plinko(i,200)
  p.push(p1)
}
for(var i=30;i<700;i=i+50){
  p2=new plinko(i,300)
  p.push(p2)
}
for( var i=0;i<800;i=i+50){
  d=new Divisions(i,700)
 div.push(d)
}
g1=new g(400,780)
}

function draw() {
  background("black"); 
  e.update(en)
 for (var i = 0; i< p.length; i++) {
p[i].display() 
}

// //if (frameCount%10===0){
//   a=new particle(random(50,750),0)
//   pa.push(a)
// }
// for(var i=0;i<pa.length;i++){
//   pa[i].display()
// }

for (let i = 0; i < div.length; i++) {
  div[i].display()
}

g1.gr()

if(a!=null){
  a.display()
  if(a.body.position.y>750)
{
  if(a.body.position.x<400){score=score+100;a=null}

  else if (a.body.position.x>400){score=score+400;a=null}
}  

}

textSize(50)
text(score,100,100)

  drawSprites();
}
 function mouseDragged(){
   a=new particle(mouseX,0)
 }
