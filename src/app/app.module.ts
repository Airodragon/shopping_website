import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { ListOrderComponent } from './MyComponents/list-order/list-order.component';
import { OrdersModule } from './modules/orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
