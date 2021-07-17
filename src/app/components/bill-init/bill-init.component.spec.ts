import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInitComponent } from './bill-init.component';

describe('BillInitComponent', () => {
  let component: BillInitComponent;
  let fixture: ComponentFixture<BillInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
