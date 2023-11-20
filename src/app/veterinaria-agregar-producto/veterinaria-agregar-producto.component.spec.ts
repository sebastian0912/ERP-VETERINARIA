import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaAgregarProductoComponent } from './veterinaria-agregar-producto.component';

describe('VeterinariaAgregarProductoComponent', () => {
  let component: VeterinariaAgregarProductoComponent;
  let fixture: ComponentFixture<VeterinariaAgregarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaAgregarProductoComponent]
    });
    fixture = TestBed.createComponent(VeterinariaAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
