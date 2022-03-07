import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  name: string = '';
  numA: number = 0;
  numB: number = 0;
  soma: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
