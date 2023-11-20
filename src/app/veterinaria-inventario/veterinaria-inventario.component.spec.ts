import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaInventarioComponent } from './veterinaria-inventario.component';

describe('VeterinariaInventarioComponent', () => {
  let component: VeterinariaInventarioComponent;
  let fixture: ComponentFixture<VeterinariaInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaInventarioComponent]
    });
    fixture = TestBed.createComponent(VeterinariaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
