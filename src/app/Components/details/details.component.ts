import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../Core/Servicess/product-service.service';
import { Subscription } from 'rxjs';
import { Product } from '../../Core/services/RegisterService/Interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit ,OnDestroy {
  customOptionsForCategorySlider: OwlOptions = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 6
        }
      },
      nav: false}
_ActiveRoute = inject(ActivatedRoute);
_productService = inject(ProductServiceService);
_UnSubscribeActiveRoute:Subscription;
productDetails:Product | null = null;
_unSubScribeProduct:Subscription;
ngOnInit(): void {
  this._UnSubscribeActiveRoute=this._ActiveRoute.paramMap.subscribe(
    {
     next:(p)=>
      {
        let _id = p.get('_id');
        this._unSubScribeProduct = this._productService.GetSpecificProduct(_id).subscribe({
          next:(res)=>{
            
            this.productDetails = res.data;
            
          },
          error:(err)=>{
            console.log(err);
          }
        })

        
      },
      error:(err)=>{
       console.log(err);
      }
    })
  }
  ngOnDestroy(): void {
    this._UnSubscribeActiveRoute?.unsubscribe();
    this._unSubScribeProduct?.unsubscribe();
  }
}


