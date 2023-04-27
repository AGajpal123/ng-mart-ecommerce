import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/layouts/product/services/toast.service';
var $ : any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listProduct:any ;
  id : any = false;
  


  constructor(private _toast : ToastService) { }

  ngOnInit(): void {
    this._toast.getSuccess().subscribe((res)=>{
      console.log(res);
    })
  }

    ngAfterViewInit() {
    
  }


}
