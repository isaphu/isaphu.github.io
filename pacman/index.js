const prompt = require("prompt-sync")({ sigint: true });

// class PacMan {
//     constructor() {
//       this.board = [
//         [" · ", " · ", " · "],
//         [" · ", " ○ ", " · "],
//         [" · ", " · ", " ⊙ "],
//       ];
//       this.currentPosition = [0, 0];
//       this.updateBoard2();
//     }

//     mvRight() {
//         if(this.currentPosition[0] + 1 < this.board[0].length) {
//           this.currentPosition[0]++;
//           this.updateBoard2();
//         }
//     }

//     mvLeft() {
//         if(this.currentPosition[0] -1 >= 0) {
//             this.currentPosition[0]--;
//             this.updateBoard2();
//         }
//     }

//     mvUp() {
//       if(this.currentPosition[1] -1 >= 0) {
//           this.currentPosition[1]--;
//           this.updateBoard2();
//       }
//     }

//     mvDown() {
//       if(this.currentPosition[1] + 1 < this.board[0].length)  {
//           this.currentPosition[1]++;
//           this.updateBoard2();
//       }
//     }

//     //position = [x,y] symbol = symbol update
//     updateBoard(position, symbol) {
//         const x = position[0];
//         const y = position[1];
//         this.board[y][x] = symbol;
//     }

//     updateBoard2() {
//         this.board = [
//           [" · ", " · ", " · "],
//           [" · ", " ○ ", " · "],
//           [" · ", " · ", " ⊙ "],
//         ]
//       const x = this.currentPosition[0];
//       const y = this.currentPosition[1];

//       if(this.board[y][x] === ' ⊙ ') {
//           throw Error('You are dead!')
//       }
//       this.board[y][x] = ' ᗧ ';
//   }

//     printBoard() {
//       console.log(this.board.map((y) => y.join("")).join("\n"));
//     }
//   }

//   const pacman = new PacMan();

//   while (true) {
//     const input = prompt("Which way (l,r,u,d)");
//     console.clear();
//     try {
//         switch (input) {
//           case "l":
//             pacman.mvLeft();
//             break;
//           case "r":
//             pacman.mvRight();
//             break;
//           case "u":
//             pacman.mvUp();
//             break;
//           case "d":
//             pacman.mvDown();
//             break;
//         }
//         pacman.printBoard()
//     } catch (e) {
//         console.log(e);
//         break;
//     }
//   }

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor() {
    this.grid = [
      [" ░ ", " ░ ", " O "],
      [" ░ ", " O ", " ░ "],
      [" ░ ", " ^ ", " ░ "],
    ];
    this.currentState = [0, 0];
    this.updateGrid();
  }

  goDown() {
    if (this.currentState[0] + 1 < this.grid[0].length) {
      this.currentState[0]++;
      this.updateGrid();
    }
  }

  goUp() {
    if (this.currentState[0] - 1 >= 0) {
      this.currentState[0]--;
      this.updateGrid();
    }
  }

  turnLeft() {
    if (this.currentState[1] - 1 >= 0) {
      this.currentState[1]--;
      this.updateGrid();
    }
  }

  turnRight() {
    if (this.currentState[1] + 1 < this.grid[0].length) {
      this.currentState[1]++;
      this.updateGrid();
    }
  }

  updateGrid() {
    this.grid = [
      [" ░ ", " ░ ", " O "],
      [" ░ ", " O ", " ░ "],
      [" ░ ", " ^ ", " ░ "],
    ];
    const verticalLine = this.currentState[0];
    const horizontalLine = this.currentState[1];

    if (this.grid[verticalLine][horizontalLine] === " ^ ") {
      throw Error("Congrats, you have found your hat!");
    } else if (this.grid[verticalLine][horizontalLine] === " O ") {
      throw Error("Sorry you are dead!");
    }
    this.grid[verticalLine][horizontalLine] = " * ";
  }

  printGrid() {
    console.log(this.grid.map((y) => y.join("")).join("\n"));
  }
}

const myNewGrid = new Field();

while (true) {
  const instruction = prompt(
    'You have lost your hat, navigate to your hat by using your keyboard, "l" to turn left, "r" to turn right, "u" to go up and "d" to go down. Press "p" to play!'
  );
  if (instruction) {
    const insert = prompt("Which way to move?");
    console.clear();
    try {
      switch (insert) {
        case "l":
          myNewGrid.turnLeft();
          break;
        case "r":
          myNewGrid.turnRight();
          break;
        case "u":
          myNewGrid.goUp();
          break;
        case "d":
          myNewGrid.goDown();
          break;
      }
      myNewGrid.printGrid();
    } catch (e) {
      console.log(e.message);
      break;
    }
  }
}
