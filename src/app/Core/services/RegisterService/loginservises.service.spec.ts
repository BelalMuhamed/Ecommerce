import { TestBed } from '@angular/core/testing';

import { LoginservisesService } from './loginservises.service';

describe('LoginservisesService', () => {
  let service: LoginservisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginservisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
