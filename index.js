const prompt = require('prompt');
prompt.start();

// Board
var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};


// Print board
var printBoard = function() {
  var board = Board();
  console.log(
    '---------' + '\n' + 
    '|' + board[1] + '|' + board[2] + '|' + board[3] + '|' + '\n' +
    '---------' + '\n' + 
    '|' + board[3] + '|' + board[4] + '|' + board[5] + '|' + '\n' +
    '---------' + '\n' + 
    '|' + board[7] + '|' + board[8] + '|' + board[9] + '|' + '\n' +
    '---------'
  );
};


// Win condition check

