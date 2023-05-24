import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldThisMonthComponent } from './yield-this-month.component';

describe('YieldThisMonthComponent', () => {
  let component: YieldThisMonthComponent;
  let fixture: ComponentFixture<YieldThisMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldThisMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YieldThisMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
