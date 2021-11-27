var canvas, bg, backgroundImage;

var gameState1 = 0;
var playerCount1 = 0;
var allPlayers = [];
var database;

var form, player, game, gameOver;

var bird, bird1, bird2, bird3;
var pipesA , pipesB, pipesAG, pipesBG;
function preload(){
  backgroundImage = loadImage("images/bg.png");
  birdImg = loadImage("images/bird1.png");
  pipesA_img = loadImage("images/tubo_B.png");
  pipesB_img = loadImage("images/tubo_A.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  bg = createSprite(displayWidth/4,displayHeight/2,displayWidth - 20, displayHeight-30);
  bg.addImage("bg",backgroundImage);
  pipesAG = new Group();
  pipesBG = new Group();
  //form = new Form();
  //form.display();
  gameOver = new GameOver();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  bg.velocityX = -3;
  if(bg.x < displayWidth/2.3){
    bg.x = displayWidth/2;
  }
  if(playerCount1 === 4){
    game.update(1);
  }
  if(gameState1 === 1){
    clear();
    game.play();
    
  }
  
  if(gameState1 === 2){
    game.end();
  }

}