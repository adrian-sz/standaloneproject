import { Component } from '@angular/core';
import { Races } from '../db/races';
import { RacesService } from '../db/races.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from '../app.component';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-racesmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    AppComponent
  ],
  templateUrl: `./racesmix.component.html`,
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
      mind: 0,
      photo: ''
  }
      Racelist: Races[]

  constructor(public RacesPrint : RacesService, public characterStatsService : CharacterStatsService){
    this.Racelist=RacesPrint.getRaces()
  }

  changeRace(value : Races){
/*     this.selectedRace.id = value.id;
    this.selectedRace.name = value.name;
    this.selectedRace.strength = value.strength;
    this.selectedRace.dexterity = value.dexterity;
    this.selectedRace.vitality = value.vitality;
    this.selectedRace.intelligence = value.intelligence;
    this.selectedRace.mind = value.mind; */
    this.selectedRace = value;

    this.characterStatsService.race = value;
    this.characterStatsService.calculateStats();
  }
}

