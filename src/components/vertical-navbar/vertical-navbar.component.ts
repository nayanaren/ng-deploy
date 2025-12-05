import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';


interface NavItem {
  id: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-vertical-navbar',
  standalone: true,
  imports: [],
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.scss']
})
export class VerticalNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  navItems: NavItem[] = [
    { id: 'hero', label: 'About', href: '#wrapper--hero' },
    { id: 'skills', label: 'Skills', href: '#qualifications--list' },
    { id: 'tech', label: 'Tech Stack', href: '#wrapper--techstack__items' },
    { id: 'work', label: 'Experience', href: '#work-history-wrapper' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' }
  ];

  activeSection: string = 'hero';
  private scrollListener!: () => void;
  private sections: HTMLElement[] = [];

  ngOnInit() {
    this.initializeScrollListener();
    this.findSections();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initializeScrollListener() {
    this.scrollListener = this.throttle(() => {
      this.updateActiveSection();
    }, 100);

    window.addEventListener('scroll', this.scrollListener);
  }

  private findSections() {
    this.sections = this.navItems.map(item => {
      const element = document.querySelector(item.href) as HTMLElement;
      return element;
    }).filter(el => el !== null);
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 100; // Offset for better UX

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = this.navItems[i].id;
        break;
      }
    }
  }

  scrollToSection(href: string, id: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      this.activeSection = id;
    }
  }

  private throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any) {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
}
