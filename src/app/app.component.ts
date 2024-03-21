import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { MenuComponent } from './menu/menu.component';
import { CharactermixComponent } from './charactermix/charactermix.component';
import { ItemmixComponent } from './itemmix/itemmix.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeadmixComponent } from './headmix/headmix.component';
import { BodymixComponent } from './bodymix/bodymix.component';
import { RacesmixComponent } from './racesmix/racesmix.component';
import { CalculatorComponent } from './calculator/calculator.component';



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
    HeadmixComponent,
    BodymixComponent,
    RacesmixComponent,
    CalculatorComponent
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

  <div class="racesmix">
    <section class="racesmix">
      <app-racesmix></app-racesmix>
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

  <div class="bodymix">
    <section class="bodymix">
      <app-bodymix></app-bodymix>
    </section>
  </div>

    <div class="reset">
    <button class="reset">   
          <a href="https://adrian-sz.github.io/standaloneproject">
          <img src="https://cdn.discordapp.com/attachments/1079424004491845643/1219410555195101254/reset.png?ex=660b3393&is=65f8be93&hm=a12157ea48342bfdbbf3f94d5a6e92927d66799d6338f04a381e3aadfb30bc81&" width="25px" height="25px" alt="buttonpng"/> 
          </a>
    </button>
    </div>
  </div>
  
  <div>
  <div class="calculator">
      <section class="calculator">
        <app-calculator></app-calculator>
      </section>
    </div>
  </div>
<!-- 
      Current job: {{jobName}}<br> -->
 

  <div class="menu">
    <section class="menu">
      <app-menu></app-menu>
    </section>
  </div>

  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standaloneproject';

/*   @Input() jobName = '';
  @Input() raceName = '';
  @Input() jobStr = 0;
  @Input() raceStr = 0;
  @Input() jobDex = 0;
  @Input() raceDex = 0; */
}
