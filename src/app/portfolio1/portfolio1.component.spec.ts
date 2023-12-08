import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio1Component } from './portfolio1.component';

describe('Portfolio1Component', () => {
  let component: Portfolio1Component;
  let fixture: ComponentFixture<Portfolio1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Portfolio1Component]
    });
    fixture = TestBed.createComponent(Portfolio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
