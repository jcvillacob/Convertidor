import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { convertidorComponent } from './components/convertidor/convertidor.component';
import { navbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, navbarComponent, convertidorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
