import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  public searchKey = new BehaviorSubject<any>("");
  constructor(private toastService : ToastService) { }

  getSearchKey(){
    return this.searchKey.asObservable();
  }

  setSearchKey(key:any){
    this.searchKey.next(key);
  }

  getProducts(){
   return this.productList.asObservable();
  }

  setProduct(product : any){
     this.cartItemList.push(...product);
     this.productList.next(product);
  }

  addToCart(product : any){
    const filterProduct = this.cartItemList.filter((data)=>data.id===product.id);
    if(filterProduct!=null && filterProduct.length==0){
      this.cartItemList.push(product);
      this.toastService.setSuccess('success');
      alert("Item added to cart")
    }else{
      alert("Item already in cart!");
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(){
    let total = 0;
    this.cartItemList.map((a:any)=>{
      total += a.total; 
    });
    return total;
  }

  removeCartItem(product : any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
