import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http: HttpClient) { }

  getUser(): Observable<Object>{
    return this.http.get('https://reqres.in/api/users?page=1')
  }

  displayUser(id): Observable<Object>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}