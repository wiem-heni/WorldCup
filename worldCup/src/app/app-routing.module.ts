import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { ViewProfileComponent } from './modules/profile/view-profile/view-profile.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { ViewJoueurComponent } from './modules/joueur/view-joueur/view-joueur.component';
import { JoueurComponent } from './modules/joueur/joueur.component';
import { MatchComponent } from './modules/match/match.component';
import { EquipeComponent } from './modules/equipe/equipe.component';

const routes: Routes = [{
  
  path: 'worldcup',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'login',
    component: AuthenticationComponent
  }, {  
    path: 'user/profile',
    component: ViewProfileComponent,
    canActivate:[UserGuardGuard]
  }, {  
    path: 'user/profile/:username',
    component: ViewProfileComponent,
    canActivate:[UserGuardGuard]
  }, {  
    path: 'equipe',
    component: EquipeComponent,
    canActivate:[UserGuardGuard]
  }, {  
    path: 'match',
    component: MatchComponent,
    canActivate:[UserGuardGuard]
  }, {  
    path: 'joueur',
    component: JoueurComponent,
    canActivate:[UserGuardGuard]
  }, {  
    path: 'joueur/:id',
    component: ViewJoueurComponent,
    canActivate:[UserGuardGuard]
  }]
}, {
  path: "", 
  redirectTo: '/worldcup', 
  pathMatch: 'full'
}, {
  path: "**", 
  redirectTo: '/worldcup', 
  pathMatch: 'full'
}
];/*, 
{
  path: 'carApp/user',
  component: DefaultComponent,
  canActivate:[UserGuardGuard],
  children: [{
    path: 'profile',
    component: ViewProfileComponent
     }]
  }/*, {
    path: "", 
    redirectTo: '/carApp', 
    pathMatch: 'full'
  }, {
    path: "**", 
    redirectTo: '/carApp', 
    pathMatch: 'full'
  }];*/


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers:[
    UserGuardGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
