//import { Animal } from './../../Animal';
import { Component, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name:'Zoreia', type: 'dog', link: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', alt: 'Imagem de Cachorro', age: 2, mostrar: false},
    {name: 'Miti', type: 'cat', link: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',alt:'Imagem de Gato', age: 3, mostrar: false},
    {name: 'pé-de-pano', type: 'horse', link: 'https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', alt: 'Imagem de cavalo', age: 10, mostrar: false}
  ]


  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
   console.log("Mostrando idade")
   this.listService.show(this.animals, animal)
  }

  removeAnimal(animal: Animal){
      console.log("REmovendo animalll " + animal.name)
      this.animals = this.listService.remove(this.animals, animal)

  }
}
