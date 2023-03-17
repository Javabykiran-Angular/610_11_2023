import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpolarionComponent } from './stringinterpolarion.component';

describe('StringinterpolarionComponent', () => {
  let component: StringinterpolarionComponent;
  let fixture: ComponentFixture<StringinterpolarionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringinterpolarionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpolarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
