import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CharactermixComponent } from '../charactermix/charactermix.component';
import { CharacterStatsService } from '../db/characterStats.service';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  template: `
    <p>
      Current job: {{characterStatsService.job.name}}<br>
      Current race: {{characterStatsService.race.name}}<br>
      Current damage: {{characterStatsService.characterStats.damage}}
      Current str: {{characterStatsService.characterStats.strength}}<br>
      Current dex: {{characterStatsService.characterStats.dexterity}}<br>
    </p>
  `,
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  @Input() jobName = '';
  @Input() raceName = '';
  @Input() jobStr = 0;
  @Input() raceStr = 0;
  @Input() jobDex = 0;
  @Input() raceDex = 0;

  constructor (public characterStatsService: CharacterStatsService){
    
  }

}
