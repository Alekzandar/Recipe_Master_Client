import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackyViewComponent } from './jacky-view.component';

describe('JackyViewComponent', () => {
  let component: JackyViewComponent;
  let fixture: ComponentFixture<JackyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
