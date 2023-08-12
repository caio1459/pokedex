import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemomListComponent } from './views/pokemom-list/pokemom-list.component';

const routes: Routes = [{ path: '', component: PokemomListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
