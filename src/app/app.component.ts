import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { MenuComponent } from './menu/menu.component';

import { CharactermixComponent } from './charactermix/charactermix.component';
import { ItemmixComponent } from './itemmix/itemmix.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterStatsComponent,
    MenuComponent,
    CharactermixComponent,
    ItemmixComponent,
    DropdownComponent
  ],
  //templateUrl: './app.component.html',
  template: `
  <main>

    <section class="menu">
      <app-menu></app-menu>
    </section>
    
    <section class="charactermix">
      <app-charactermix></app-charactermix>
    </section>

    <section class="itemmix">
      <!-- <ul id="itemmix"> -->
      <app-itemmix></app-itemmix>
      <!-- </ul> -->
    </section>
    
    <!-- <section class="dropdown">
      <app-dropdown></app-dropdown>
    </section> -->

  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';
}
