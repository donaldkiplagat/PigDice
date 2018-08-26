# Website Name: Pig Dice
A Website for playing a game called Pig Dice that has 3 variations to it. This is Week 4's Independent Project.
Date: 24th August 2018
By: Donald Kiplagat

## Description
This website contains variations for a game called pig dice whereby one plays around with probability by rolling a die (or dice) against another player in the race to see who'll reach 100 points first since the points received from the dice are tallied.

## Setup/Installation Requirements
* The github page is currently live thus the following link will take you to the webpage "https://donaldkiplagat.github.io/PigDice/"
* As long as you have a compatible browser the document will work.
* The following REadMe contains instructions needed for playing the game.

# Known Bugs
Currently no bug has been identified.

# Behaviour Driven Development
* When the button "Roll" is clicked a random number should be outputted representing the die value
Input Example:"roll"<br>
Output Example: 5

* When the button "Hold" is pressed the accummulated points should be tallied to the total score and turn changed to next player.<br>
Input Example: "Hold"<br>
Output Example: TotalScore += AccummulatedScore<br>

* If Die brings back 1 as the value then accummulated score is reversed to zero and turn changed to next player<br>
Input Example: 1<br>
Output Example: AccummulatedScore=0<br>

* Two Dice: If both dies bring back one then the player's entire score is lost and their turn ends <br>

Input Example 1: 1 <br>
Input Example 2: 1 <br>
Output Example: TotalScore =0<br>

* Two Dice: When the two dice are rolled and none brings back a 1 then the total value of dice is added to total score.
Input 1: 4<br>
Input 2: 5<br>
Output Example: AccummulatedScore= 9<br>

* Big Pig: If the two dice roll double 1's the player's turn ends and the player scores 25 points and eliminates any points the player may have accummulated that turn.
Input 1: 1<br>
Input 2: 2<br>
Output Example: 25<br>

* Big Pig: If the two dice roll any other doubles apart from 1 the player adds twice the value of the dice to the turn total.
Input 1: 5<br>
Input 2: 5<br>
Output Example: AccummulatedScore= (5+5)*2<br>

## Technologies Used
* HTML was used in making the skeleton of the website.
* CSS was used in styling the document.
* Javascript was used in making the back-end.
* jQuery was used in making the front-end
* Atom was the source code editor of choice.
* Git and Github were used as my local and online repositories respectively.

## Support and contact details
* Contact me through my email: donald.k.kiplagat@gmail.com
* The source code is also contained within the folder containing this ReadMe with comments on the code thus third-party support can be offered.

### License
Moringa School
License: MIT
Copyright (c)2018 **PigDice by Yours Truly-Donald Kiplagat**
  
