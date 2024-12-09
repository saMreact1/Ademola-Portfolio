import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendappComponent } from './sendapp.component';

describe('SendappComponent', () => {
  let component: SendappComponent;
  let fixture: ComponentFixture<SendappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendappComponent]
    });
    fixture = TestBed.createComponent(SendappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
