import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private platform: Platform, private iab: InAppBrowser) {}

  openWeb() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova') || this.platform.is('capacitor')) {
        // Solo en móvil
        const browser = this.iab.create(
          'https://studio.softr.io/',
          '_blank',
          'location=no,zoom=no,hardwareback=yes'
        );
      } else {
        // Fallback para navegador (ionic serve)
        window.open('https://studio.softr.io/', '_blank');
      }
    });
  }
}
