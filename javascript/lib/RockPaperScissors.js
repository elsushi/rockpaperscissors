var pairs = {};
pairs['rock'] = 'scissors';
pairs["paper"] = "rock";
pairs["scissors"] = "paper";

function Player(name){
  this.name = name
}

Player.prototype.picks = function(pick){
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

};

  Game.prototype.winner = function() {
    if (this.samePick()){
      return null;
    }
    if (pairs[this.player1.pick] == this.player2.pick){
      return this.player1;
    }
    else {
      return this.player2;
    }
  };

  Game.prototype.samePick = function() {
    return this.player1.pick == this.player2.pick;
  }

  Game.prototype.result = function() {
    if (this.winner() == this.player1){
      return this.player1.name + " wins"
    }
    else if (this.winner() == this.player2){
      return this.player2.name + " win"
    }
    else {
      return "It's a draw"
    }
  };


