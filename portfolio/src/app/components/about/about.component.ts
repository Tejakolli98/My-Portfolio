import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  name = 'Kolli Teja';
  title = 'Senior Frontend Engineer';
  description = `Senior Frontend Engineer with 5.5+ years building data-intensive web platforms 
    used by 20,000+ fleet operators daily. Specialized in Angular, TypeScript, and RxJS with a proven 
    track record of optimizing performance and delivering scalable solutions. Reduced critical screen 
    load times from 20s to 8s through strategic API caching, pagination, and RxJS optimization.`;
  
  highlights = [
    'Built production-grade Angular applications (v12-v18)',
    'Reduced load times by 60% through performance optimization',
    'Led AngularJS to Angular migration for enterprise platform',
    'Created reusable component library adopted across entire product',
    'Improved bundle load time by 20% through Webpack optimization'
  ];
}