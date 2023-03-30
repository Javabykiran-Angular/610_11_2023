import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbildpipeComponent } from './inbildpipe.component';

describe('InbildpipeComponent', () => {
  let component: InbildpipeComponent;
  let fixture: ComponentFixture<InbildpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbildpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbildpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
