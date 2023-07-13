import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skill_title = 'Skills Summary'
  skill_1 = 'Project Management'
  skill_2 = 'Budgeting and Cost Analysis'
  skill_3 = 'Staff and User Training'

  award_1='Most Outstanding Employee of the Year, Pixelpoint Hive (2015)'
  award_2='Best Mobile App Design, HGFZ Graduate Center (2014)'  

  education='Cliffmoor College'
  getEducation(){
    return "Minor in Management, thesis involved studying several technology companies and optimizing their product design process. "+
    "Studied project planning, coordination, and ethics. Worked with various startups on launching new apps and services"
  }
}
