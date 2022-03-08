var dino,dino_img;
var bordas;

function preload(){
  //pre carrega os arquivos do jogo
  
  dino_img = loadAnimation("trex3.png","trex4.png");


}

function setup(){
  createCanvas(600,200);


  //configurações do dino
  dino = createSprite(50,100,20,20);
  dino.addAnimation("correndo",dino_img);
  dino.scale = 0.5;

  bordas = createEdgeSprites();


}

function draw(){
  background('white');

  if(keyDown("space")){
    dino.velocityY = -10;
  }

  //gravidade
  dino.velocityY = dino.velocityY + 1;

  //colisao
  dino.collide(bordas);

 drawSprites();
}


