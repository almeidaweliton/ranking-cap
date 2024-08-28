import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CadastroNotasComponent } from './pages/cadastro-notas/cadastro-notas.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ranking',
    pathMatch: 'full'
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'cadastro-de-notas',
    component: CadastroNotasComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
