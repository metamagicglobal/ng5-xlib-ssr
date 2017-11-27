import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
      <amexio-checkbox [fieldLabel]="'Server'"
                       [(ngModel)]="server"
                       [horizontal]="true"></amexio-checkbox>`
})
export class HomeComponent implements OnInit {

}