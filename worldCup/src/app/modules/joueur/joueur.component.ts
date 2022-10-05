import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Joueur } from 'src/app/model/joueur.model';
import { JoueurService } from '../joueur.service';

let PLAYER_ELEMENT_DATA;

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  playersDataSource = new MatTableDataSource(PLAYER_ELEMENT_DATA);

  public joueurs;
  public menu : number = 1;
  private currentTime: number = 0;

  menuChoice(choice) {
    this.menu = choice;
  }
  
  constructor(private joueurService:JoueurService) { }

  ngOnInit(): void {
    this.joueurService.getJoueurs().subscribe(
      (data : Joueur) => { this.joueurs = data; },
      (error) => { console.log(error); }
    );
  }
  


  public getTS() {
    return this.currentTime;
  }

  getUrl() {
    return this.joueurService.url;
  }

  getImagePath(id : number) { 
      return this.joueurService.url+'/joueur/image/'+id+'?ts='+this.currentTime; 
  }


}
