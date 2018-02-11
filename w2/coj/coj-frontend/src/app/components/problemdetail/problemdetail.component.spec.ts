import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemdetailComponent } from './problemdetail.component';

describe('ProblemdetailComponent', () => {
  let component: ProblemdetailComponent;
  let fixture: ComponentFixture<ProblemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
