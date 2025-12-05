import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProfileComponent } from "../profile/profile.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { CertificationsComponent } from "../certifications/certifications.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ SkillsComponent, ProfileComponent, WorkExperienceComponent, CertificationsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  activeTab: string = 'skills';
  private tabs: string[] = ['skills', 'experience', 'certifications'];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  onTabKeydown(event: KeyboardEvent, currentTab: string): void {
    const currentIndex = this.tabs.indexOf(currentTab);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : this.tabs.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = this.tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.setActiveTab(currentTab);
        return;
      default:
        return;
    }

    const newTab = this.tabs[newIndex];
    this.setActiveTab(newTab);
    
    // Focus the new tab button
    setTimeout(() => {
      const tabButton = document.querySelector(`[aria-controls="${newTab}-panel"]`) as HTMLElement;
      if (tabButton) {
        tabButton.focus();
      }
    }, 0);
  }
}
