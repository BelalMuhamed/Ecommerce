import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { error, log } from 'console';
import { RegisterServiceService } from '../../Core/services/RegisterService/register-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,NgClass,RxReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 private readonly registerservice=inject(RegisterServiceService);
 _formBuilder=inject(FormBuilder);
_router=inject(Router);
 msgerror:string='';
 isloading:boolean=false;
  // registerform:FormGroup=new FormGroup(
  //   {
      
  //       name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
  //       email:new FormControl(null,[Validators.required,Validators.email]),
  //       password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  //       rePassword:new FormControl(null),
  //       phone:new FormControl(null,[Validators.pattern(/^01[0125][0-9]{8}$/)])
    
  //   }, this.ConfirmPassword
  // );
  registerform:FormGroup = this._formBuilder.group(
    {
      name: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
        rePassword:[null,RxwebValidators.compare({fieldName:'password' })],
        phone:[null,[Validators.pattern(/^01[0125][0-9]{8}$/)]]
    }
  )
  RegisterSubmit():void
  {
    
    if(this.registerform.valid)
    {
      this.isloading=true;
      this.msgerror='';
      this.registerservice.SendRegisterData(this.registerform.value).subscribe(
        {
          next:(ref)=>
            {
            console.log(ref);
            this.isloading=false;
            if(ref.message =='success' )
            {this._router.navigate(['/login'])}
          },
          error:(err:HttpErrorResponse)=>{
            this.msgerror=err.error.message
            ;
            this.isloading=false;
          }
        }
      )
    }
    else
    {
      this.registerform.markAllAsTouched();
    }
    
  }
  // ConfirmPassword(g:AbstractControl)
  // {
  //   if(g.get('password')?.value==g.get('rePassword')?.value)
  //   {return null;}
  //   return {mismatch:true};

  // }
}
