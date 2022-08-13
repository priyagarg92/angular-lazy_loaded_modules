import { Component } from '@angular/core';
import { Repos } from '../../../core/models/repos';
import { GithubService } from '../../../core/services/github.service';

@Component({
  selector: 'app-repoList',
  templateUrl: './repoList.component.html',
})
export class RepoListComponent {
  userName = 'Angular';

  repos: Repos[];

  loading = false;
  errorMessage: string;

  constructor(private _githubService: GithubService) {}

  getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this._githubService.getRepos(this.userName).subscribe(
      (res) => {
        this.repos = res;
      },
      (err) => {
        this.errorMessage = err;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
