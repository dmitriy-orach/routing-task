import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserServise {

  private urlData = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  public getData(): Observable<UserInformation[]> | any{
    return this.http.get(this.urlData);
  }

  public getUserData(id: string): Observable<UserInformation[]> | any{
    return this.http.get(`${this.urlData}/${id}`);  
  }
}

