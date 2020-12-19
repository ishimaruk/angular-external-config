import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AppConfig {
    private config: any = null;

    constructor(private http: HttpClient) {

    }

    public getMode(): any {
        return this.config.mode;
    }

    public loadAppConfig(): any {
        const envFileName = environment.production ? 'prod' : 'dev';
        return this.http.get(`/assets/config/config-${envFileName}.json`)
          .toPromise()
          .then(data => {
            this.config = data;
          });
      }

}
