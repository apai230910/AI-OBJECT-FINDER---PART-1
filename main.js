object_status = "";

object_to_find = "";

function setup() {

 canvas = createCanvas( 480 , 380);

 canvas.center();

 video = createCapture(VIDEO);

 video.hide();

}

function start() {

 objectDetector =  ml5.objectDetector( "cocossd" , modalLoaded);

 document.getElementById("status").innerHTML = " Status : Detecting Objects";

 object_to_find = document.getElementById("input").value;

}

function modalLoaded() {

 console.log("Modal Loaded");

 object_status = true;

}

function draw() {

 image( video , 0 , 0 , 480 , 380 );

}