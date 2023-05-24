import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimePowerComponent } from './real-time-power.component';

describe('RealTimePowerComponent', () => {
  let component: RealTimePowerComponent;
  let fixture: ComponentFixture<RealTimePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimePowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
