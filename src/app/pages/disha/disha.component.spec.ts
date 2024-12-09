import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishaComponent } from './disha.component';

describe('DishaComponent', () => {
  let component: DishaComponent;
  let fixture: ComponentFixture<DishaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishaComponent]
    });
    fixture = TestBed.createComponent(DishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
