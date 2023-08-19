import { Injectable } from '@angular/core';

//This is an Angular service, as indicated by the @Injectable decorator.
@Injectable({
  //The service is provided at the root level (providedIn: 'root'), making it a singleton instance accessible throughout the application.
  providedIn: 'root'
})
//The class has several properties that store information related to the game, 
//such as the game board, the active player ("X" or "O"), turn count, game state (running or over), and whether there is a winner.
export class GameService {

  public board: any = [];
  boardsize: number = 9;
  activePlayer: string = "X";
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() {
    this.newGame();
   }

   //The constructor initializes the game service by calling the newGame method, which resets all game-related properties and creates a new game board.
   //newGame(): Resets the game state and creates a new game board.
   newGame(){
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.winner = false;
    this.board = this.createBoard();

   }
   //createBoard(): Creates an empty game board consisting of 9 squares with unique IDs and null states.
   createBoard() {
    let board = [];
    for (let i = 0; i<9; i++){
      board.push({id:i, state: null});
    };
    return board;
   }
   //There is a getter (getBoard) for accessing the game board.
   get getBoard(){
    return this.board;
   };
   //There is a setter (setBoard) for setting the game board.
   set setBoard(board: any) {
    this.board = [... board];

   }

   //changePlayerTurn(squareClicked: any): Handles a player's turn by updating the game board and checking for a winner.
   changePlayerTurn(squareClicked: any) {
    this.updateBoard(squareClicked);
    if(!this.isGameOver) this.activePlayer = this.activePlayer === "X" ? "O" : "X"
    this.turnCount++;
    this.isGameOver = this.isGameOver ? true : false;
   };

   //updateBoard(squareClicked: any): Updates the game board with the current player's move and checks if there is a winner.
   updateBoard(squareClicked: any) {
    this.board[squareClicked.id].state = squareClicked.state;
    if(this.isWinner) {
      this.winner = true;
      this.isGameRunning = false;
      this.isGameOver = true;
    }
   };
   //gameOver: Returns true if the game is over (when there are no more turns left or there is a winner).
  get gameOver():boolean {
    return this.turnCount > 8 || this.winner ? true : false;
  };

  //isWinner: Checks for a win condition by calling checkDiag() and checkRows().
  get isWinner():boolean {
    return this.checkDiag() || this.checkRows(this.board, "rows") || this.checkRows(this.board, "col") ? true : false
  };

  //checkRows(board: any, mode: any): Checks for a win condition in rows or columns of the game board.
  checkRows (board: any, mode: any): boolean {
    const
      ROW = mode === "row" ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

      for ( let i = 0; i < NUMTIMES; i += INC){
        let
          firstSquare = board[i].state,
          secondSquare = board[i + DIST].state,
          thirdSquare = board[i + (DIST * 2)].state;

        if(firstSquare && secondSquare && thirdSquare) {
          if(firstSquare === secondSquare && secondSquare === thirdSquare) return true;
        }
      }
      return false;
  };

  //checkDiag(): Checks for a win condition in the diagonals of the game board.
  checkDiag(){
    const timesRun = 2,
      midSquare = this.board[4].state;

      for (let i = 0; i <= timesRun; i +=2) {
        let
          upperCorner = this.board[i].state,
          lowCorner = this.board[8 - i].state;

          if (midSquare && upperCorner && lowCorner) {
            if (midSquare === upperCorner && upperCorner === lowCorner) return true;
        }
      }
      return false;
  }

};

//Overall Functionality:

//This service manages the state of a Tic-Tac-Toe game, including player turns, 
//checking for wins, and determining if the game is over.
//It uses a simple data structure to represent the game board, where each 
//square has an ID and a state (either "X," "O," or null).
//The service seems to handle both the game logic and the game state, 
//making it a central component in the application.