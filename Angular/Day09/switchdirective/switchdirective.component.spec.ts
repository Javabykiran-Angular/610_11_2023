import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchdirectiveComponent } from './switchdirective.component';

describe('SwitchdirectiveComponent', () => {
  let component: SwitchdirectiveComponent;
  let fixture: ComponentFixture<SwitchdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
