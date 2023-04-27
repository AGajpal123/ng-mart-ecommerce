import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ToastService } from '../services/toast.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  isCartEmpty = false;
  isCartFull = false
  cartItems = [];
  total= 0;
  constructor(private router: Router, private _cartService : CartService,
    private _toast : ToastService,private _prodService : ProductService) { }

  ngOnInit(): void {

     this.getItems();
     this.setSearchDisabled();
    // this.getStatus();

  }

  setSearchDisabled(){
    this._prodService.setSearchDisabled(true);
  }

  // getStatus(){
  //   this._toast.getSuccess().subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

  getItems(){
     this._cartService.getProducts().subscribe((res)=>{
            if(res && res!=null && res.length!=0){
              this.cartItems = res;
              this.isCartEmpty = false;
              this.isCartFull = true;
              this.total = Math.round(this._cartService.getTotalPrice());
            }else{
              this.isCartEmpty = true;
              this.isCartFull = false;
            }
     });
  }

  shopNow() {
    this.router.navigate(['/']);
  }


  removeItemFromCart(item:any){
    this._cartService.removeCartItem(item);
    if(this.cartItems?.length===0){
      this.isCartEmpty = true;
      this.isCartFull = false;
    }
  }
}
