import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimetableWindowComponent } from './timetable-window.component';

describe('TimetableWindowComponent', () => {
  let component: TimetableWindowComponent;
  let fixture: ComponentFixture<TimetableWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimetableWindowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
