import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './pages/repo-list/repoList.component';

const routes: Routes = [
  {
    path: '',
    component: RepoListComponent,
    children: [
      {
        path: 'list',
        component: RepoListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
