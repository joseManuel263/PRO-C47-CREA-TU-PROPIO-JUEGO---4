class GameOver {
    constructor(){
        this.mensaje = createElement('h1');
        //this.buttonReset = createButton('Reset');
    }
//{}
    display(){
        this.mensaje.html("Game Over");
        this.mensaje.position(displayWidth/2.3,displayHeight/3-200);
      /*
        this.buttonReset.position(diaplayHeight-100, 20);
      
      this.buttonReset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
  
        Player.updateCarsAtEnd(0);


      })*/
    }
}