import { Component } from '@angular/core';
import { Legs } from '../db/legs';
import { LegsService } from '../db/legs.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-legmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './legmix.component.html',
  styleUrl: './legmix.component.css'
})

export class LegmixComponent {

  selectedItem : Legs = {
    id: 0,
      name: '',
      slot: '',
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      mind: 0,
      criticalhit: 0,
      determination: 0,
      directhit: 0,
      defense: 0,
      magicdefense: 0,
      tenacity: 0,
      piety: 0,
      skillspeed: 0,
      spellspeed: 0,
      photo: ''
}

Leglist: Legs[]

constructor(public LegsPrint : LegsService, public characterStatsService : CharacterStatsService){
  this.Leglist=LegsPrint.getLegs()
}

changeHand(value: Legs){
  this.selectedItem = value;

  this.characterStatsService.legs = value;
  this.characterStatsService.calculateStats();
}

}