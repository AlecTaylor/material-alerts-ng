import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComp1Component } from './some-comp1.component';

describe('SomeComp1Component', () => {
  let component: SomeComp1Component;
  let fixture: ComponentFixture<SomeComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
