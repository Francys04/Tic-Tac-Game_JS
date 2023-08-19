//This line imports the Component decorator from the @angular/core module, used for defining Angular components.
import { Component } from '@angular/core';
//This line imports the GameService class from a file named game.service. This service is used to manage the game state.
import { GameService } from '../game.service';
//This line imports the OnInit interface and the Input decorator from @angular/core.
//OnInit is used to implement a lifecycle hook method (ngOnInit) for component initialization.
//Input is used to decorate properties that will receive input values from parent components.
import { OnInit, Input } from '@angular/core';

//This line begins the definition of the SquareComponent class using the @Component decorato
@Component({
  //This line defines the selector for this component. In this case, it's 'app-square',
  // which means you can use this component in an HTML file with the <app-square></app-square> tag.
  selector: 'app-square',
  templateUrl: './square.component.html',
  //This line specifies the CSS styles associated with this component.
  // The styles defined here can be used to style the component's UI elements.
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  constructor( public gameSerice: GameService) {}

  //This line decorates the square property with the @Input decorator. 
  //This property is expected to receive input from a parent component.
  @Input() square: any;

  //This method is part of the OnInit lifecycle hook.
  //It is empty in this case and could be used for any initialization logic that should happen when the component is created.
  ngOnInit(): void{

  }

  changePlayer() {
    //It sets the isGameRunning property in the gameService to true to indicate that the game is active.
    this.gameSerice.isGameRunning = true;
    if(this.gameSerice.isGameRunning && this.square.state === null){
      this.square.state = this.gameSerice.activePlayer;
      this.gameSerice.changePlayerTurn(this.square);
    }
  }
}
