import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/layouts/product/services/cart.service';
import { ProductService } from 'src/app/layouts/product/services/product.service';
import { ToastService } from 'src/app/layouts/product/services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchKey = "";
  cartCount: number = 0;
  searchDisabled = true;
  constructor(private router: Router, private _cartService: CartService,
    private _prodService : ProductService,private _toast : ToastService) { }

  ngOnInit(): void {
    this.getCartCount();
    this.getSearchDisabled();
    this.getStatus();
  }

   getStatus(){
    // this._toast.getSuccess().subscribe((res)=>{
    //   console.log(res);
    // })
  }

  getCartCount() {
    this._cartService.getProducts().subscribe((res) => {
      if (res) {
        this.cartCount = res.length;
      }
    })
  }

  getSearchDisabled(){
    this._prodService.getSearchDisabled().subscribe((res)=>{
      this.searchDisabled = res;
    })
  }


  search(e) {
    this.searchKey = e.target.value;
    this._cartService.setSearchKey(this.searchKey);
    console.log(this.searchKey);
  }


  onCartClick() {
    this.router.navigate(['/addToCart'])
  }

}
