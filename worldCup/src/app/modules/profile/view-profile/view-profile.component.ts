import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProfileService } from '../../profile.service';
import { DashboardService } from '../../dashboard.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { environment } from '../../../../environments/environment';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  
  userFormGroup: FormGroup;
  user: User;
  public menu : number = 1;

  constructor(private profileService: ProfileService,
    private dashboardService: DashboardService, 
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    public dialog: MatDialog,
    public route: ActivatedRoute) { 
    }
  
  get isAuthUser() {
    if(this.user == null)
      return false;
    return this.authService.currentUser == this.user.username;
  }  


  updateUser() {
    this.user = new User(this.user.username, this.email, this.firstname, this.lastname, this.birthday, this.address);
    this.profileService.updateProfile(this.user).subscribe(()=> {
      
    }, err => {
      console.log(err);
    });
  }

  get username() { return this.userFormGroup.get('username'); }
  get email(): string { return this.userFormGroup.get('email').value; }
  set email(email: string) { this.user.email = email; }
  get address(): string { return this.userFormGroup.get('address').value; }
  set address(address: string) { this.user.address = address; }
  get firstname(): string { return this.userFormGroup.get('firstname').value; }
  set firstname(firstname: string) { this.user.firstName = firstname; }
  get lastname(): string { return this.userFormGroup.get('lastname').value; }
  set lastname(lastname: string) { this.user.lastName = lastname; }
  get birthday(): string { return this.userFormGroup.get('birthday').value; }
  set birthday(birthday: string) { this.user.birthday = birthday; }

  ngOnInit(): void {
    this.profileService.getProfile(this.route.snapshot.params.username).subscribe(data => {
      this.user = new User(data["username"], data["email"], data["firstName"], data["lastName"], data["birthday"], data["address"]);
      this.user.image=data["image"];
      this.userFormGroup = new FormGroup(
        {
          username: new FormControl(this.user.username, [Validators.required]),
          email: new FormControl(this.user.email),
          firstname: new FormControl(this.user.firstName),
          lastname: new FormControl(this.user.lastName),
          birthday: new FormControl(this.user.birthday),
          address: new FormControl(this.user.address)
        }
      );
    }, err => {

    });


  }

  menuChoice(choice) {
    this.menu = choice;
  }

  getUrl() {
    return this.profileService.url;
  }

}
