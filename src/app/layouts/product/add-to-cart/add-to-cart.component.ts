import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ToastService } from '../services/toast.service';
import { ProductService } from '../services/product.service';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  isCartEmpty = false;
  isCartFull = false
  cartItems = [];
  total = 0;
  quantity;
  itemIdx;
  cartItemLength;


  constructor(private router: Router, private _cartService: CartService,
    private _toast: ToastService, private _prodService: ProductService,
    private counter: CounterService) {

  }


  ngOnInit(): void {

    this.getItems();
    this.setSearchDisabled();



  }




  setSearchDisabled() {
    this._prodService.setSearchDisabled(true);
  }


  getItems() {
    this._cartService.getProducts().subscribe((res) => {
      if (res && res != null && res.length != 0) {
        this.cartItems = res;
        this.cartItemLength = this.cartItems.length;
        this.isCartEmpty = false;
        this.isCartFull = true;
        this.total = Math.round(this._cartService.getTotalPrice());
      } else {
        this.isCartEmpty = true;
        this.isCartFull = false;
      }
    });
  }

  shopNow() {
    this.router.navigate(['/']);
  }


  removeItemFromCart(item: any) {
    this._cartService.removeCartItem(item);
    if (this.cartItems?.length === 0) {
      this.isCartEmpty = true;
      this.isCartFull = false;
    }
  }


  decrease(id){
   
      this.cartItems.forEach((res)=>{
        if(id===res.id && (res.quantity)-1>0){
            this.total = this.total-res.initialPrice;
            res.quantity=parseInt(res.quantity)-1;
            res.ruppee = parseInt(res.ruppee)-parseInt(res.initialPrice);
            this.cartItemLength -=1; 
          }
      });
      this.cartItems = this.cartItems;
   }
 
   increase(id){
    this.cartItems.forEach((res)=>{
      if(id===res.id && res.quantity<res.rating.count){
        this.total = this.total+res.initialPrice;
        res.quantity=parseInt(res.quantity)+1;
        res.ruppee = parseInt(res.ruppee)+parseInt(res.initialPrice);
        this.cartItemLength +=1;
        
      }
    });
    this.cartItems = this.cartItems;
    
   }

}
