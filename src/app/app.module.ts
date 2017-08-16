import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { CoffeeComponentComponent } from './coffee-component/coffee-component.component';
import { WifiComponent } from './wifi/wifi.component';
import { ExpressoComponent } from './expresso/expresso.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    CoffeeComponentComponent,
    WifiComponent,
    ExpressoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    
    { path: 'coffee' , component: CoffeeComponentComponent } , 

    { path: 'wifi' , component:  WifiComponent } 

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
