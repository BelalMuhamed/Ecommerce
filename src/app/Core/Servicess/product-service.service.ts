import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../services/RegisterService/Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

 private readonly _HtpptClient = inject(HttpClient)
 GetAllProducts():Observable<any>{
  return this._HtpptClient.get("https://ecommerce.routemisr.com/api/v1/products");
 }
 GetSpecificProduct(_id:string | null):Observable<any>
 {
  return this._HtpptClient.get(`https://ecommerce.routemisr.com/api/v1/products/${_id}`);
 }
}
