import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInformation } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserServise {

  private userUrl = '/detail';

  constructor(private http: HttpClient) {}

  public getData(): Observable<UserInformation[]> | any{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(id: number): Observable<UserInformation> {
    debugger
    const url = `${this.userUrl}/${id}`;
    return this.http.get<UserInformation>(url)
  }
}

