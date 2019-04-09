import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TawbinViewComponent } from './tawbin-view.component';

describe('TawbinViewComponent', () => {
  let component: TawbinViewComponent;
  let fixture: ComponentFixture<TawbinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TawbinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TawbinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
