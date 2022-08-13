import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from '../models/repos';

@Injectable()
export class GithubService {
  baseUrl = 'https://api.github.com/';

  constructor(private _http: HttpClient) {}

  getRepos(userName: string): Observable<Repos[]> {
    return this._http.get<Repos[]>(
      this.baseUrl + 'users/' + userName + '/repos'
    );
  }
}
