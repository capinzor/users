import { Injectable } from '@angular/core';
import { UserlistI } from '../../models/userlist.interface';
import { UserI } from '../../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI } from '../../models/response.interface';

  
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UserlistI[]>{
    let dir = this.url + 'users';
    return this.http.get<UserlistI[]>(dir);
  }

  getUserById(id: any):Observable<UserI>{
    let dir = this.url + 'users/' + id;
    return this.http.get<UserI>(dir);
  }
  
  putUser(form:UserI, id: any):Observable<ResponseI>{
    let dir = this.url + 'users/' + id;
    return this.http.put<ResponseI>(dir,form);
  }

  deleteUser(id: any):Observable<{}> {
    let dir = this.url + 'users/' + id;
    return this.http.delete(dir);    
  }
  postUser(form:UserI):Observable<ResponseI>{
    let dir = this.url + 'users/';
    return this.http.post<ResponseI>(dir,form)
  }
}
