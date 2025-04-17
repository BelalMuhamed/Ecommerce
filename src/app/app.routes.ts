import { ProductComponent } from './Components/product/product.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthLayoutComponent } from './LayOuts/auth-layout/auth-layout.component';
import { BlankLauoutComponent } from './LayOuts/blank-lauout/blank-lauout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { logedGaurdGuard } from './Core/services/RegisterService/guards/loged-gaurd.guard';
import { authGaurdGuard } from './Core/services/RegisterService/guards/auth-gaurd.guard';

export const routes: Routes = 
[
    {path:"",component:AuthLayoutComponent,title:'auth',canActivate:[logedGaurdGuard],
    children:
    [
        {path:"",redirectTo:'login',pathMatch:'full'},
        {path:"login",component:LoginComponent,title:'login'},
        {path:"register",component:RegisterComponent,title:'register'},

    ]
    },
    {path:"",component:BlankLauoutComponent,title:'blank',canActivate:[authGaurdGuard],children:
        [
            {path:"",redirectTo:'home',pathMatch:'full'},
            {path:"home",component:HomeComponent,title:'home'},
            {path:"product",component:ProductComponent,title:'product'},
            {path:"cart",component:CartComponent,title:'cart'},
            {path:"categories",component:CategoriesComponent,title:'categories'},
            {path:"brands",component:BrandsComponent,title:'brands'}
        ]},
    {path:"**",component:NotFoundComponent}

];
