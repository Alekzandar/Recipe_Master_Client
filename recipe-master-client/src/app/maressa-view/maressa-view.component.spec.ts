import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaressaViewComponent } from './maressa-view.component';

describe('MaressaViewComponent', () => {
  let component: MaressaViewComponent;
  let fixture: ComponentFixture<MaressaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaressaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaressaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
