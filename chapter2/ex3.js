var size = 8; //this is the variable setting

var board = ""; //this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {
  /*in the loop we add newline(\n) to seperate rows*/
  for (var x = 0; x < size; x++) {
    /*every one of these loops represents a line, and it's adding either ' ' or '#' to the string that's being added depending on the size of the board*/
    if ((x + y) % 2 == 0) board += " ";
    else board += "#";
  }
  board += "\n";
}

console.log(board);
