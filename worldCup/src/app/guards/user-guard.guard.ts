import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../modules/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private router:Router, private service:AuthenticationService){
  }

  canActivate():boolean {
      if( this.service.isAuth()) {
        //console.log("yes");
        return true;
      }
      else
        {//console.log("yes");
      this.router.navigate(['/worldcup/login']);
      return false;}
  }
  
}
