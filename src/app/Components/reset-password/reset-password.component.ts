import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResetPasswordService } from '../../Core/Servicess/reset-password.service';
import { LoginservisesService } from '../../Core/services/RegisterService/loginservises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnDestroy {
  stepNumber:number = 1;
  email:string = '';
  private readonly _resetPasswordService = inject(ResetPasswordService);
  private readonly _loginService = inject(LoginservisesService);
  private readonly _router = inject(Router);
  private _unsbscribeSendEmail : Subscription;
  private _unsbscribeSendCode : Subscription;
  private _unsbscribeResetPassword : Subscription;

  isloading :boolean = false;
  msgerror:string = '';
  _formBuilder=inject(FormBuilder);
  VerifyEmail:FormGroup = this._formBuilder.group(
    {
        email:[null,[Validators.required,Validators.email]],
        
    });
  VerifyCode:FormGroup = this._formBuilder.group(
      {
        resetCode:[null,[Validators.required,Validators.pattern(/^\d{6}$/)]],
          
    });
  UpdatePassword:FormGroup = this._formBuilder.group(
        {
          email:[null,[Validators.required,Validators.email]],
          newPassword:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
            
    });

  SubmitVerifyEmail():void
  {
  
    if(this.VerifyEmail.valid)
    {
      this.isloading = true;
      this._unsbscribeSendEmail =this._resetPasswordService.SubmitVerifyEmail(this.VerifyEmail.value).subscribe({
        next:(res)=>
        {
          this.isloading = false;
          if(res.statusMsg=='success')
          {
            this.email = this.VerifyEmail.get('email')?.value;
            this.UpdatePassword.get('email')?.patchValue(this.email);
            this.msgerror = '';
           
            this.stepNumber = 2;
          }
        
        },
        error:(err)=>
        {
          this.isloading = false;
          this.msgerror = err.error.message;
        }
      })
    }
  }

  SubmitVerifyCode():void
  {
    if(this.VerifyCode.valid)
    {
      this.isloading = true;
      this._unsbscribeSendCode=this._resetPasswordService.SubmitVrifyCode(this.VerifyCode.value).subscribe({
        next:(res)=>
        {
          this.isloading = false;
          console.log(res);
          if(res.status=='Success')
          {
            this.msgerror = '';
            this.stepNumber = 3;
          }
        
        },
        error:(err)=>
        {
          this.isloading = false;
          this.msgerror = err.error.message;
        }
      })
    }
  }

  SubmitUpdatePassword():void
  {
    if(this.UpdatePassword.valid)
    {
      this.isloading = true;
      this._unsbscribeResetPassword=this._resetPasswordService.SubmitNewPassword(this.UpdatePassword.value).subscribe({
        next:(res)=>
        {
          this.isloading = false;
          console.log(res);
            this.msgerror = '';
            localStorage.setItem('token',res.token);
            this._loginService.DecodeToken();
            this._router.navigate(['/home']);
           
         
        
        },
        error:(err)=>
        {
          this.isloading = false;
          this.msgerror = err.error.message;
        }
      })
    }
    
  }
  ngOnDestroy(): void {
    this._unsbscribeSendEmail?.unsubscribe();
    this._unsbscribeSendCode?.unsubscribe();
    this._unsbscribeResetPassword?.unsubscribe();
  }
}
