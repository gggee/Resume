import { Component, OnInit } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  constructor(private experienceComponent: ExperienceComponent, private skillComponent: SkillComponent) { }

  //for ExperienceComponent
  expTitle!: string;
  expTitle_2!: string;
  expTitle_3!: string;
  expTxt!: string;

  //for SkillComponent
  skillTitle!: string;
  skill1!: string;
  skill2!: string;
  skill3!: string;
  award1!: string;
  award2!: string;
  education!: string;
  educationTxt!: string;

  ngOnInit(): void {
    //experience
    this.expTitle = this.experienceComponent.exp_title;
    this.expTitle_2 = this.experienceComponent.exp_title_2;
    this.expTitle_3 = this.experienceComponent.exp_title_3;
    this.expTxt = this.experienceComponent.getExperience();
    //skill
    this.skillTitle = this.skillComponent.skill_title;
    this.skill1 = this.skillComponent.skill_1;
    this.skill2 = this.skillComponent.skill_2;
    this.skill3 = this.skillComponent.skill_3;
    this.award1 = this.skillComponent.award_1;
    this.award2 = this.skillComponent.award_2;
    this.education = this.skillComponent.education;
    this.educationTxt = this.skillComponent.getEducation();
  }
  //for InfoComponent
  FIO = 'Rachel Benite'
  phone = '+123-456-7890 '
  city = '123 Anywhere St., Any City'
}
