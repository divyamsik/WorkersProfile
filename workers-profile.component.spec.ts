import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersProfileComponent } from './workers-profile.component';

describe('WorkersProfileComponent', () => {
  let component: WorkersProfileComponent;
  let fixture: ComponentFixture<WorkersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
