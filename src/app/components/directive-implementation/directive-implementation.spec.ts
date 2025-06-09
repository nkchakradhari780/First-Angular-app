import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveImplementation } from './directive-implementation';

describe('DirectiveImplementation', () => {
  let component: DirectiveImplementation;
  let fixture: ComponentFixture<DirectiveImplementation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveImplementation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveImplementation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
