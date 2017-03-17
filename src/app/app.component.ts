import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './i18n-providers';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: ['.flags{width:50px;height:50px;}']
})
export class AppComponent {
  flags: { [key: string]: any } = {
    'es': 'https://cdn2.iconfinder.com/data/icons/world-flag-icons/256/Flag_of_Spain.png',
    'us': 'https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_States.png',
    'it': 'https://cdn3.iconfinder.com/data/icons/flags-of-countries-3/128/Italy-128.png'
  }
  wolves = 0;
  gender = 'f';
  fly = true;
  logo = 'https://angular.io/resources/images/logos/angular2/angular.png';
  inc(i: number) {
    this.wolves = Math.min(5, Math.max(0, this.wolves + i));
  }
  male() { this.gender = 'm'; }
  female() {
    this.gender = 'f';
  }

  changeLang(lang:string): void {
    localStorage.setItem("lang", lang)
    window.location.reload();
  }
}