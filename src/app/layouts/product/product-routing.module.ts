import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


const routes: Routes = [
  {
    path : '',
    component : ShopProductComponent
  },
  {
    path : 'addToCart',
    component : AddToCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
