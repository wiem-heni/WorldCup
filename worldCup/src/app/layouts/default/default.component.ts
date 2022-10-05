import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  profile = false;
  isLoggedIn$: Observable<boolean>;  


  
  constructor(public authService:AuthenticationService,
    private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  isAutorized() {
    if(this.router.url=="/carApp/login")
      return true;
    return false  
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }



  
}
