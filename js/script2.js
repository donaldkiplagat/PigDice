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
    var acquired2 = 0;
    var total2 = 0;
    var die1 = 0;
    var die2 = 0;
    $("#r2").click(function(){
      die1 = dice.roll();
      die2 = dice.roll();
      if(die1===1 || die2===1){
        die1 = 0;
        die2= 0;
        acquired2= 0;
        $("#h2").attr("disabled",true);
        $("#r2").attr("disabled",true);

        $("#h1").attr("disabled",false);
        $("#r1").attr("disabled",false);
        alert("You rolled a  1,game moves to player 1");
      }
      $("#die1").text(die1);
      $("#die2").text(die2);

      acquired2 += (die1+die2);
      $("#acquired2").text(acquired2);

    });
    $("#h2").click(function(){
      total2 += acquired2;
      $("#total2").text(total2);

      if(total2>=100){
        alert("Player 2 Wins!!");
      }else{
        die1 = 0;
        die2 = 0;
        acquired2 = 0;
        $("#die1").text(die1);
        $("#die2").text(die2);
        $("#acquired2").text(acquired2);

        $("#h2").attr("disabled",true);
        $("#r2").attr("disabled",true);

        $("#h1").attr("disabled",false);
        $("#r1").attr("disabled",false);

        alert("Player 1's turn");

      }
    });

});
