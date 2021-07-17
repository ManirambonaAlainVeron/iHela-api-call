import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillVerificationComponent } from './bill-verification.component';

describe('BillVerificationComponent', () => {
  let component: BillVerificationComponent;
  let fixture: ComponentFixture<BillVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
