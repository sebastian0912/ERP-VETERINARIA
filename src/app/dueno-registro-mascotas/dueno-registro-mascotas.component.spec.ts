import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoRegistroMascotasComponent } from './dueno-registro-mascotas.component';

describe('DuenoRegistroMascotasComponent', () => {
  let component: DuenoRegistroMascotasComponent;
  let fixture: ComponentFixture<DuenoRegistroMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuenoRegistroMascotasComponent]
    });
    fixture = TestBed.createComponent(DuenoRegistroMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
