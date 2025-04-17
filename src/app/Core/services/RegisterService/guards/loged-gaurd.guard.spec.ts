import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logedGaurdGuard } from './loged-gaurd.guard';

describe('logedGaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logedGaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
