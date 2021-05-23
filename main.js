
var img="";

function preload(){
img= loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
}

function draw(){
image(img,0,0,600,600);
fill("pink");
text("Dog",130,70);
noFill();
stroke("maroon");
strokeWeight(5);
rect(100,50,250,500);

}