import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { Joueur } from '../model/joueur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  url:string = environment.APIEndpoint+"/api";

  constructor(private http:HttpClient,
    private authService : AuthenticationService) { }

  getJoueurs() {
    return this.http.get(this.url+"/joueur", {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})});
  }

  getJoueur(id) {
    return this.http.get(this.url+"/joueur/"+id, {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})});
  }

  saveJoueur(joueur: Joueur) {
    return this.http.post(this.url+"/joueur", joueur, {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})});
  }

  updateJoueur(joueur: Joueur) {
    return this.http.put(this.url+"/joueur", joueur, {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})});
  }





  uploadImage(file: File, id : number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('id', id.toString());
    const req = new HttpRequest('PUT', this.url+'/joueur/uploadPhoto', formdata, {
      reportProgress: true,
      responseType: 'text',
      headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})
    });
    return this.http.request(req);
  }
  
  getImage(id:number, currentTime) {
    return this.http.get(this.url+"/joueur/image/"+id+"?ts="+currentTime/*, {headers:new HttpHeaders({'Authorization': "Bearer "+this.authService.token})}*/);
  }


}
