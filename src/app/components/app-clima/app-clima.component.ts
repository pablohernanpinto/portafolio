import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-app-clima',
  templateUrl: './app-clima.component.html',
  styleUrls: ['./app-clima.component.css']
})
export class AppClimaComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/Cq0jaj-eocI?list=RDA3WAPhe5JV8&index=2';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
