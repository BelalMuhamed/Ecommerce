import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedGaurdGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
 const  _PlatFromId = inject (PLATFORM_ID)
  if(isPlatformBrowser(_PlatFromId))
  {
  if(localStorage.getItem('token') != null) 
  {
    _Router.navigate(['/home']);
     return false;
  }
  else
  {
   
     return true;
  }
}
else  
{
  return false;
}
};
