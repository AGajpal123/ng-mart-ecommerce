import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  success = new BehaviorSubject<any>('');
  constructor() { }

  setSuccess(value: any) {
    this.success.next(value);
  }

  getSuccess(){
    return this.success.asObservable();
  }

  
}
