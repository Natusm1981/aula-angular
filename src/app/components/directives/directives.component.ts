import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  classes = ['green-title', 'small-title'];
  underline = 'under-title'

  size = 40;
  font = 'arial';
  color = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
