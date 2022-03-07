import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListRenderComponent } from './components/list-render/list-render.component';
import { Componente2Component } from './components/componente2/componente2.component';


const routes: Routes = [
  {path : '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'Carro', component: Componente2Component}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

