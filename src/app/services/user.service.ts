import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from '../models/user-Information.model';

@Injectable({
  providedIn: 'root'
})
export class UserServise {

  private urlData = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  public getData(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(this.urlData);
  }

  public getUserData(id: string): Observable<UserInformation> {
    return this.http.get<UserInformation>(`${this.urlData}/${id}`)}
}

