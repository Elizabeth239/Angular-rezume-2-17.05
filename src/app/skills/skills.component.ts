import { Component, OnInit } from '@angular/core';
import {skillsInformation} from './skillsInformation';

@Component({
  selector: 'app-skills',
  template: `<p>SKILLS:</p>
<p>{{skill.skills[0]}}</p>
<p>{{skill.skills[1]}}</p>
<p>{{skill.skills[2]}}</p>`,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skill: skillsInformation={
	skills:["First Skill","Second Skill","Thirdth Skill"]
};

  constructor() { }

  ngOnInit(): void {
  }

}
