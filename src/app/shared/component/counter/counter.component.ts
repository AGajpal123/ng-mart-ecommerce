import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() itemIdx;
  value = 1;
  constructor(private counter : CounterService) { }

  ngOnInit(): void {

  }

  decrease(){
   if(this.value!=1){
    this.value--;
    this.counter.setCounter(this.value);
    this.counter.setItemIndex(this.itemIdx.id)
   }
  }

  increase(){
    this.value++;
    // console.log('value '+this.value);
    // console.log(this.itemIdx);
    this.counter.setCounter(this.value);
    this.counter.setItemIndex(this.itemIdx.id)
  }

}
