import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './layouts/product/product.module';
import { SharedModule } from './shared/shared.module';
import { ToastComponent } from './layouts/product/toast/toast.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToastComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
