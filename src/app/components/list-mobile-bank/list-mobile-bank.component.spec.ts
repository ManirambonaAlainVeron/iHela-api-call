import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobileBankComponent } from './list-mobile-bank.component';

describe('ListMobileBankComponent', () => {
  let component: ListMobileBankComponent;
  let fixture: ComponentFixture<ListMobileBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMobileBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobileBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
