import { TestBed } from '@angular/core/testing';

import { RandomRecipeService } from './random-recipe.service';

describe('RandomRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomRecipeService = TestBed.get(RandomRecipeService);
    expect(service).toBeTruthy();
  });
});
