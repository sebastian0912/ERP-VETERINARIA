import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVeterinariaComponent } from './home-veterinaria.component';

describe('HomeVeterinariaComponent', () => {
  let component: HomeVeterinariaComponent;
  let fixture: ComponentFixture<HomeVeterinariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVeterinariaComponent]
    });
    fixture = TestBed.createComponent(HomeVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
