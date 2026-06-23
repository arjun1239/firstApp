import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { MatTableModule } from '@angular/material/table';
// giving the error and saying it must be imported in the at the component level 
import { EmployeeList } from './employee-list';



describe('EmployeeList', () => {
  let component: EmployeeList;
  let fixture: ComponentFixture<EmployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeList],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
