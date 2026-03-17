import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Tejakolli98', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/teja-kolli-29a15113a', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:tejakolli98@gmail.com', label: 'Email' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}