import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
private readonly httpclient =inject(HttpClient)
  constructor() { }
  SendRegisterData(data :object)
  {
   return this.httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data);
  }
}
