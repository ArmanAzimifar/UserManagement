import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User, UserDetail } from './models/user';



@Injectable()
export class UserService {
  baseUrl = 'https://cloud.parspack.com/cl/fronttask/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const params = new HttpParams().append('o', 'list');

    return this.http.get<User[]>(this.baseUrl, { params });
  }

  getUser(userId: number): Observable<UserDetail> {
    let params = new HttpParams();

    params = params.append('o', 'detail');
    params = params.append('id', userId.toString());

    return this.http.get<UserDetail>(this.baseUrl, { params });
  }
}
