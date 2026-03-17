import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kolli Teja - Senior Frontend Engineer';
}