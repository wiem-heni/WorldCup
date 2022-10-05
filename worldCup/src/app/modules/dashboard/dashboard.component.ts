import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { JoueurService } from '../joueur.service';
import { Joueur } from 'src/app/model/joueur.model';

let PLAYER_ELEMENT_DATA;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  playersDataSource = new MatTableDataSource(PLAYER_ELEMENT_DATA);


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    
  }






}
