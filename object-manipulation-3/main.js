/*
Purpose: create a game that will decide the winner amongst various players
conditions: remove cards once drawn, count and declare winner at the end

make a new function with parameters array and handSize
make new var players and assign an empty array
make new var cards with all available cards  in the deck
create a for loop to make the objects for the players with properties: name, count, and an empty array for the hand
create a for loop to iterate through each player and assign them a hand
remove cards once they have been assigned to a player
create a for loop within the previous one to count the values of the cards
create:
if statement for the ace
if/else statement for face cards
if/else statement for every number card
once the loops are done, declare a new variable for the winner array so scores can be stored
use lodash function to store each player in descending order
update the value of the h1 element with the name of the winner (winner[0].name)
reset the value of the deck once done
*/

console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playButton = document.querySelector('#playButton');
playButton.addEventListener('click', buttonPress);

function buttonPress(event) {
  var playerArray = ['player 1', 'player 2', 'player 3', 'player 4', 'player 5'];
  var size = 4;
  runGame(playerArray, size);
}

function runGame(array, handSize) {
  var players = [];
  var cards = [{ rank: 'ace', suit: 'clubs' }, { rank: 'jack', suit: 'clubs' }, { rank: 'king', suit: 'clubs' }, { rank: 'queen', suit: 'clubs' }, { rank: 10, suit: 'clubs' }, { rank: 9, suit: 'clubs' }, { rank: 8, suit: 'clubs' }, { rank: 7, suit: 'clubs' }, { rank: 6, suit: 'clubs' }, { rank: 5, suit: 'clubs' }, { rank: 4, suit: 'clubs' }, { rank: 3, suit: 'clubs' }, { rank: 2, suit: 'clubs' }, { rank: 'ace', suit: 'diamonds' }, { rank: 'jack', suit: 'diamonds' }, { rank: 'king', suit: 'diamonds' }, { rank: 'queen', suit: 'diamonds' }, { rank: 10, suit: 'diamonds' }, { rank: 9, suit: 'diamonds' }, { rank: 8, suit: 'diamonds' }, { rank: 7, suit: 'diamonds' }, { rank: 6, suit: 'diamonds' }, { rank: 5, suit: 'diamonds' }, { rank: 4, suit: 'diamonds' }, { rank: 3, suit: 'diamonds' }, { rank: 2, suit: 'diamonds' }, { rank: 'ace', suit: 'hearts' }, { rank: 'jack', suit: 'hearts' }, { rank: 'king', suit: 'hearts' }, { rank: 'queen', suit: 'hearts' }, { rank: 10, suit: 'hearts' }, { rank: 9, suit: 'hearts' }, { rank: 8, suit: 'hearts' }, { rank: 7, suit: 'hearts' }, { rank: 6, suit: 'hearts' }, { rank: 5, suit: 'hearts' }, { rank: 4, suit: 'hearts' }, { rank: 3, suit: 'hearts' }, { rank: 2, suit: 'hearts' }, { rank: 'ace', suit: 'spades' }, { rank: 'jack', suit: 'spades' }, { rank: 'king', suit: 'spades' }, { rank: 'queen', suit: 'spades' }, { rank: 10, suit: 'spades' }, { rank: 9, suit: 'spades' }, { rank: 8, suit: 'spades' }, { rank: 7, suit: 'spades' }, { rank: 6, suit: 'spades' }, { rank: 5, suit: 'spades' }, { rank: 4, suit: 'spades' }, { rank: 3, suit: 'spades' }, { rank: 2, suit: 'spades' }];
  for (var j = 0; j < array.length; j++) {
    var newObj = {};
    newObj.name = array[j];
    newObj.count = 0;
    newObj.hand = [];
    players.push(newObj);
  }
  for (var i = 0; i < players.length; i++) {
    players[i].hand = _.sampleSize(cards, handSize);
    _.pullAll(cards, players[i].hand);
    console.log('cards', cards);
    for (var f = 0; f < players[i].hand.length; f++) {
      var playerHand = players[i].hand[f].rank;
      if (playerHand === 'ace') {
        players[i].count += 11;
      } else if (playerHand === 'jack' || playerHand === 'queen' || playerHand === 'king') {
        players[i].count += 10;
      } else {
        players[i].count += playerHand;
      }
    }
  }
  var winner = _.orderBy(players, ['count'], ['desc']);
  document.querySelector('#winnerP').textContent = 'Winner: ' + winner[0].name + '!';
}
