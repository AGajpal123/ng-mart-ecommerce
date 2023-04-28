import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { NavItemComponent } from './component/nav-item/nav-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './component/counter/counter.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent,
    FilterPipe,
    CounterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [HeaderComponent,NavItemComponent,FilterPipe,CounterComponent]
})
export class SharedModule { }
