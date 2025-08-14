import { Component,OnInit  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-datos-de-contacto',
  templateUrl: './datos-de-contacto.component.html',
  styleUrls: ['./datos-de-contacto.component.css']
})
export class DatosDeContactoComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/Cq0jaj-eocI?list=RDA3WAPhe5JV8&index=2';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit() {
    console.log('componente incial');
  }
  
}
