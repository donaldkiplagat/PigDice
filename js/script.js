//Object defining the dice
var dice={
  sides: 6,
  roll: function(){
    var randomNumber= Math.floor(Math.random()*this.sides)+1;
    return randomNumber;
  }
}

$(document).ready(function(){
  //Scope for Player 1
  var acquiredscore1 = 0;
  var totalscore1 = 0;
  var dicevalue1 = 0;
  $("#hold2").attr("disabled",true);
  $("#roll2").attr("disabled",true);

  $("#roll1").click(function(){
    dicevalue1 =dice.roll();
    if(dicevalue1===1){
      dicevalue1 = 0;
      acquiredscore1 = 0;
      $("#hold1").attr("disabled",true);
      $("#roll1").attr("disabled",true);

      $("#hold2").attr("disabled",false);
      $("#roll1").attr("disabled",false);
      alert("The Dice landed on 1,game moves to player 2");

    }
    $("#dicevalue1").text(dicevalue1);

    acquiredscore1 += dicevalue1;
    $("#acquiredscore1").text(acquiredscore1);
  });



});
