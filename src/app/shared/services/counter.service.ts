import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
counter  = new BehaviorSubject<any>(0);
itemIndex  = new BehaviorSubject<any>(0);
  constructor() { }
   
  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(value){
    this.counter.next(value);
  }

  getItemIndex(){
    return this.itemIndex.asObservable();
  }

  setItemIndex(value){
    this.itemIndex.next(value);
  }

}
