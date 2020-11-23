class Player {
  constructor(){
  //properties of the players
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
  //reading the playerCount from the database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

    //writing the playerCount to the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

//writing the name and distance travelled by the player to the database
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //reading the all the players information from the database
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
