let mainShip;
let mainShipImg;
let bg;
let ship;
let ship1;
let ship2;
let ship3;
let ship4;
let ship1Img;
let ship2Img;
let ship3Img;
let ship4Img; 
let hasDocked = false;
let box;
let PLAY = 1;
let END = 0;
let gameState = PLAY;

function preload(){
  bg = loadImage("images/spacebg.jpg");
  mainShipImg = loadImage("images/iss.png");
  ship1Img = loadImage("images/spacecraft1.png");
  ship2Img = loadImage("images/spacecraft2.png");
  ship3Img = loadImage("images/spacecraft3.png");
  ship4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,600);
  mainShip = createSprite(400, 280, 50, 50);
  mainShip.addImage("mainship",mainShipImg);
  ship = createSprite(330,425,50,50);
  ship.addImage("ship1",ship1Img);
  ship.addImage("ship2",ship2Img);
  ship.addImage("ship3",ship3Img);
  ship.addImage("ship4",ship4Img);
  ship.scale = 0.25;
  //ship.debug = true;
  ship.setCollider("rectangle",-10,-300,50,50);

  box = createSprite(333,315,10,10);
  box.visible = false;
}

function draw() {
  background(bg);
  
  drawSprites(); 

  if(gameState === PLAY){

    if(hasDocked){
      ship.x = random(320,340);
      ship.y = random(390,410);
      
    }
  
    if(keyDown("left")){
      ship.x = ship.x - 1;
      ship.changeImage("ship3",ship3Img);
    }
  
    if(keyDown("right")){
      ship.x = ship.x + 1;
      ship.changeImage("ship4",ship4Img);
    }
  
    if(keyDown("up")){
      ship.y = ship.y - 1;
      ship.changeImage("ship1",ship1Img);
    }
  
    if(keyDown("down")){
     // ship.y = ship.y + 1;
      ship.changeImage("ship2",ship2Img);
    }

    if(ship.isTouching(box)){
     gameState = END;
    }

  } else if(gameState === END){
    textSize(50);
    text("Docking Successful!",50,520);
  }
}