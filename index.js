const prompt = require('prompt');
prompt.start();

// Board
var Board = function() {
  return {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
  }
};


// Print board
var printBoard = function() {
  console.log(
    '|' + board[1] + '|' + board[2] + '|' + board[3] + '|' + '\n' +
    '|' + board[3] + '|' + board[4] + '|' + board[5] + '|' + '\n' +
    '|' + board[7] + '|' + board[8] + '|' + board[9] + '|' + '\n'
  );
};

// Win condition check
var winCondition = function() {
  let possibles = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
};

var fullBoard = function(board) {
  for (var prop in board) {
    
  }
}

var playGame = function() {
  var board = Board();
  var playerX = true;
  while (winCondition() === false) {
    printBoard();
    console.log("It is Player " + playerNum + "\'s turn.");
    var getMove = function() {
      prompt.get(['What space (1-9)?'], function(err, result) {
        if (err) { return err; }
        if (playerX) {
          board[result] = 'X';
        } else {
          board[result] = 'O';
        }
        if (!board[result]) {
          console.log('Please enter a move between 1-9');
          getMove();
        }
        if (board[result] !== ' ') {
          console.log('Space is already taken');
          getMove();
        }
      });
    };
  }
  getMove();
  
};



playGame();

