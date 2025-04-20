import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

private readonly _httpclient = inject(HttpClient)
SubmitVerifyEmail(data:object):Observable<any>
{
  return this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data);
}
SubmitVrifyCode(data:object):Observable<any>
{
  return this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data);
}
SubmitNewPassword(data:object):Observable<any>
{
  return this._httpclient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data);

}
}
