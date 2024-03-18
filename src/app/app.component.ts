import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { MenuComponent } from './menu/menu.component';

import { CharactermixComponent } from './charactermix/charactermix.component';
import { ItemmixComponent } from './itemmix/itemmix.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeadmixComponent } from './headmix/headmix.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterStatsComponent,
    MenuComponent,
    CharactermixComponent,
    ItemmixComponent,
    DropdownComponent,
    HeadmixComponent
  ],
  //templateUrl: './app.component.html',
  template: `
  <main>
  <div class="main">
    
  <div class="menu">
    <section class="menu">
      <app-menu></app-menu>
    </section>
  </div>
    
  <div class="charactermix">
    <section class="charactermix">
      <app-charactermix></app-charactermix>
    </section>
  </div>

  <div class="itemmix">
    <section class="itemmix">  
      <app-itemmix></app-itemmix>
    </section>
  </div>

  <div class="headmix">
    <section class="headmix">
      <app-headmix></app-headmix>
    </section>
  </div>

  </div>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';
}
