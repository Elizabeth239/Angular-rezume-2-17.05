import { Component, OnInit } from '@angular/core';
import {BaseInformation} from './BaseInformation';
import {ITEMS} from './mock-baseInformation-items';


@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {
items = ITEMS;

	information: BaseInformation={
	surname:"Surname",
	name:"Name",
	patronomic:"Patronomic",
	email:"youremail@.gmail.com",
	telephone:["123456789"],
	city:"City",
	birthDate:"111",
	procentOfSuccess:90
	};

  constructor() { }

  ngOnInit(): void {
  }

}
