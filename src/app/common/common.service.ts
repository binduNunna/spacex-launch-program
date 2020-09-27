import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// environment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CommonService {
  public apiUrl;
  public router;

  constructor(public http: HttpClient, public route: Router) {
    this.apiUrl = environment.apiURL;
    this.router = route;
  }

  /**********************************************************
  @PURPOSE : Call api.
  /********************************************************/
  callApi(url, data, method): Promise<any> {
    return new Promise((resolve, reject) => {
    if (method === 'get') {
        this.http.get(this.apiUrl + url, { params: data })
          .subscribe(data1 => {
            resolve(data1);
          }, error => {
          });
      }
    });
  }

}
