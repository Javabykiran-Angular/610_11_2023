import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotdfComponent } from './demotdf.component';

describe('DemotdfComponent', () => {
  let component: DemotdfComponent;
  let fixture: ComponentFixture<DemotdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemotdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
