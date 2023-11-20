import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoAgendarComponent } from './dueno-agendar.component';

describe('DuenoAgendarComponent', () => {
  let component: DuenoAgendarComponent;
  let fixture: ComponentFixture<DuenoAgendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuenoAgendarComponent]
    });
    fixture = TestBed.createComponent(DuenoAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
