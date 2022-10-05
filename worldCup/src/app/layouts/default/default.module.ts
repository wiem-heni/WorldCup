import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/modules/authentication.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ViewProfileComponent } from 'src/app/modules/profile/view-profile/view-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng5SliderModule } from 'ng5-slider';
import { JoueurComponent } from 'src/app/modules/joueur/joueur.component';
import { AddJoueurComponent } from 'src/app/modules/joueur/add-joueur/add-joueur.component';
import { MatchComponent } from 'src/app/modules/match/match.component';
import { EquipeComponent } from 'src/app/modules/equipe/equipe.component';
import { AddEquipeComponent } from 'src/app/modules/equipe/add-equipe/add-equipe.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AuthenticationComponent,
    ViewProfileComponent,
    JoueurComponent,
    AddJoueurComponent,
    MatchComponent,
    EquipeComponent,
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule,
    Ng5SliderModule
  ],
  entryComponents: [
    ViewProfileComponent
  ],
  providers: [
  ],
})
export class DefaultModule { }
