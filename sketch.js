
var tom,tomImage,tomImg1,tomImg2;
var mouse,mouseImage,mouseImg1,mouseImg2;
var bg,bgImg

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    tomImage=loadImage("cat1.png");
    tomImg1=loadAnimation("cat2.png","cat3.png");
    tomImg2=loadAnimation("cat4.png");
    mouseImage=loadImage("mouse4.png");
    mouseImg1=loadAnimation("mouse2.png","mouse3.png");
    mouseImg2=loadAnimation("mouse1.png");

}

function setup(){
    createCanvas(1000,800);

    bg=createSprite(500,400,1000,800);
    bg.addImage(bgImg);


    //create tom and jerry sprites here
    tom=createSprite(820,605,50,50);
    tom.addImage(tomImage);
    tom.scale=0.1

    mouse=createSprite(100,600,50,50);
    mouse.addImage(mouseImage);
    mouse.scale=0.1;

    
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x-mouse.x<(tom.width-mouse.width)/2){
        tom.addAnimation("tomsitting",tomImg2);
        tom.changeAnimation("tomsitting");
        tom.velocityX=0; 

        mouse.addAnimation("mousehappy",mouseImg2);
        mouse.changeAnimation("mousehappy");


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg1);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 15;
  }

  if(keyCode===LEFT_ARROW){
      tom.addAnimation("tomRunning",tomImg1);
      tom.changeAnimation("tomRunning");
      tom.frameDelay = 15;
      tom.velocityX=-2;
  }

}
