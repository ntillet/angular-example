import { TestBed, inject } from '@angular/core/testing';

import { UsersHttpService } from './users-http.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersHttpService]
    });
  });

  it('should be created', inject([UsersHttpService], (service: UsersHttpService) => {
    expect(service).toBeTruthy();
  }));
});
