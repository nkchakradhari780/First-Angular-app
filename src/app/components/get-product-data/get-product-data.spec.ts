import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductData } from './get-product-data';

describe('GetProductData', () => {
  let component: GetProductData;
  let fixture: ComponentFixture<GetProductData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProductData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProductData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
