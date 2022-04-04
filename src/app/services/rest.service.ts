import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

  }

  // To get Profile information from asset folders / services
  getProfileInfo() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/json/profiles.json').subscribe(res => {
        if(res) {
          localStorage.setItem('profileInfo', JSON.stringify(res));        
          resolve(res);
        }
      }, error => {
        console.log(error);
        reject(error);
      })
    })
  }

  
}
