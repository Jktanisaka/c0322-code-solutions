console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'Jon',
    hand: []
  },
  {
    name: 'John',
    hand: {}
  },
  {
    name: 'Jolene',
    hand: {}
  },
  {
    name: 'Joann',
    hand: {}
  }
];

var cards = [
  {
    rank: 'ace',
    suit: 'clubs'
  },
  {
    rank: 'jack',
    suit: 'clubs'
  },
  {
    rank: 'king',
    suit: 'clubs'
  },
  {
    rank: 'queen',
    suit: 'clubs'
  },
  {
    rank: '10',
    suit: 'clubs'
  },
  {
    rank: '9',
    suit: 'clubs'
  },
  {
    rank: '8',
    suit: 'clubs'
  },
  {
    rank: '7',
    suit: 'clubs'
  },
  {
    rank: '6',
    suit: 'clubs'
  },
  {
    rank: '5',
    suit: 'clubs'
  },
  {
    rank: '4',
    suit: 'clubs'
  },
  {
    rank: '3',
    suit: 'clubs'
  },
  {
    rank: '2',
    suit: 'clubs'
  }
];

for (var i = 0; i < players.length; i++) {
  players[i].hand = _.sampleSize(cards, 2);
  _.pullAll(cards, players[i].hand);
  console.log('players hand', players[i].hand);
}
console.log('cards', cards);
