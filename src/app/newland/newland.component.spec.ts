import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandComponent } from './newland.component';

describe('NewlandComponent', () => {
  let component: NewlandComponent;
  let fixture: ComponentFixture<NewlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewlandComponent]
    });
    fixture = TestBed.createComponent(NewlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
