import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponents } from './pipe-components';

describe('PipeComponents', () => {
  let component: PipeComponents;
  let fixture: ComponentFixture<PipeComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
