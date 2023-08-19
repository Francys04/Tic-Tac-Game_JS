
## Tic - Tac - Game

 This is a simple Tic-Tac-Toe game built using the Angular framework. It allows two players to take turns making moves on the game board until a player wins or the game ends in a draw.

### Table of Contents
- Introduction
- Features
- Installation
- Usage
- Game Mechanics
- Testing

### Introduction
- This project demonstrates the usage of Angular to create a dynamic web application. It showcases various Angular concepts, including components, services, data binding, and routing.

### Features
- Two-player gameplay: Players take turns making moves on the game board.
Real-time feedback: Displays the current player's turn and indicates the winner when the game ends.
- Reset functionality: Allows players to reset the game and start a new match.
### Installation
- Clone the repository using:
Copy code
git clone <https://github.com/Francys04/Tic-Tac-Game_JS>
Navigate to the project directory:

Copy code
`cd tic-tac-game`
- Start the development server:

Copy code
`ng serve`
- Open your web browser and navigate to http://localhost:4200/.
### Game Mechanics
1. app.component.html: This is the main template file for the root component (AppComponent). It displays the game's title, the active player's turn, the winner's announcement, and a reset button.

2. app.component.ts: This file contains the logic for the root component (AppComponent). It uses the GameService to manage the game state. The resetGame() method is used to reset the game when the reset button is clicked.

3. game.service.ts: This service (GameService) manages the game's state and logic. It includes properties such as the game board, active player, turn count, game running status, game over status, and winner status. It provides methods to handle player turns, update the game board, and check for a winner. The service handles both the game logic and the game state.

4. square.component.html: This template is used for rendering individual squares of the game board. Each square is represented by a div element with a click event handler that triggers the changePlayer() method.

5. square.component.ts: This is the component for individual squares of the game board (SquareComponent). It receives the square's state from the parent component and interacts with the GameService to handle player turns and game state.

6. board.component.html: This template is used to render the game board, consisting of multiple square components arranged in a grid.

7. board.component.ts: This is the component for the game board (BoardComponent). It interacts with the GameService to manage the game board state.

8. app-routing.module.ts: This module likely handles routing configuration, although it's empty in the code you provided.

9. app.module.ts: This module defines the Angular module metadata. It declares components (AppComponent, SquareComponent, BoardComponent), imports necessary modules (BrowserModule, AppRoutingModule), and specifies the root component (AppComponent).

10. unit tests: You've provided unit test cases for the AppComponent, SquareComponent, and BoardComponent. These tests are written using Angular's testing utilities and check whether the components are created successfully.

### Testing
- Unit tests are provided for the components using Angular's testing utilities. These tests ensure the proper functioning of each component and its interactions.

- To run tests:

Copy code
`ng test`


![Image Alt Text](Capture.jpg)

![Image Alt Text](Capture1.jpg)
