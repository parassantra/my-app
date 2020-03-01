import { Component, OnInit } from '@angular/core';
import { Person } from "./data-classes";
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];
  constructor(private m: DataModelManagerService) { }

  ngOnInit(): void {
    this.m.personsGetAll().subscribe(p => {  
      this.persons = p;  
   });  
  }

}
