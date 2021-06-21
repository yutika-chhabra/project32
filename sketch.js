const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImage)
    background(backgroundImage);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 6 && hour <= 8){
        bg = "sunrise1.png";
    }
    else if(hour >= 9 && hour <= 11){
        bg = "sunrise2.png";
    }
    else if(hour >= 12 && hour <= 13){
        bg = "sunrise3.png";
    }
    else if(hour >= 14 && hour <= 15){
        bg = "sunrise4.png";
    }
    else if(hour === 16){
        bg = "sunrise5.png";
    }
    else if(hour === 17){
        bg = "sunrise6.png";
    }
    else if(hour === 17.5){
        bg = "sunset7.png";
    }
    else if(hour === 18){
        bg = "sunset8.png"
    }
    else if(hour === 18.5){
        bg = "sunset9.png";
    }
    else if(hour === 19){
        bg = "sunset10.png";
    }
    else if(hour >= 20 && hour <= 0){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImage = loadImage(bg);
    console.log(backgroundImage);
}
