import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterComponent } from './character/character.component';
import { CharactermixComponent } from './charactermix/charactermix.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterStatsComponent,
    MenuComponent,
    CharacterComponent,
    CharactermixComponent
  ],
  //templateUrl: './app.component.html',
  template: `
  <main>

    <header class="brand-name">
      <img class="brand-logo" src="/assets/supersus.png" alt="logo" aria-hidden="true">
    </header>

    <section class="menu">
      <app-menu></app-menu>
    </section>
    
    <section class="character">
      <app-character></app-character>
    </section>

    <section class="characterstats">
      <app-character-stats></app-character-stats>
    </section>
    
    <section class="charactermix">
      <app-charactermix></app-charactermix>
    </section>
    
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';
}
