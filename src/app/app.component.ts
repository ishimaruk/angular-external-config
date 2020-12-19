import { Component } from '@angular/core';
import { AppConfig } from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-external-config';
  mode = '';
  constructor(private config: AppConfig){
    this.mode = config.getMode();
  }
}
 