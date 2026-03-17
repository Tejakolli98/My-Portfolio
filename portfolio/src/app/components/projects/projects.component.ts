import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  company?: string;
  impact?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Fleet Admin Console Optimization',
      company: 'Netradyne',
      description: 'Reduced screen load time from 20s to 8s (60% improvement) through API caching, RxJS shareReplay, and server-side pagination for 20,000+ daily users.',
      impact: '60% faster load times',
      technologies: ['Angular 18', 'TypeScript', 'RxJS', 'Mixpanel', 'HTTP Caching'],
      github: 'https://github.com/Tejakolli98/My-Portfolio'
    },
    {
      title: 'Shared Component Library',
      company: 'Netradyne',
      description: 'Built reusable component library including paginated tables, search bars, and data cards adopted across entire product.',
      impact: 'Reduced code duplication',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Component Architecture'],
      github: 'https://github.com/Tejakolli98/My-Portfolio'
    },
    {
      title: 'AngularJS to Angular Migration',
      company: 'Netradyne',
      description: 'Core contributor to enterprise platform migration. Built multiple feature pages on modern Angular architecture.',
      impact: 'Modernized legacy codebase',
      technologies: ['Angular', 'AngularJS', 'TypeScript', 'Migration Strategy'],
      github: 'https://github.com/Tejakolli98/My-Portfolio'
    }
  ];
}