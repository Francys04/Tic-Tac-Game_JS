//import { NgModule } from '@angular/core';: Imports the NgModule class from the @angular/core module. 
//NgModule is used to define Angular modules.
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';: Imports the BrowserModule 
//class from the @angular/platform-browser module. 
//This module provides essential services and directives required for browser rendering and applications.
import { BrowserModule } from '@angular/platform-browser';

//This line imports the AppRoutingModule module from a separate file called app-routing.module. 
//This module likely contains routing configuration for the application.
import { AppRoutingModule } from './app-routing.module';
//This line imports the AppComponent class from the app.component file. 
//AppComponent is typically the root component of the Angular application.
import { AppComponent } from './app.component';
//This line imports the SquareComponent class from the square/square.component file. 
//This component is likely responsible for rendering individual squares on the game board.
import { SquareComponent } from './square/square.component';
//This line imports the BoardComponent class from the board/board.component file. 
//This component is likely responsible for rendering the game board itself.
import { BoardComponent } from './board/board.component';

//@NgModule({ ... }): This decorator is used to define the metadata for the Angular module. 
//It configures various aspects of the module.
@NgModule({
  //declarations: [...]: This property is an array of components, directives, 
  //and pipes that belong to this module. In this case, it declares AppComponent, SquareComponent, and BoardComponent.
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  //imports: [...]: This property is an array of other modules that are imported and used within this module. 
  //Here, it imports BrowserModule and AppRoutingModule. 
  //The BrowserModule provides features required for browser rendering, and 
  //AppRoutingModule likely defines routes for the application.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [...]: This property is an array of services that are provided and can 
  //be injected throughout the module. There are no providers specified in this code.
  providers: [],
  //bootstrap: [...]: This property specifies the component that should be bootstrapped when the application starts. 
  //In this case, it's AppComponent, which is the root component of the application.
  bootstrap: [AppComponent]
})
//export class AppModule { }: This class represents the module itself. 
//The class name is AppModule, and it's exported to make it accessible to other parts of the application.
export class AppModule { }
