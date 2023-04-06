import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollowerComponent } from './myfollower.component';

describe('MyfollowerComponent', () => {
  let component: MyfollowerComponent;
  let fixture: ComponentFixture<MyfollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
