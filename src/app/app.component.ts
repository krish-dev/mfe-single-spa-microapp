import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare var window: any;

@Component({
  selector: 'microapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  async config() {
    return window.System.import('http://localhost:4202/main.js');
  }
  mountRootParcel = mountRootParcel;
}
