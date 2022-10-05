import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

export class User {
  username : string;
  password : string;
  confirmedPassword : string;

  constructor(username : string,
    password : string,
    confirmedPassword : string) {
      this.username = username;
      this.password = password;
      this.confirmedPassword = confirmedPassword;
  }

}

export class AppUser {
  username : string;
  password : string;

  constructor(username : string,
    password : string) {
      this.username = username;
      this.password = password;
  }

}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  mode :number = 0;
  choice :number = 1;

  constructor(private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  menuChoice(choice) {
    this.choice = choice;
    this.mode = 0;
  }

  onLogin(data) {
    if(this.choice==1) {
      this.authService.login(data)
      .subscribe(resp => {
        let jwt = resp.headers.get('authorization');
        //console.log(jwt);
        this.authService.saveToken(jwt);
        if(this.mode == 1)
          this.mode = 0;
        this.router.navigate(['/carApp']);
      },
      err => {
        this.mode = 1;
      });
    }
    else {
      let user = new User(data.username, data.password, data.password);
      this.authService.SignInClient(user).subscribe( resp => {
        this.authService.login(new AppUser(data.username, data.password))
          .subscribe(resp => {
            let jwt = resp.headers.get('authorization');
            //console.log(jwt);
            this.authService.saveToken(jwt);
            if(this.mode == 1)
              this.mode = 0;
            this.router.navigateByUrl('/carApp/user/profile');
          },
          err => {
            this.mode = 1;
          });
      }, err => {
        
      }); 
      console.log(data);
    }
  }
}
