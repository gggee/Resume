import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: '', component: InfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ExperienceComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ExperienceComponent, SkillComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
