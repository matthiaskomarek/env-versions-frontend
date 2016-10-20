import {Component, OnInit} from '@angular/core';
import {AppsDataService, IApp} from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppsDataService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  apps: IApp[] = [];

  constructor(private appsDataService: AppsDataService) {}

  ngOnInit() {
    this.appsDataService.getApps()
      .subscribe(apps => {
        console.log(apps);
        this.apps = apps;
      });
  }
}
