import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaConsultarMascotaComponent } from './veterinaria-consultar-mascota.component';

describe('VeterinariaConsultarMascotaComponent', () => {
  let component: VeterinariaConsultarMascotaComponent;
  let fixture: ComponentFixture<VeterinariaConsultarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaConsultarMascotaComponent]
    });
    fixture = TestBed.createComponent(VeterinariaConsultarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
