import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CadastroNotasComponent } from './pages/cadastro-notas/cadastro-notas.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: 'ranking-cap',
    redirectTo: 'ranking',
    pathMatch: 'full'
  },
  {
    path: 'ranking-cap/ranking',
    component: RankingComponent
  },
  {
    path: 'ranking-cap/cadastrar-notas',
    component: CadastroNotasComponent
  },
  {
    path: 'ranking-cap/**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
