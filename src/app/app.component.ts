import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterStatsComponent } from './character-stats/character-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterStatsComponent
  ],
  //templateUrl: './app.component.html',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/supersus.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-character-stats></app-character-stats>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';
}
