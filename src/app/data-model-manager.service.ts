import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from "./data-classes";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {
  private url: string = 'https://my.api.mockaroo.com/person';

  constructor(private http: HttpClient) { }

  personsGetAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/?key=3b2f6d70`);
  }

  personsGetById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.url}/${id}?key=3b2f6d70`);
  }
}