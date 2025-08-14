import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaUnoComponent } from './components/pagina-uno/pagina-uno.component';
import { PaginaProductosComponent } from './components/pagina-productos/pagina-productos.component';
import { PaginaServiciosComponent } from './components/pagina-servicios/pagina-servicios.component';
import { AppClimaComponent } from './components/app-clima/app-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaUnoComponent,
    PaginaProductosComponent,
    PaginaServiciosComponent,
    AppClimaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
