import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindingComponent } from './stylebinding.component';

describe('StylebindingComponent', () => {
  let component: StylebindingComponent;
  let fixture: ComponentFixture<StylebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylebindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
