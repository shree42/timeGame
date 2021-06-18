const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

   
   

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);



    


    Engine.update(engine);

    // write code to display time in correct format here
    

}}

async function getBackgroundImg(){


    var response=  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json();
    var dateTime = responseJSON.datetime;
    
    var time=dateTime.slice(11,13);

    
    console.log(time);
    console.log(dateTime);



   


    // add conditions to change the background images from sunrise to sunset

    if(time>=4&&time<=6){
        bg="sunrise1.png";
    }else if(time>=6&&time<=08){
        bg="sunrise2.png";
    }else if(time>=23&&time==0){
        bg="sunset10.png";
    }else if(time==0&&time<=03){
        bg="sunset11.png";
    }else 
        bg="sunset12.png";





    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
