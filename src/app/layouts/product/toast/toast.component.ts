import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private _toast : ToastService) { }
  showSuccess = false;
  ngOnInit(): void {
    // this._toast.getSuccess().subscribe((res)=>{
    //   if(res==='success'){
    //     this.showSuccess = true;
    //   }
     
    // })
  }

  

  close(){

  }

}
