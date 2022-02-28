import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Natus';
  idade: number = 41;
  job = 'programador'
  car = {
    name: 'gol',
    ano: '2001',
    motor: '2.0'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
