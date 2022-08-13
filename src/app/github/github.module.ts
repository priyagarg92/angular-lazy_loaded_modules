import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GithubRoutingModule } from './github-routing.module';
import { RepoListComponent } from './pages/repo-list/repoList.component';

@NgModule({
  declarations: [RepoListComponent],
  imports: [GithubRoutingModule, SharedModule],
  providers: [],
})
export class GithubModule {}
