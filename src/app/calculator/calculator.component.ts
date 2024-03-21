import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CharactermixComponent } from '../charactermix/charactermix.component';
import { CharacterStatsService } from '../db/characterStats.service';
import { CommonModule } from '@angular/common';

/* This is a child component */

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule

  ],
  template: `
    <p>
      Current job: {{characterStatsService.job.name}}<br>
      Current race: {{characterStatsService.race.name}}<br>
      Current damage: {{characterStatsService.characterStats.damage}}<br>
      Current str: {{characterStatsService.characterStats.strength}}<br>
      Current dex: {{characterStatsService.characterStats.dexterity}}<br>
    </p>

    <div class="statstext">
    <ul>
    <li class="listingname" *ngIf="characterStatsService.job.name!=''"><strong>Job:</strong> {{ characterStatsService.job.name }}</li>
    <li class="listing" *ngIf="characterStatsService.characterStats.damage>0"><strong>Damage:</strong> {{ characterStatsService.characterStats.damage }}</li>
    <li class="listing" *ngIf="characterStatsService.characterStats.strength>0"><strong>Strength:</strong> {{ characterStatsService.characterStats.strength }}</li>
    <li class="listing" *ngIf="characterStatsService.characterStats.dexterity>0"><strong>Dexterity:</strong> {{ characterStatsService.characterStats.dexterity }}</li>
    <!-- <li class="listing" *ngIf="selectedJob.vitality>0"><strong>Vitality:</strong> {{ selectedJob.vitality }}</li>
    <li class="listing" *ngIf="selectedJob.intelligence>0"><strong>Intelligence:</strong> {{ selectedJob.intelligence }}</li>
    <li class="listing" *ngIf="selectedJob.mind>0"><strong>Mind:</strong> {{ selectedJob.mind }}</li>
    <li class="listing" *ngIf="selectedJob.criticalhit>0"><strong>Critical hit:</strong> {{ selectedJob.criticalhit }}</li>
    <li class="listing" *ngIf="selectedJob.determination>0"><strong>Determination:</strong> {{ selectedJob.determination }}</li>
    <li class="listing" *ngIf="selectedJob.directhit>0"><strong>Direct hit:</strong> {{ selectedJob.directhit }}</li>
    <li class="listing" *ngIf="selectedJob.defense>0"><strong>Defense:</strong> {{ selectedJob.defense }}</li>
    <li class="listing" *ngIf="selectedJob.magicdefense>0"><strong>Magic defense:</strong> {{ selectedJob.magicdefense }}</li>
    <li class="listing" *ngIf="selectedJob.tenacity>0"><strong>Tenacity:</strong> {{ selectedJob.tenacity }}</li>
    <li class="listing" *ngIf="selectedJob.piety>0"><strong>Piety:</strong> {{ selectedJob.piety }}</li>
    <li class="listing" *ngIf="selectedJob.skillspeed>0"><strong>Skill speed:</strong> {{ selectedJob.skillspeed }}</li>
    <li class="listing" *ngIf="selectedJob.spellspeed>0"><strong>Spell speed:</strong> {{ selectedJob.spellspeed }}</li> -->
    </ul>
    </div>
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
