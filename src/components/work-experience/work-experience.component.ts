import { Component } from '@angular/core';
import { WorkExperience, WorkExperienceData } from './work-experience-data';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
workExpData: WorkExperience[] = WorkExperienceData;
}
