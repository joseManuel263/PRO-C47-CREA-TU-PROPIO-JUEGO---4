class Form {

  constructor() {
        this.title = createElement('h1');
        //this.buttonPlay = createButton('Play');
        this.buttonPlayer1 = createButton('Jugador 1  ٩(˘◡˘)۶');
        this.buttonPlayer2 = createButton('Jugador 2  ≧◠‿◠≦✌');
        this.buttonPlayer3 = createButton('Jugador 3  (͠≖ ͜ʖ͠≖)👌');
        this.buttonPlayer4 = createButton('Jugador 4  ☜(ˆ▿ˆc)');

        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.greeting3 = createElement('h2');
        this.greeting4 = createElement('h2');
    //this.buttonReset = createButton('Reset');    
  };
  
  
  hide(){
    this.buttonPlayer1.hide();
    this.buttonPlayer2.hide();
    this.buttonPlayer3.hide();
    this.buttonPlayer4.hide();

  }

  hideGreeting(){
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.greeting4.hide();
  }

  display(){
        this.title.html('FLAPPY BIRD');
        this.title.position(displayWidth/2-90, displayHeight/2-200);

        //this.buttonPlay.class("Button");
        this.buttonPlayer1.class("Button");
        this.buttonPlayer2.class("Button");
        this.buttonPlayer3.class("Button");
        this.buttonPlayer4.class("Button");
        this.title.class("titles");

        //this.buttonPlay.position(displayWidth/2, displayHeight/2-100);
        this.buttonPlayer1.position(displayWidth/2-55, displayHeight/2-60);
        this.buttonPlayer2.position(displayWidth/2-55, displayHeight/2-20);
        this.buttonPlayer3.position(displayWidth/2-55, displayHeight/2+20);
        this.buttonPlayer4.position(displayWidth/2-55, displayHeight/2+60);

        this.buttonPlayer1.mousePressed(()=>{
          this.hide();
          playerCount1 += 1;
          player.update();
          player.updateCount(playerCount1);
          this.greeting1.html("HOLA: JUGADOR 1   (^◡^ )");
          this.greeting1.position(displayWidth/2-55, displayHeight/2-60);
        });

        this.buttonPlayer2.mousePressed(()=>{
          this.hide();
          playerCount1 += 1;
          player.update();
          player.updateCount(playerCount1);
          this.greeting2.html("HOLA: JUGADOR 2   ( ͡~ ͜ʖ ͡°)");
          this.greeting2.position(displayWidth/2-55, displayHeight/2-60);
          
        });

        this.buttonPlayer3.mousePressed(()=>{
          this.hide();
          playerCount1 += 1;
          player.update();
          player.updateCount(playerCount1);
          this.greeting3.html("HOLA: JUGADOR 3   【 ͡❛ ͜ʖ ͡❛】");
          this.greeting3.position(displayWidth/2-55, displayHeight/2-60);
          
        });

        this.buttonPlayer4.mousePressed(()=>{
          this.hide();
          playerCount1 += 1;
          player.update();
          player.updateCount(playerCount1);
          this.greeting4.html("HOLA: JUGADOR 4   ( ͡◔ ‿ ͡◔)");
          this.greeting4.position(displayWidth/2-55, displayHeight/2-60);
          
        });
      };
};
