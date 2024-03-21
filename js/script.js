let total = 300;
var r;
var factor = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  r = width/2 - 120;
}

function getVector(index)
{
  var angle = map(index % total,0,total,0,TWO_PI);
  let v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(0);
  
  
  factor += 0.01
  
  
  translate(width/2, height/2);
  stroke(255);
  noFill();
  ellipse(0,0,r*2);
  
  
  for(let i = 0; i < total; i++)
  {

    let v = getVector(i)
    fill(255);
    ellipse(v.x,v.y,16);
  }
  
  for(let i = 0; i < total; i++)
  {
    var a = getVector(i);
    var b = getVector(i * factor);
    colorMode(HSB);
    stroke(i,255,255);
    line(a.x,a.y,b.x,b.y); 
  }
  
  
}