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

  

});
