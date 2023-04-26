import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/layouts/product/services/product.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Output() itemSelected = new EventEmitter<string>();


  constructor(private _prodService: ProductService) { }

  ngOnInit(): void {
  }

  onSelectItem(item: string) {
    console.log(item);
    
    this.itemSelected.emit(item);
    this._prodService.setSearchDisabled(null);
  }
  onProductClk() {
    console.log('clcll');
  }


}
