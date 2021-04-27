import { Component } from '@angular/core';
import { WebApiService } from './services/web-api/web-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-app';
  constructor() {
  }
}
