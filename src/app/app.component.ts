import { Component } from '@angular/core';
import { routeData } from './config/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = routeData;

  title = 'portfolio';
}
