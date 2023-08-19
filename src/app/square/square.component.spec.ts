//This line imports ComponentFixture and TestBed modules from Angular's testing utilities.
import { ComponentFixture, TestBed } from '@angular/core/testing';
//This line imports the SquareComponent class from the square.component file, which is the component under test.
import { SquareComponent } from './square.component';


//This line defines a test suite named 'SquareComponent'. 
//Within this suite, tests related to the SquareComponent class will be written.
describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  //This line starts the beforeEach function, which is called before each individual test.
  beforeEach(() => {
    //This line creates a fixture for the SquareComponent using TestBed.createComponent()
    TestBed.configureTestingModule({
      declarations: [SquareComponent]
    });
    fixture = TestBed.createComponent(SquareComponent);
    //This line gets the component instance from the fixture and assigns it to the component variable.
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    //This line defines a test case using the it function. 
    //This test case checks whether the SquareComponent is created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
