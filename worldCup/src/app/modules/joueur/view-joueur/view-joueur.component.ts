import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from 'src/app/model/joueur.model';
import { environment } from 'src/environments/environment';
import { JoueurService } from '../../joueur.service';

@Component({
  selector: 'app-view-joueur',
  templateUrl: './view-joueur.component.html',
  styleUrls: ['./view-joueur.component.css']
})
export class ViewJoueurComponent implements OnInit {

  private id = 0;
  public joueur : Joueur;
  updateJoueurFormGroup : FormGroup;

  get nom() { return this.updateJoueurFormGroup.get('nom'); }

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private joueurService:JoueurService) { }

  ngOnInit(): void {
    this.updateJoueurFormGroup = new FormGroup(
      {
        nom: new FormControl("", [Validators.required]),
        prenom: new FormControl("", [Validators.required]),
        age: new FormControl("", [Validators.required, Validators.min(0)]),
        numero: new FormControl("", [Validators.required]),
        poste: new FormControl("", [Validators.required])
      }
    );
    this.activatedRoute.params.subscribe(s => {
      this.id = s["id"];
    });
    this.joueurService.getJoueur(this.id).subscribe(
      (data : Joueur) => {
        this.joueur = data;
        this.joueur.image = data.image;
        this.updateJoueurFormGroup = new FormGroup(
          {
            nom: new FormControl(this.joueur.nom, [Validators.required]),
            prenom: new FormControl(this.joueur.prenom, [Validators.required]),
            age: new FormControl(this.joueur.age, [Validators.required, Validators.min(0)]),
            numero: new FormControl(this.joueur.numero, [Validators.required]),
            poste: new FormControl(this.joueur.poste, [Validators.required])
          }
        );
      }
    );
    
    
  }

  public updateJoueur() {
    let joueur = new Joueur(this.updateJoueurFormGroup.value.nom, this.updateJoueurFormGroup.value.prenom, this.updateJoueurFormGroup.value.age, this.updateJoueurFormGroup.value.numero, this.updateJoueurFormGroup.value.poste);
    joueur.id = this.id;
    joueur.image = this.joueur.image;
    this.joueurService.updateJoueur(joueur).subscribe(() => {
      
    }, (err) => {
      console.log(err);
    })
  }

  
  
  public userImagePath = environment.userImagePath;
  public selectedFiles;
  public progress: number = 0;
  public currentFileUpload: any;
  private currentTime: number = 0;
  public updatePhoto = false;

  public getTS() {
    return this.currentTime;
  }

  getUrl() {
    return this.joueurService.url;
  }

  getImagePath() { 
      return this.joueurService.url+'/joueur/image/'+this.id+'?ts='+this.currentTime; 
  }

  onUpdatePhoto() {
    this.updatePhoto = !this.updatePhoto;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.joueurService.uploadImage(this.currentFileUpload, this.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.currentTime=Date.now();
      }
      this.updatePhoto = !this.updatePhoto;
    },err=>{
      alert("Loading problem ! ! ! ");
    })
    this.selectedFiles = undefined
  }

}
