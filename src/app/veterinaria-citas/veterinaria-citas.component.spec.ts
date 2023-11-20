import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaCitasComponent } from './veterinaria-citas.component';

describe('VeterinariaCitasComponent', () => {
  let component: VeterinariaCitasComponent;
  let fixture: ComponentFixture<VeterinariaCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaCitasComponent]
    });
    fixture = TestBed.createComponent(VeterinariaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
