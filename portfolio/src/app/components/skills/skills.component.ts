import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Languages & Frameworks',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Angular (v12-v18)', 'AngularJS', 'RxJS', 'HTML5', 'CSS3/SCSS']
    },
    {
      category: 'Performance & Optimization',
      skills: ['Webpack', 'Lazy Loading', 'HTTP Caching', 'Code Splitting', 'Mixpanel', 'Lighthouse']
    },
    {
      category: 'Testing & Quality',
      skills: ['Jasmine', 'Karma', 'Unit Testing', 'Integration Testing', 'CI/CD', 'Code Reviews']
    },
    {
      category: 'Tools & Environment',
      skills: ['npm', 'Node.js', 'Git', 'WebStorm', 'VSCode', 'Cursor', 'Figma']
    }
  ];
}