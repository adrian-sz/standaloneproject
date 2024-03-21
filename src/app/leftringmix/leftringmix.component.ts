import { Component } from '@angular/core';
import { Rings } from '../db/rings';
import { RingsService } from '../db/rings.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-leftringmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './leftringmix.component.html',
  styleUrl: './leftringmix.component.css'
})
export class LeftringmixComponent {

  selectedItem : Rings = {
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

Ringlist: Rings[]

constructor(public RingsPrint : RingsService, public characterStatsService : CharacterStatsService){
  this.Ringlist=RingsPrint.getRings()
}

changeRing(value: Rings){
  this.selectedItem = value;

  this.characterStatsService.leftring = value;
  this.characterStatsService.calculateStats();
}

}
