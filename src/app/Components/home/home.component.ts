import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../Core/Servicess/product-service.service';
import { Product } from '../../Core/services/RegisterService/Interfaces/iproduct';
import { NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../Core/Servicess/category.service';
import { category } from '../../Core/services/RegisterService/Interfaces/icategory';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NgStyle,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //custom option for the carousel
  // This is a custom option for the carousel that allows you to set the number of items to display at different screen sizes.
  customOptionsForCategorySlider: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
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
    customOptionsForMainSlider: OwlOptions = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      items: 1,
      nav: false}
private readonly _ProductServices = inject(ProductServiceService);
private readonly _categoryServices = inject(CategoryService);
_ProductServiceToUnSubscribe !:Subscription;
_CategoryServiceToUnSubscribe !:Subscription;
ProductList:Product[] = [];
CategoryList :category[] = [];
ngOnInit(): void {
 this._ProductServiceToUnSubscribe=this._ProductServices.GetAllProducts().subscribe({
  next: (res) => {
    
    this.ProductList = res.data;
  },
  error: (err) => {
    console.error(err);
  }
 });
 this._CategoryServiceToUnSubscribe=this._categoryServices.GetAllCategories().subscribe({
  next: (res) => {
    this.CategoryList = res.data;
  },
  error: (err) => {
    console.error(err);
  }
 });

  

}
ngOnDestroy(): void {
 
  this._ProductServiceToUnSubscribe?.unsubscribe();
  this._CategoryServiceToUnSubscribe?.unsubscribe();
}
getGradientStyle(value: number) {
  const percent = (value / 5) * 100; 

  return {
    background: `linear-gradient(to right, #f8ce0b ${percent}%, #ccc ${percent}%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };}
}
