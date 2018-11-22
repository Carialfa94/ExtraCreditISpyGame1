var masterItemsList = ["Grapes" ,"Shell" ,"Skull with gold teeth" ,"Rooster"  ,"Hook"  ,"Chile","Clover"];
var currentRoundItemsList = [];
var found = [false, false, false, false, false];
var randomNum;
var duplicateItem;
var j;

//---------- PICKS 5 RANDOM ITEMS FROM THE MASTER LIST ----------
for (i = 0; i < 4 ; i++) {
  do {
    randomNum = Math.floor(Math.random()*masterItemsList.length);
    j = 0;
    duplicateItem = false;
    do {
      if (masterItemsList [randomNum] === currentRoundItemsList [j])
        duplicateItem = true;
      else
        j++;
    } while (j <= i && !duplicateItem);
  } while (duplicateItem);
  currentRoundItemsList [i] = masterItemsList [randomNum];
  document.getElementById("item" + i).innerHTML = currentRoundItemsList [i];
}

document.getElementById(currentRoundItemsList [0]).addEventListener("click", function(){
  foundItem (currentRoundItemsList [0],0);
}, false);
document.getElementById(currentRoundItemsList [1]).addEventListener("click", function(){
  foundItem (currentRoundItemsList [1],1);
}, false);
document.getElementById(currentRoundItemsList [2]).addEventListener("click", function(){
  foundItem (currentRoundItemsList [2],2);
}, false);
document.getElementById(currentRoundItemsList [3]).addEventListener("click", function(){
  foundItem (currentRoundItemsList [3],3);
}, false);


function foundItem (tempItem,i) {
  document.getElementById("item" + i).style.textDecoration="line-through";
  found [i] = true;
  if (found [0] && found [1] && found [2] && found [3]) {
    var playAgain = confirm("You won!  Would you like to play again?\nPress OK to play again or cancel if you're done playing.");
    if (playAgain)
      location.reload();
    else
      return;
  }
}
