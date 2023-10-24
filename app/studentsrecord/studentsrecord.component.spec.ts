import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsrecordComponent } from './studentsrecord.component';

describe('StudentsrecordComponent', () => {
  let component: StudentsrecordComponent;
  let fixture: ComponentFixture<StudentsrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsrecordComponent]
    });
    fixture = TestBed.createComponent(StudentsrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
