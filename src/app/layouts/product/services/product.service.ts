import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchDisabled = new BehaviorSubject<any>(true);
  constructor(private http : HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products");
  }

  getSearchDisabled(){
   return this.searchDisabled.asObservable();
  }

  setSearchDisabled(value:any){
 this.searchDisabled.next(value);
  }

}
