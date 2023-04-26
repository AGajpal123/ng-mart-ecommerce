import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';


import {HttpClientModule} from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    ListProductComponent,
    ShopProductComponent,
    AddToCartComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports : [
    ListProductComponent,
    ToastComponent
  ]
})
export class ProductModule { }
