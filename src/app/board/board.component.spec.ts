//This line imports ComponentFixture and TestBed modules from Angular's testing utilities.
import { ComponentFixture, TestBed } from '@angular/core/testing';
//This line imports the BoardComponent class from the board.component file, which is the component under test.
import { BoardComponent } from './board.component';


//This line defines a test suite named 'BoardComponent'. Within this suite,
// tests related to the BoardComponent class will be written.
describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

    //This line starts the beforeEach function, which is called before each individual test.
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    //This line defines a test case using the it function. This test case checks whether the BoardComponent is created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
