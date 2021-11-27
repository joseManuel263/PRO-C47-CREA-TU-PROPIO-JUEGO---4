class Game {
  constructor(){
    this.gameOver = createElement('h2');
  }

  getState(){
    var gameState1Ref  = database.ref('gameState1');
    gameState1Ref.on("value",function(data){
       gameState1 = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState1: state
    });
  }

  async start(){
    if(gameState1 === 0){
      
      player = new Player();
      
      var playerCount1Ref = await database.ref('playerCount1').once("value");
      if(playerCount1Ref.exists()){
        playerCount1 = playerCount1Ref.val();
        
        player.getCount();
        
      }
      
      form = new Form()
      form.display();
    }
/*
    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
    */
   //bg = createSprite(displayWidth/2,0,displayWidth - 20, displayHeight-30);
   //bg.addImage("bg",backgroundImage);

   bird = createSprite(100,150);
   bird1 = createSprite(150,250);
   bird2 = createSprite(200,350);
   bird3 = createSprite(250,450);

   bird.addImage("bird",birdImg);
   bird1.addImage("bird",birdImg);
   bird2.addImage("bird",birdImg);
   bird3.addImage("bird",birdImg);

   bird.scale = 0.2;
   bird1.scale = 0.2;
   bird2.scale = 0.2;
   bird3.scale = 0.2;

   bird.shapeColor = "red";
   bird1.shapeColor = "green";
   bird2.shapeColor = "yellow";
   bird3.shapeColor = "blue";


  }

  play(){
    console.log("jugando =)")
  
    form.hideGreeting();
  
  
    //Player.getPlayerInfo();
    //player.getcarsAtEnd();

    
    //if(allPlayers !== undefined){
      

      
        background("white");
      
      //image(backgroundImage, 0, displayHeight, -displayWidth*4, displayHeight*5);
      if(keyIsDown(32)||keyIsDown(UP_ARROW)){
        bird.velocityY = -15;
        bird1.velocityY = -15;
        bird2.velocityY = -15;
        bird3.velocityY = -15;
      }
      
      bird.velocityY = bird.velocityY + 0.8;
      bird1.velocityY = bird1.velocityY + 0.8;
      bird2.velocityY = bird2.velocityY + 0.8;
      bird3.velocityY = bird3.velocityY + 0.8;
      
      if(frameCount % 100 === 0){
        pipesA = createSprite(displayWidth,displayHeight-300);
        pipesA.addImage("pipesA",pipesA_img);
        pipesA.velocityX = -3;
        pipesB = createSprite(displayWidth,displayHeight/2-150);
        pipesB.addImage("pipesB",pipesB_img);
        pipesB.velocityX = -3;
        pipesAG.add(pipesA);
        pipesBG.add(pipesB);
      }
      
      if(pipesAG.isTouching(bird)||pipesBG.isTouching(bird)||pipesAG.isTouching(bird1)||
      pipesBG.isTouching(bird1)||pipesAG.isTouching(bird2)||pipesBG.isTouching(bird2)||
      pipesAG.isTouching(bird3)||pipesBG.isTouching(bird3)){
        game.update(2);
        gameOver.display();
        //coneccion de update a base de datos, para cambiar el game state a cero
      }

      drawSprites();
  }

  end(){
    gameOver.display();
  }

      //image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
      //var display_position = 100;
      /*
      //index of the array
      var index = 1;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var i=0; i<5; i++){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        
        
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          fill("red");
          stroke(4)
          ellipse(x,y,90,90);
          
          //cars[index - 1].shapeColor = "red";
          //camera.position.x = displayWidth/2;
          
          //camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
/*
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>3560){
      gameState = 2;
      player.rank += 1;
      Player.updateCarsAtEnd(player.rank);
      gameOver = new GameOver();
      gameOver.display();
    }
      /*
      this.buttonReset.position(displayWidth-100, 20);

      this.buttonReset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        var playerInfoRef1 = database.ref('players1');
        playerInfoRef1.remove();
  
        Player.updateCarsAtEnd(0);


      })
      */
      /*
    }

    drawSprites();
  }
  end(){
    console.log("FIN del juego\n   (>‿◠)\n\n");
    //console.log("Lugar: "+player.rank+"\n👍( ͡❛ ͜ʖ ͡❛👍)\n")
    //text("FIN del juego\n   ✍(◔◡◔)",displayWidth/2,displayHeight/4);
    this.GameOver.html("FIN del juego   ✍(◔◡◔)");
    //this.Lugar.html("Lugar: "+player.rank+"    👍( ͡❛ ͜ʖ ͡❛👍)");
    this.GameOver.position(displayWidth/2 - 100, 0);
    //this.Lugar.position(displayWidth/2 -  100, 100);
    //game.update(2);
  }
  */
}
