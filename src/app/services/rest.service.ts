import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '../../../node_modules/@angular/http';
import { Person } from '../models/person.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = new Headers({
    'Content-Type': 'Application/json'
  });

  constructor(private http: Http) { }

  getPeople() {
    return this.http.get('/api/people', { headers: this.headers }).pipe(
      map((response: Response) => {
        const people: Person[] = response.json();
        return people;
      })
    );
  }
}
