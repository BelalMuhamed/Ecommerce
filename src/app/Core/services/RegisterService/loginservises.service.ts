import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './Interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginservisesService {
token:string='';
private readonly _httpclient =inject(HttpClient)
private readonly _Router =inject(Router)

 
  SendLoginData(data :object):Observable<LoginResponse>
  {
   return this._httpclient.post<LoginResponse>('https://ecommerce.routemisr.com/api/v1/auth/signin',data);
  }
  DecodeToken():void
  {
    if(localStorage.getItem('token') != null) 
    {
      this.token=jwtDecode(localStorage.getItem('token')!);
    }
  }
  LogoOut():void
  {
    localStorage.removeItem('token');
    this.token='';

   this._Router.navigate(['/login']);
  }
}
