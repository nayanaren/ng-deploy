import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  yearsOfExperience = 9;

  ngOnInit() {
    this.yearsOfExperience = new Date().getFullYear() - 2016; 
  }
}
