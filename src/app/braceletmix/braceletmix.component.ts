import { Component } from '@angular/core';
import { Bracelets } from '../db/bracelets';
import { BraceletsService } from '../db/bracelets.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CharacterStatsService } from '../db/characterStats.service';

@Component({
  selector: 'app-braceletmix',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './braceletmix.component.html',
  styleUrl: './braceletmix.component.css'
})
export class BraceletmixComponent {

  selectedItem : Bracelets = {
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

  Braceletlist: Bracelets[]

  constructor(public BraceletsPrint : BraceletsService, public characterStatsService : CharacterStatsService){
    this.Braceletlist=BraceletsPrint.getBracelets()
  }

  changeBracelet(value : Bracelets){
    this.selectedItem = value;
   
    this.characterStatsService.bracelet = value;
    this.characterStatsService.calculateStats();
  }

}
