import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  //nome: string = 'natusm'
  @Input() nome: string = 'natusm';
  constructor() { }

  ngOnInit(): void {
  }

}
