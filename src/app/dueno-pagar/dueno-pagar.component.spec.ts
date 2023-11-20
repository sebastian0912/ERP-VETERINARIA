import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoPagarComponent } from './dueno-pagar.component';

describe('DuenoPagarComponent', () => {
  let component: DuenoPagarComponent;
  let fixture: ComponentFixture<DuenoPagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuenoPagarComponent]
    });
    fixture = TestBed.createComponent(DuenoPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
