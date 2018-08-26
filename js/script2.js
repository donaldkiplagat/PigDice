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
  var acquired1 = 0;
  var total1 = 0;
  var dice1 = 0;
  var dice2 = 0;
  $("#h2").attr("disabled",true);
  $("#r2").attr("disabled",true);

  $("#r1").click(function(){
    dice1 =dice.roll();
    dice2 =dice.roll();

    if(dice1===1 || dice2===1){
      dice1 = 0;
      dice2 = 0;
      acquired1 = 0;
      $("#h1").attr("disabled",true);
      $("#r1").attr("disabled",true);

      $("#h2").attr("disabled",false);
      $("#r2").attr("disabled",false);
      alert("You rolled a 1,game moves to player 2");

    }
    $("#dice1").text(dice1);
    $("#dice2").text(dice2);

    acquired1 += (dice1+dice2);
    $("#acquired1").text(acquired1);
  });
  $("#h1").click(function(){
    total1 += acquired1;

    $("#total1").text(total1);

    if(total1>=100){
      alert("Player 1 Wins!!")
    }else{
      dice1= 0;
      dice2= 0;
      acquired1= 0;
      $("#dice1").text(dice1);
      $("#dice2").text(dice2);
      $("#acquired1").text(acquired1);

      $("#h1").attr("disabled",true);
      $("#r1").attr("disabled",true);

      $("#h2").attr("disabled",false);
      $("#r2").attr("disabled",false);

      alert("Player 2's turn");
    }
  });

  //Scope for Player 2
    var acquiredscore2 = 0;
    var totalscore2 = 0;
    var dicevalue2 = 0;
    $("#roll2").click(function(){
      dicevalue2 = dice.roll();
      if(dicevalue2===1){
        dicevalue2= 0;
        acquiredscore2= 0;
        $("#hold2").attr("disabled",true);
        $("#roll2").attr("disabled",true);

        $("#hold1").attr("disabled",false);
        $("#roll1").attr("disabled",false);
        alert("The Dice landed on 1,game moves to player 1");
      }
      $("#dicevalue2").text(dicevalue2);

      acquiredscore2 += dicevalue2;
      $("#acquiredscore2").text(acquiredscore2);

    });
    $("#hold2").click(function(){
      totalscore2 += acquiredscore2;
      $("#totalscore2").text(totalscore2);

      if(totalscore2>=100){
        alert("Player 2 Wins!!");
      }else{
        dicevalue2 = 0;
        acquiredscore2 = 0;
        $("#dicevalue2").text(dicevalue2);
        $("#acquiredscore2").text(acquiredscore2);

        $("#hold2").attr("disabled",true);
        $("#roll2").attr("disabled",true);

        $("#hold1").attr("disabled",false);
        $("#roll1").attr("disabled",false);

        alert("Player 1's turn");

      }
    });

});
