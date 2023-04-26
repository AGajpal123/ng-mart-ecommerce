import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { NavItemComponent } from './component/nav-item/nav-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports : [HeaderComponent,NavItemComponent,FilterPipe]
})
export class SharedModule { }
