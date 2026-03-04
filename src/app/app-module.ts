import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { ProductModule } from './product/product-module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent]
})
export class AppModule { }
