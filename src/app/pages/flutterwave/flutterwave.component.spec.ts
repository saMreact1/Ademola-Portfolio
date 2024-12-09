import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterwaveComponent } from './flutterwave.component';

describe('FlutterwaveComponent', () => {
  let component: FlutterwaveComponent;
  let fixture: ComponentFixture<FlutterwaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlutterwaveComponent]
    });
    fixture = TestBed.createComponent(FlutterwaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
