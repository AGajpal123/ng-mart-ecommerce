import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../layouts/product/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private _toast : ToastService) { }
  showSuccess = false;
  ngOnInit(): void {
    this._toast.getSuccess().subscribe((res)=>{
      console.log(res);
    })
  }

  

  close(){

  }

}
