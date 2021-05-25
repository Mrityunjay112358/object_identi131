
var img="";
var status  = "";
object = [];
function preload(){
img= loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(250,130);
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
image(img,0,0,600,600);
if(status != ""){

    for(i=0; i<object.length; i++){

document.getElementById("status").innerHTML = "Status: Objects Detected";
fill("red");
percent = floor(object[i].confidence * 100);

text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("red");
rect(object[i].x,object[i].y,object[i].width,object[i].height);





        /*
fill("pink");
text("Dog",130,70);
noFill();
stroke("maroon");
strokeWeight(5);
rect(100,50,250,500);
fill("yellow");
text("Cat",310,100);
noFill();
stroke("green");
rect(280,80,250,500);
*/
    }
}
}

function modelLoaded(){
    console.log("cocossd is loaded");
status = "true";
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}