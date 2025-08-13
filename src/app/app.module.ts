import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaUnoComponent } from './components/pagina-uno/pagina-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaUnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
