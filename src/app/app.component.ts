//This line imports the Component decorator from the @angular/core module. 
//The Component decorator is used to define Angular components.
import { Component } from '@angular/core';
//This line imports the GameService class from the game.service file. 
//This service is responsible for managing the game's state and logic.
import { GameService } from './game.service';


//This line begins the definition of the AppComponent class using the Component decorator.
@Component({
  //This line defines the HTML selector for this component. 
  //In this case, the component will be selected using the app-root tag in the HTML.
  selector: 'app-root',
  //This line specifies the external HTML template file for this component. 
  //The template defines the structure and layout of the component's view.
  templateUrl: './app.component.html',
  //This line specifies an array of external CSS stylesheet files for this component. 
  //The stylesheets define the visual styling of the component's view.
  styleUrls: ['./app.component.css']
})


//This line begins the definition of the AppComponent class.
export class AppComponent {
  //This line initializes the title property with the value 'tic-tac-game'.
  // This property can be used within the template to display the title.
  title = 'tic-tac-game';
  constructor (public gameSerice: GameService) {}

    //This is the constructor of the AppComponent class.
//It takes an argument of type GameService which is automatically injected by Angular's dependency injection.
//This allows the component to have access to the GameService instance.
  resetGame() {
    this.gameSerice.newGame();
  }

}
