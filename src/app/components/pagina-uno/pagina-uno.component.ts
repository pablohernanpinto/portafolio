import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.component.html',
  styleUrls: ['./pagina-uno.component.css']
})
export class PaginaUnoComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/Cq0jaj-eocI?list=RDA3WAPhe5JV8&index=2';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
