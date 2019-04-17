import { TestBed } from '@angular/core/testing';

import { UserRecipesService } from './user-recipes.service';

describe('UserRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRecipesService = TestBed.get(UserRecipesService);
    expect(service).toBeTruthy();
  });
});
