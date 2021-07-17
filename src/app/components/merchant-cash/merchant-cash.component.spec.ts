import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCashComponent } from './merchant-cash.component';

describe('MerchantCashComponent', () => {
  let component: MerchantCashComponent;
  let fixture: ComponentFixture<MerchantCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
