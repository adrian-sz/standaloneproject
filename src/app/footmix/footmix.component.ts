import { Component } from '@angular/core';
import { Feet } from '../db/feet';
import { FeetService } from '../db/feet.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-footmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl:'./footmix.component.html',
  styleUrl: './footmix.component.css'
})
export class FootmixComponent {

  selectedItem : Feet = {
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

Footlist: Feet[]

constructor(public FeetPrint : FeetService, public characterStatsService : CharacterStatsService){
  this.Footlist=FeetPrint.getFeet()
}

changeFoot(value: Feet){
  this.selectedItem = value;

  this.characterStatsService.feet = value;
  this.characterStatsService.calculateStats();
}

}
