import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from './Interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
private readonly httpclient =inject(HttpClient)
  constructor() { }
  SendRegisterData(data :object):Observable<RegisterResponse>
  {
   return this.httpclient.post<RegisterResponse>('https://ecommerce.routemisr.com/api/v1/auth/signup',data);
  }
}
