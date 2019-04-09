import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleksandarViewComponent } from './aleksandar-view.component';

describe('AleksandarViewComponent', () => {
  let component: AleksandarViewComponent;
  let fixture: ComponentFixture<AleksandarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleksandarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleksandarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
