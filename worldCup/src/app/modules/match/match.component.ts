import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matche',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public menu : number = 1;

  menuChoice(choice) {
    this.menu = choice;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
