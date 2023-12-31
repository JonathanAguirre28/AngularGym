import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }

    traerUsuarios(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    saveUsers(usuarios:any): Observable<null> {
      return this.http.post<null>('https://jsonplaceholder.typicode.com/posts', usuarios)
    }
  }

