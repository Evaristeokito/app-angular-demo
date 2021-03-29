import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './composants/product-add/product-add.component';
import { ProductListComponent } from './composants/product-list/product-list.component';
import { HeaderComponent } from './utils/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductAddComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
