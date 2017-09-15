import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComp0Component } from './some-comp0.component';

describe('SomeComp0Component', () => {
  let component: SomeComp0Component;
  let fixture: ComponentFixture<SomeComp0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComp0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComp0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
