import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <h1>{{ title }}</h1>
      <p>Portfolio Coming Soon...</p>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #64ffda;
    }
  `]
})
export class AppComponent {
  title = 'Kolli Teja - Senior Frontend Engineer';
}