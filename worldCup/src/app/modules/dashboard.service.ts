import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

export interface Car {
  Brand: string;
  ComercialDesignation: string;
}



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url:string = environment.APIEndpoint+"/api";

  constructor(private http:HttpClient, public authService:AuthenticationService) { }

  getCars(text: string) : Observable<Car[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+this.authService.token);
    let params = new HttpParams().set('text', text);
    params.append('Authorization', 'Bearer '+this.authService.token);
    return this.http.get<Car[]>(this.url+"/search", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token}), params: params});
  }

  getCarsAdd(text: string) : Observable<Car[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+this.authService.token);
    let params = new HttpParams().set('text', text);
    params.append('Authorization', 'Bearer '+this.authService.token);
    return this.http.get<Car[]>(this.url+"/searchAdd", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token}), params: params});
  }

  getAllCars() : Observable<Car[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+this.authService.token);
    return this.http.get<Car[]>(this.url+"/getCars", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})});
  }

  getCarsByComercialSpecification(comSpec: string) : Observable<Car[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+this.authService.token);
    console.log("*****"+comSpec);
    let params = new HttpParams().set('text', comSpec);
    params.append('Authorization', 'Bearer '+this.authService.token);
    return this.http.get<Car[]>(this.url+"/getCarsByComercialSpecification", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token}), params: params});
  }

  getCarsMatching(text: string) : Observable<Car[]> {
    let headers = new Headers();
    
    headers.append('Authorization', 'Bearer '+this.authService.token);
    let params = new HttpParams().set('text', text)
    .append('username', this.authService.currentUser);
    params.append('Authorization', 'Bearer '+this.authService.token);
    return this.http.get<Car[]>(this.url+"/search/matching", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token}), params: params});
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
