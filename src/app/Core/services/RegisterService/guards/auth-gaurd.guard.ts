import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _paltformId = inject(PLATFORM_ID);

  if(isPlatformBrowser(_paltformId))
  {
    if(localStorage.getItem('token') != null) 
      {
     
         return true;
      }
      else
      {
       _Router.navigate(['/login']);
         return false;
      }

  }
  else 
  {
    return  false;
  }
 
};
