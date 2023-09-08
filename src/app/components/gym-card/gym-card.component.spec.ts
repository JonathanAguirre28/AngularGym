import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCardComponent } from './gym-card.component';

describe('GymCardComponent', () => {
  let component: GymCardComponent;
  let fixture: ComponentFixture<GymCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymCardComponent]
    });
    fixture = TestBed.createComponent(GymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
