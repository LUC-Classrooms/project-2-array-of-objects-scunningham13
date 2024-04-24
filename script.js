/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var fly, fly2
var dragonflies =new Array(10);
function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  fly = new Dragonfly (width/2, height/2);
  fly2 = new Dragonfly(width/4, height/2);
  for(let i=0;i<dragonflies.length; i++){ 
    dragonflies[i]=new Dragonfly(random(width),random(height))
  }
}

function draw(){
  background(200); //light gray background
  //fly.display()
  fly.move()
  //fly2.display()
  fly2.move()
  for(let i=0;i<dragonflies.length; i++){ 
    dragonflies[i].display()
    dragonflies[i].move()
  }
}

function Dragonfly(_x,_y) { 
  this.x = _x
  this.y = _y
  this.a = 0;
  this.xSpeed = random(-2,2);
  this.ySpeed = random(-2,2);
  
  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x<0 || this.x>width){
      this.xSpeed *= -1;
    }
    if(this.y<0 || this.y>height){
      this.ySpeed *= -1;
    }
  }

  this.display = function (){
    push ();
    translate (this.x, this.y);
    rotate(this.a);
    // add your image drawing code here
    fill (250, 0, 250);
    ellipse (0, 0, 35, 165);
    fill (120, 150, 250);
    ellipse (-90, -25, 150, 30); // wings
    ellipse (90, -25, 150, 30);
    ellipse (-90, 5, 150, 30);
    ellipse (90, 5, 150, 30);
    line (0, -83, -15, -125); // antennas 
    line (0, -82, 15, -125);
    ellipse(-15, -125, 8, 8);
    ellipse(15, -125, 8, 8);
    fill (0); // eyes
    ellipse (-5, -50, 3, 3);
    ellipse (5, -50, 3, 3);
    pop ();
  }
}
