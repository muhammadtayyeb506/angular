import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private readonly BASE_URL: string = 'https://localhost:44347/api/Students/GetAllStudents';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get<any>('https://localhost:44347/api/Students/GetAllStudents');
  }
  deletestudent(): Observable<any> {
    return this.http.post<any>('https://localhost:44347/api/Students/DeleteStudent');
  }
 

}
