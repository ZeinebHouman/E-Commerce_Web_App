import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManComponent } from './delivery-man.component';

describe('DeliveryManComponent', () => {
  let component: DeliveryManComponent;
  let fixture: ComponentFixture<DeliveryManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
