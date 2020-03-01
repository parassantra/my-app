import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Person } from './data-classes';
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private m: DataModelManagerService) { }
  id: string;
  person: Person;

  ngOnInit(): void {
    this.m.personsGetById(this.id).subscribe(p => this.person = p);
  }

}
