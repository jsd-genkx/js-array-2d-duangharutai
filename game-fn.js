"use strict";

const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0;
let y = 0;
const moves = [];
moves.push(board[x][y]); // Start at A

// Define movement functions
function moveRight() {}

function moveLeft() {}

function moveUp() {}

function moveDown() {}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);


// solution01

// "use strict";
// const board = [
//   ["A", "B", "C"],
//   ["D", "E", "F"],
//   ["G", "H", "I"],
// ];
// let x = 0; // Starting row index
// let y = 0; // Starting column index
// const moves = [];
// moves.push(board[x][y]); // Start at A
// // Define movement functions
// // Move right (increase column index)
// function moveRight() {
//   y++; 
//   moves.push(board[x][y]);
// }
// // Move left (decrease column index)
// function moveLeft() {
//   y--; 
//   moves.push(board[x][y]);
// }
// // Move up (decrease row index)
// function moveUp() {
//   x--; 
//   moves.push(board[x][y]);
// }
// // Move down (increase row index)
// function moveDown() {
//   x++; 
//   moves.push(board[x][y]);
// }
// // Call the movement functions
// moveRight(); // Move from A to B
// moveRight(); // Move from B to C
// moveDown(); // Move from C to F
// moveLeft(); // Move from F to E
// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);

// solution02
// "use strict";
// const board = [
//     ["A", "B", "C"],
//     ["D", "E", "F"],
//     ["G", "H", "I"],
// ];
// let x = 0;
// let y = 0;
// const xMax = board.length - 1;
// const yMax = board[0].length -1;
// const moves = [];
// moves.push(board[x][y]); // Start at A

// // Define movement functions
// function moveRight() { 
//     y < yMax ? moves.push(board[x][++y]) : limitLog('moving right'); 
// }
// function moveLeft() { 
//     y > 0 ? moves.push(board[x][--y]) : limitLog('moving left'); 
// }
// function moveUp() { 
//     x > 0 ? moves.push(board[--x][y]) : limitLog('moving up'); 
// }

// function moveDown() { 
//     x < xMax ? moves.push(board[++x][y]) : limitLog('moving down'); 
// }

// function limitLog(moving) { 
//     console.log( `You have reached the limit of ${moving}.` ); 
// }
// // Call the movement functions
// moveRight(); // Move from A to B
// moveRight(); // Move from B to C
// moveDown(); // Move from C to F
// moveLeft(); // Move from F to E

// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);