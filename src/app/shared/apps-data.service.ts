import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/RX';

export interface IEnvironment {
  name: string;
  metaJsonUrl: string;
  currentVersion: string;
  lastBuild: string;
  previousVersion: string;
  since: string;
  lastCheck: string;
}

export interface IApp {
  name: string;
  environments: Array<IEnvironment>;
}

const api = 'https://mkomarek.avior.uberspace.de/env-versions/';
// const api = 'http://localhost:3000/';
@Injectable()
export class AppsDataService {

  constructor(private http: Http) { }

  getApps(): Observable<IApp[]> {
    return this.http.get(`${api}apps`)
      .map(response => response.json());
  }

}
