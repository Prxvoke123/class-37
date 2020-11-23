class Game {
  constructor(){}

  //reading the gamestate from the database
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
//writing the gamestate from the database
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 //start screen  
  start(){
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
  }
//play screen
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
//once all the 4 players are logged in
    if(allPlayers !== undefined){
      var display_position = 130;
      //we are iterating through all the 4 players
      for(var plr in allPlayers){
      //the players logged in will be red in color and other players will be black
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        //playername : playerdistance
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
    //press up arrow to increase the distance by 50
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
