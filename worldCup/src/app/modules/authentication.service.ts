import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host:string = environment.APIEndpoint;
  private jwtToken = null;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private JwtHelperService:JwtHelperService) { 
  }
  
  login(user) {
    return this.http.post(this.host+"/login", user, {observe: 'response'});
  }

  SignInClient(user) {
    return this.http.post(this.host+"/api/register", user, {observe: 'response'});
  }

  saveToken(jwt:string) {
    this.loggedIn.next(true);
    localStorage.setItem('token', jwt);
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  get token() {
    if(this.jwtToken == null)
      this.loadToken();
    return this.jwtToken;
  }

  get currentUser() {
    if(this.JwtHelperService.decodeToken()!=null)
      return this.JwtHelperService.decodeToken().sub;
      return null;
  }
  /*
  getUsers() {
    if(this.jwtToken == null)
      this.loadToken();
    return this.http.get(this.host+"/appUsers", {headers:new HttpHeaders({'Authorization': "Bearer "+this.jwtToken})});
  }
  */

  isAuth()
  {
    if(this.jwtToken == null)
      this.loadToken();
    console.dir(this.JwtHelperService.decodeToken());
    return !this.JwtHelperService.isTokenExpired(this.jwtToken);
  }

  get isLoggedIn() {
    if(this.jwtToken == null)
      this.loadToken();
    if(!this.JwtHelperService.isTokenExpired(this.jwtToken))
      this.loggedIn.next(true);
    else
      this.loggedIn.next(false);
    return this.loggedIn.asObservable(); 
  }

  logout() {
    this.loggedIn.next(false);
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

}
