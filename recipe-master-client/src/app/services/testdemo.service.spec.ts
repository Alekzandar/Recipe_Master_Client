import { TestBed } from '@angular/core/testing';

import { TestDemoService } from './testdemo.service';

describe('TestdemoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:  TestDemoService = TestBed.get( TestDemoService);
    expect(service).toBeTruthy();
  });
});
