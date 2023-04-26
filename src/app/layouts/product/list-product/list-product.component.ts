import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() selectedItem: string = '';
  searchKey = '';
  productList: any;
  products: any;
  name: any;
  constructor(private _productService: ProductService, private _cartService: CartService) { }

  ngOnInit(): void {

    this._cartService.getSearchKey().subscribe((res) => {
      this.searchKey = res;
    })
  }

  ngOnChanges() {
    console.log(this.selectedItem);
    this.getAllProd();
  }



  getAllProd() {
    // if (this.selectedItem === 'All Products' || this.selectedItem === 'electronics') {
      this.products = this.selectedItem;
      
      // this.name = (this.products.split(' ')[0])
      this._productService.getAllProducts().subscribe((res) => {
        this.productList = res;
        this.productList.forEach((data: any) => {
          if(data.category==="men's clothing"||data.category==="women's clothing"){
            data.category = 'fashion';
          }
          Object.assign(data, { total: data.price, quantity: 1 });
          //or
          //data.total = data.price;
        });
        this.productList = this.productList.filter((data) => {
          if (data.category === this.selectedItem || this.selectedItem==='All Products') {
            return data;
          }
        })
        console.log(this.productList);
      });

    // }

  }

  addToCart(item: any) {
    this._cartService.addToCart(item)
  }
}
