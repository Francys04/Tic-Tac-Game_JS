//This line imports the TestBed module, which provides utilities for configuring and creating testing modules and components.
import { TestBed } from '@angular/core/testing';
//This line imports the RouterTestingModule module from the Angular router's testing utilities. 
//This is necessary for testing components that use Angular's router.
import { RouterTestingModule } from '@angular/router/testing';
//This line imports the AppComponent class from the app.component file, which is the component under test.
import { AppComponent } from './app.component';


//This line defines a test suite named 'AppComponent'. Within this suite, tests related to the AppComponent class will be written.
describe('AppComponent', () => {
  //TestBed.configureTestingModule({ ... }) is used to configure the testing module. In this case, 
  //it's configuring the testing module with the RouterTestingModule and declaring the AppComponent for testing.
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  //This line defines a test case using the it function. This test case checks whether the app component is created successfully.
  it('should create the app', () => {
    //This line creates a fixture using TestBed.createComponent() for the AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    //This line gets the component instance from the fixture.
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tic-tac-game'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //This line uses Jasmine's expect function to compare the title property of the app instance with the expected value.
    expect(app.title).toEqual('tic-tac-game');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    //This line triggers change detection on the fixture. This is necessary to update the rendered content 
    //with the current component's data.
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    //This line uses Jasmine's expect function to check if the rendered content contains the expected text.
    expect(compiled.querySelector('.content span')?.textContent).toContain('tic-tac-game app is running!');
  });
});
