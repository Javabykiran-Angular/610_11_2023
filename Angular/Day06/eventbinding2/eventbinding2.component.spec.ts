import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbinding2Component } from './eventbinding2.component';

describe('Eventbinding2Component', () => {
  let component: Eventbinding2Component;
  let fixture: ComponentFixture<Eventbinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventbinding2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventbinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
