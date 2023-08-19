//This line imports the Component decorator and the OnInit interface from the @angular/core module.
// The Component decorator is used to define Angular components, and OnInit 
//is an interface that provides a lifecycle hook for component initialization.
import { Component, OnInit } from '@angular/core';
//This line imports the GameService class from a file called game.service. 
//The GameService likely provides functionality for managing the game state.
import { GameService } from '../game.service';

//This line begins the definition of the BoardComponent class using the @Component decorator.
@Component({
  //This line defines the selector for this component. In this case, it's 'app-board', 
  //which means you can use this component in an HTML file by using the <app-board></app-board> tag
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor( public gameSerice: GameService) {}
  //This is the ngOnInit lifecycle hook method. 
  //It is currently empty, meaning no specific initialization logic is implemented in this method.
  ngOnInit(): void {
      
  }
}
