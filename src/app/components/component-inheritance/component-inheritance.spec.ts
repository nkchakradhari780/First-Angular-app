import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInheritance } from './component-inheritance';

describe('ComponentInheritance', () => {
  let component: ComponentInheritance;
  let fixture: ComponentFixture<ComponentInheritance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInheritance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInheritance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
