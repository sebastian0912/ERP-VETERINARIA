import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoListarServiciosComponent } from './dueno-listar-servicios.component';

describe('DuenoListarServiciosComponent', () => {
  let component: DuenoListarServiciosComponent;
  let fixture: ComponentFixture<DuenoListarServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuenoListarServiciosComponent]
    });
    fixture = TestBed.createComponent(DuenoListarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
