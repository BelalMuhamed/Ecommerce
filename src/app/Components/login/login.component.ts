import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { LoginservisesService } from '../../Core/services/RegisterService/loginservises.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  _formBuilder=inject(FormBuilder);
  _loginServices = inject(LoginservisesService);
  _router=inject(Router);
  msgerror:string='';
 isloading:boolean=false;
Loginform:FormGroup = this._formBuilder.group(
  {
   
      email:[null,[Validators.required,Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.required]]
   
      
  });
  OnSubmitLogin():void
  {
    if(this.Loginform.valid)
    {
      this.isloading=true;
      this.msgerror='';
      this._loginServices.SendLoginData(this.Loginform.value).subscribe(
        {
          next:(ref)=>
            {
           
            this.isloading=false;
            if(ref.message =='success' )
            {
                localStorage.setItem('token',ref.token);
                console.log("Token",ref.token);
                this._loginServices.DecodeToken();
                console.log("Tooken",this._loginServices.token);
                this._router.navigate(['/home'])
             
            }
          },
          error:(err:HttpErrorResponse)=>{
            this.msgerror=err.error.message
            ;
            this.isloading=false;
            console.log(err);
          }
        }
      )
    }
    else
    {
      this.Loginform.markAllAsTouched();
    }
  }
}
