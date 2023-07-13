import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  exp_title = 'Marketing Agency | Dec 2012 - Jan 2014'
  exp_title_2 = 'Pixelpoint Hive | Jan 2014 - Sept 2017'
  exp_title_3 = 'Westheon FGW  | Oct 2017 - present'
  getExperience() {
    return "Conduct day-to-day project coordination and implementation across multiple teams " +
    "Create functional and technical application. Managed complex projects from start to finish "
  }
}
