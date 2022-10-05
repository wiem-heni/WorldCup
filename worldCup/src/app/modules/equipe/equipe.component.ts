import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  public menu : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  menuChoice(choice) {
    this.menu = choice;
  }

}
