import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private iab: InAppBrowser) {}

  openWeb() {
    const browser = this.iab.create(
      'https://studio.softr.io/',
      '_blank',
      'location=no,zoom=no,hardwareback=yes'
    );

    // Aquí podrías inyectar CSS o JS si hace falta
  }
}
