import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuduenoComponent } from './menudueno.component';

describe('MenuduenoComponent', () => {
  let component: MenuduenoComponent;
  let fixture: ComponentFixture<MenuduenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuduenoComponent]
    });
    fixture = TestBed.createComponent(MenuduenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
