import { Component } from '@angular/core';
import { Earrings } from '../db/earrings';
import { EarringsService } from '../db/earrings.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-earringmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './earringmix.component.html',
  styleUrl: './earringmix.component.css'
})
export class EarringmixComponent {

  selectedItem : Earrings = {
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

Earringlist: Earrings[]

constructor(public FeetPrint : EarringsService, public characterStatsService : CharacterStatsService){
  this.Earringlist=FeetPrint.getEarrings()
}

changeEarring(value: Earrings){
  this.selectedItem = value;

  this.characterStatsService.earring = value;
  this.characterStatsService.calculateStats();
}

}
