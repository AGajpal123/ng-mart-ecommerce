import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';


import {HttpClientModule} from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ListProductComponent,
    ShopProductComponent,
    AddToCartComponent,
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ListProductComponent,
 
  ]
})
export class ProductModule { }
