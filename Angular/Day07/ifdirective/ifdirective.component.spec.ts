import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirectiveComponent } from './ifdirective.component';

describe('IfdirectiveComponent', () => {
  let component: IfdirectiveComponent;
  let fixture: ComponentFixture<IfdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
