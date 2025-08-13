import { Component ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollNext() {
    const container = this.scrollContainer.nativeElement;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight; // 100vh aprox.

    // Calcula la posición para la siguiente sección
    let nextScrollTop = scrollTop + sectionHeight;

    // Evitar pasarse del máximo scroll
    const maxScrollTop = container.scrollHeight - sectionHeight;
    if (nextScrollTop > maxScrollTop) {
      nextScrollTop = maxScrollTop;
    }

    container.scrollTo({
      top: nextScrollTop,
      behavior: 'smooth',
    });
    }
}
