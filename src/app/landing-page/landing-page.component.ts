import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // private people: Person[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    // this.fetchPeople();
  }

  // fetchPeople() {
  //   this.restService.getPeople().subscribe(
  //     (people: Person[]) => {
  //       this.people = people;
  //       console.log(this.people);
  //     }
  //   );
  // }

}
