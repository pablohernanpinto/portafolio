import { Component, ViewChild, ElementRef } from '@angular/core';
import { PaginaProductosComponent } from "./components/pagina-productos/pagina-productos.component";
import { PaginaServiciosComponent } from "./components/pagina-servicios/pagina-servicios.component";
import { AppClimaComponent } from "./components/app-clima/app-clima.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'portafolio';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  isLastSection = false;

  scrollNext() {
    const container = this.scrollContainer.nativeElement;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight;

    let nextScrollTop = scrollTop + sectionHeight;

    const maxScrollTop = container.scrollHeight - sectionHeight;
    if (nextScrollTop > maxScrollTop) {
      nextScrollTop = maxScrollTop;
    }

    container.scrollTo({
      top: nextScrollTop,
      behavior: 'smooth',
    });

    this.checkIfLastSection();
  }

  onScroll() {
    this.checkIfLastSection();
  }

  private checkIfLastSection() {
    const container = this.scrollContainer.nativeElement;
    const maxScrollTop = container.scrollHeight - container.clientHeight;
    this.isLastSection = container.scrollTop >= maxScrollTop - 5; // margen de seguridad
  }

}
