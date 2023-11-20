import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDuenoComponent } from './home-dueno.component';

describe('HomeDuenoComponent', () => {
  let component: HomeDuenoComponent;
  let fixture: ComponentFixture<HomeDuenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDuenoComponent]
    });
    fixture = TestBed.createComponent(HomeDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
