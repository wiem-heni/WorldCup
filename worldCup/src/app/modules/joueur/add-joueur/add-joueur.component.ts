import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Joueur } from 'src/app/model/joueur.model';
import { environment } from 'src/environments/environment';
import { User } from '../../authentication/authentication.component';
import { DashboardService } from '../../dashboard.service';
import { JoueurService } from '../../joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  joueurFormGroup : FormGroup;




  constructor(private formBuilder: FormBuilder,
    public joueurService: JoueurService) { }

  ngOnInit(): void {
    this.joueurFormGroup = new FormGroup(
      {
        nom: new FormControl("", [Validators.required]),
        prenom: new FormControl("", [Validators.required]),
        age: new FormControl("", [Validators.required, Validators.min(0)]),
        numero: new FormControl("", [Validators.required]),
        poste: new FormControl("", [Validators.required])
      }
    );
  }

  addJoueur() {
    let joueur = new Joueur(this.joueurFormGroup.value.nom, this.joueurFormGroup.value.prenom, this.joueurFormGroup.value.age, this.joueurFormGroup.value.numero, this.joueurFormGroup.value.poste);
    console.log(joueur);
    this.joueurService.saveJoueur(joueur).subscribe(() => {
      
    }, (err) => {
      console.log(err);
    })
  }



}
