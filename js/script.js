
//bussiness logic
$(document).ready(function() {
var cml1 = 0;
var cml2 = 0;
var final1 = 0;
var final2 = 0;
var round1 = 0;
var round2 = 0;
var spin1 = "";
var spin2 = "";
var score1 = 0;
var score2 = 0;
var diceRoll= "";
var diceRoll =function () { turn = Math.floor(Math.random() * 6) + 1;
return turn;
};

function Player(name,score) {
  this.name = name;
  this.score = score;
}
Player.prototype.myChamp = function (score, name) {
  if (score >= 100) {
  alert("Congratulations!!" + this.name + "You have won the game." );
}
else {

}
};
 var player1 = new Player(player1, score1);
 var player2 = new Player(player2, score2);
//user interface
$("button#spin1").click(function(){
  var spin1 = diceRoll();
  if (spin1 != 1) {
    player1.myChamp(score1, player1.name);
    $("#die1").text("DIE ROLL:" + spin1);
    score1 = parseInt(score1 + spin1);
    $("#cmlScore1").text("CUMMULATIVE SCORE:" + score1);
  }
  else {
cml1 = score1;
cml1 = 0;
final1 += cml1;
alert("You have rolled a 1. It's now Player 2's turn");
score1 = 0;
$("#fnlScore1").text("FINAL SCORE:" + final1);
  }
});

$("button#hold1").click(function() {
  cml1 = parseInt(score1);
  score1=0;
  alert("Player 1 has held his turn");
  final1 += cml1;
  $("#fnlScore1").text("FINAL SCORE:" + final1);
});

$("button#spin2").click(function(){
  var spin2 = diceRoll();
  if (spin2 != 1) {
    player1.myChamp(score2, player2.name);
    $("#die2").text("DIE ROLL:" + spin2);
    score2 = parseInt(score2 + spin2);
    $("#cmlScore2").text("CUMMULATIVE SCORE:" + score2);
  }
  else {
cml2 = score2;
cml2 = 0;
final2 += cml2;
alert("You have rolled a 1. It's now Player 2's turn");
score2 = 0;
$("#fnlScore2").text("FINAL SCORE:" + final2);
  }
});

$("button#hold2").click(function() {
  cml2 = parseInt(score2);
  score2=0;
  alert("Player 1 has held his turn");
  final2 += cml2;
  $("#fnlScore2").text("FINAL SCORE:" + final2);
});
});
