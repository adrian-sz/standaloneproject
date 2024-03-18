import { Component } from '@angular/core';
import { Races } from '../db/races';
import { RacesService } from '../db/races.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-racesmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  template: `
  <div class="choosetext">
    <h4>Choose Your Race:</h4>
    <mat-form-field>
        <mat-select [disableOptionCentering]="true" placeholder="None" (selectionChange)="changeRace($event.value)">
            @for (job of Racelist; track job) {
                <mat-option [value]="job">{{job.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
  </div>

  <div class="statstext">
    <ul>
    <li class="listingname" *ngIf="selectedRace.name!=''"><strong>Job:</strong> {{ selectedRace.name }}</li>
    <li class="listing" *ngIf="selectedRace.strength>0"><strong>Strength:</strong> {{ selectedRace.strength }}</li>
    <li class="listing" *ngIf="selectedRace.dexterity>0"><strong>Dexterity:</strong> {{ selectedRace.dexterity }}</li>
    <li class="listing" *ngIf="selectedRace.vitality>0"><strong>Vitality:</strong> {{ selectedRace.vitality }}</li>
    <li class="listing" *ngIf="selectedRace.intelligence>0"><strong>Intelligence:</strong> {{ selectedRace.intelligence }}</li>
    <li class="listing" *ngIf="selectedRace.mind>0"><strong>Mind:</strong> {{ selectedRace.mind }}</li>
    </ul>
</div>
  `,
  styleUrl: './racesmix.component.css'
})
export class RacesmixComponent {

  selectedRace : Races = {
    id: 0,
      name: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0
  }
      Racelist: Races[]

  constructor(public RacesPrint : RacesService){
    this.Racelist=RacesPrint.getRaces()
  }

  changeRace(value : Races){
    this.selectedRace.id = value.id;
    this.selectedRace.name = value.name;
    this.selectedRace.strength = value.strength;
    this.selectedRace.dexterity = value.dexterity;
    this.selectedRace.vitality = value.vitality;
    this.selectedRace.intelligence = value.intelligence;
    this.selectedRace.mind = value.mind;
  }
}

