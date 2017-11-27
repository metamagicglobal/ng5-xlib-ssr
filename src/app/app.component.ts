import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `      
      <h4>Showcase</h4>
  <a routerLink="/">Checkbox</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  {{server}}
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
 server : boolean;
}
