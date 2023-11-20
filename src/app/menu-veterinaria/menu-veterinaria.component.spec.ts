import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVeterinariaComponent } from './menu-veterinaria.component';

describe('MenuVeterinariaComponent', () => {
  let component: MenuVeterinariaComponent;
  let fixture: ComponentFixture<MenuVeterinariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuVeterinariaComponent]
    });
    fixture = TestBed.createComponent(MenuVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
